const { google } = require("googleapis");
const unzipper = require("unzipper");
const cheerio = require("cheerio");

async function fetchTakeoutData(accessToken) {
  console.log("🔍 Fetching Takeout data...");

  // Set up auth
  const auth = new google.auth.OAuth2();
  auth.setCredentials({ access_token: accessToken });
  const drive = google.drive({ version: "v3", auth });

  // Find the Takeout folder
  const folderRes = await drive.files.list({
    q: "name = 'Takeout' and mimeType = 'application/vnd.google-apps.folder'",
    fields: "files(id, name)",
    spaces: "drive",
    includeItemsFromAllDrives: true,
    supportsAllDrives: true,
  });

  if (folderRes.data.files.length === 0) {
    console.log("❌ 'Takeout' folder not found.");
    return;
  }

  const takeoutFolderId = folderRes.data.files[0].id;
  console.log(`📁 Found 'Takeout' folder with ID: ${takeoutFolderId}`);

  // List contents of the folder
  const folderContents = await drive.files.list({
    q: `'${takeoutFolderId}' in parents`,
    fields: "files(id, name, mimeType, modifiedTime)",
    orderBy: "modifiedTime desc",
    pageSize: 10,
    includeItemsFromAllDrives: true,
    supportsAllDrives: true,
  });

  console.log("📁 Contents of 'Takeout' folder:");
  folderContents.data.files.forEach((file, idx) => {
    console.log(`${idx + 1}. ${file.name} [${file.mimeType}]`);
  });

  // Find the most recent takeout ZIP
  const zipFile = folderContents.data.files.find(file =>
    file.name.endsWith(".zip") && file.name.includes("takeout")
  );

  if (!zipFile) {
    console.log("❌ No takeout ZIP file found.");
    return;
  }

  console.log(`✅ Found takeout ZIP: ${zipFile.name}`);

  // Stream and unzip the file
  const res = await drive.files.get(
    { fileId: zipFile.id, alt: "media" },
    { responseType: "stream" }
  );

  const zipStream = res.data.pipe(unzipper.Parse({ forceStream: true }));

  for await (const entry of zipStream) {
    const fileName = entry.path.toLowerCase();
    console.log(`🗂️ Found file in ZIP: ${fileName}`);

    if (fileName.includes("watch-history") && (fileName.endsWith(".json") || fileName.endsWith(".html"))) {
      console.log(`📄 Found watch history file (${fileName}) — parsing...`);

      const chunks = [];
      for await (const chunk of entry) {
        chunks.push(chunk);
      }

      const content = Buffer.concat(chunks).toString("utf8");

      if (fileName.endsWith(".json")) {
        // ✅ Parse JSON version
        const json = JSON.parse(content);
        console.log(`✅ Parsed ${json.length} entries from watch-history.json`);
        json.slice(0, 5).forEach((entry, i) =>
          console.log(`${i + 1}. ${entry.title} — ${entry.time}`)
        );
        return json;

      } else {
        // ✅ Parse HTML version
        const $ = cheerio.load(content);
        const watchEntries = [];

        $("div, p").each((i, el) => {
          const text = $(el).text();
          if (/watched/i.test(text)) {
            watchEntries.push(text);
          }
        });

        console.log(`✅ Parsed ${watchEntries.length} entries from watch-history.html`);
        watchEntries.slice(0, 5).forEach((entry, i) =>
          console.log(`${i + 1}. ${entry}`)
        );

        return watchEntries;
      }
    } else {
      entry.autodrain();
    }
  }

  console.log("❌ watch-history file not found in ZIP.");
}

module.exports = fetchTakeoutData;
