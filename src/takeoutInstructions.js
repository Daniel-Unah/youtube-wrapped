import React from "react";

const TakeoutInstructions = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Export Your YouTube Watch History</h2>
      <p>To get your wrapped experience:</p>
      <ol style={{ textAlign: "left", maxWidth: "600px", margin: "auto" }}>
        <li>Click the button below to open <strong>Google Takeout</strong>.</li>
        <li>Deselect all services.</li>
        <li>Select <strong>YouTube and YouTube Music</strong>.</li>
        <li>Choose to export to <strong>Google Drive</strong>.</li>
        <li>Click “Create export” and wait for the email from Google.</li>
        <li>Come back here and click the second button to check for your data.</li>
      </ol>

      <a href="https://takeout.google.com/" target="_blank" rel="noopener noreferrer">
        <button style={{ margin: "10px" }}>Open Google Takeout</button>
      </a>

      <form action="http://localhost:5000/api/fetch-takeout" method="POST">
        <button type="submit">Check My Google Drive</button>
      </form>
    </div>
  );
};

export default TakeoutInstructions;
