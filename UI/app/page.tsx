"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, Clock, Play, User } from "lucide-react"
import { useAuth } from "@/context/auth-context"
import NavBar from "@/components/nav-bar"

export default function Home() {
  const { isLoggedIn, login } = useAuth()

  return (
    <main className="flex min-h-screen flex-col">
      {isLoggedIn ? <AuthenticatedHome /> : <UnauthenticatedHome onSignIn={login} />}
    </main>
  )
}

function UnauthenticatedHome({ onSignIn }) {
  return (
    <div className="flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-red-500 to-red-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Your YouTube Year in Review
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Discover your viewing habits, favorite creators, and more with YouTube Wrapped.
              </p>
            </div>
            <div className="space-x-4">
              <Button className="bg-white text-red-600 hover:bg-gray-100" onClick={onSignIn}>
                Log in with Google
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Preview Your Wrapped</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Here's a sample of what your personalized YouTube Wrapped could look like.
            </p>
          </div>

          <Tabs defaultValue="overview" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="channels">Channels</TabsTrigger>
              <TabsTrigger value="categories">Categories</TabsTrigger>
              <TabsTrigger value="time">Watch Time</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <StatsCard
                  icon={<Play className="h-5 w-5 text-red-500" />}
                  title="Videos Watched"
                  value="1,248"
                  description="That's 4 videos per day!"
                />
                <StatsCard
                  icon={<Clock className="h-5 w-5 text-red-500" />}
                  title="Total Watch Time"
                  value="438 hours"
                  description="That's 18 days of content!"
                />
                <StatsCard
                  icon={<User className="h-5 w-5 text-red-500" />}
                  title="Creators Explored"
                  value="156"
                  description="You love variety!"
                />
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Top Videos</h3>
                <div className="grid gap-4">
                  {sampleTopVideos.map((video, index) => (
                    <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow">
                      <div className="flex-shrink-0 mr-4 bg-gray-300 w-24 h-16 rounded flex items-center justify-center">
                        <Play className="h-8 w-8 text-gray-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">{video.title}</h4>
                        <p className="text-sm text-gray-500">
                          {video.channel} • {video.views} views
                        </p>
                      </div>
                      <div className="ml-auto text-sm font-medium text-gray-500">{video.watchCount} times</div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="channels" className="mt-6">
              <h3 className="text-xl font-bold mb-4">Top Channels</h3>
              <div className="space-y-6">
                {sampleTopChannels.map((channel, index) => (
                  <div key={index} className="flex items-center">
                    <div className="mr-4 text-xl font-bold text-gray-400 w-6">#{index + 1}</div>
                    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mr-4">
                      <User className="h-6 w-6 text-gray-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">{channel.name}</h4>
                      <p className="text-sm text-gray-500">{channel.subscribers} subscribers</p>
                    </div>
                    <div className="ml-auto">
                      <div className="text-right font-medium">{channel.watchTime}</div>
                      <div className="text-sm text-gray-500">{channel.videos} videos</div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="categories" className="mt-6">
              <h3 className="text-xl font-bold mb-4">Video Categories</h3>
              <div className="h-80 flex items-end justify-between gap-2 mb-4">
                {sampleCategories.map((category, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="bg-red-500 w-16 rounded-t-md" style={{ height: `${category.percentage}%` }}></div>
                    <p className="text-xs mt-2 font-medium">{category.name}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-500">Technology and Gaming dominate your viewing habits!</p>
            </TabsContent>

            <TabsContent value="time" className="mt-6">
              <h3 className="text-xl font-bold mb-4">Watch Time Patterns</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Daily Breakdown</h4>
                  <div className="h-40 flex items-end justify-between gap-2 mb-4">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div
                          className="bg-red-500 w-12 rounded-t-md"
                          style={{ height: `${Math.random() * 70 + 30}%` }}
                        ></div>
                        <p className="text-xs mt-2">{day}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Time of Day</h4>
                  <div className="h-40 flex items-end justify-between gap-2">
                    {["Morning", "Afternoon", "Evening", "Night"].map((time, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div
                          className="bg-red-500 w-16 rounded-t-md"
                          style={{ height: `${Math.random() * 70 + 30}%` }}
                        ></div>
                        <p className="text-xs mt-2">{time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center mt-12">
            <Button className="bg-red-600 hover:bg-red-700" onClick={onSignIn}>
              Log in to See Your Wrapped
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Discover Your YouTube Story</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              YouTube Wrapped gives you insights into your viewing habits that you never knew existed.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<BarChart3 className="h-10 w-10 text-red-500" />}
              title="Detailed Analytics"
              description="Get comprehensive stats about your viewing habits, favorite creators, and more."
            />
            <FeatureCard
              icon={<Clock className="h-10 w-10 text-red-500" />}
              title="Time Tracking"
              description="See how much time you've spent watching different types of content."
            />
            <FeatureCard
              icon={<User className="h-10 w-10 text-red-500" />}
              title="Creator Insights"
              description="Discover which creators you've supported the most throughout the year."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function AuthenticatedHome() {
  return (
    <div className="flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-red-500 to-red-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Your 2023 YouTube Wrapped
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Here's a look at your year in YouTube. You've watched a lot!
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-8 w-full max-w-3xl">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold">1,842</div>
                <div className="text-gray-200">Videos Watched</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold">683</div>
                <div className="text-gray-200">Hours Spent</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold">247</div>
                <div className="text-gray-200">Creators Supported</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="channels">Channels</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="categories">Categories</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <StatsCard
                  icon={<Play className="h-5 w-5 text-red-500" />}
                  title="Videos Watched"
                  value="1,842"
                  description="That's 5 videos per day!"
                />
                <StatsCard
                  icon={<Clock className="h-5 w-5 text-red-500" />}
                  title="Total Watch Time"
                  value="683 hours"
                  description="That's 28 days of content!"
                />
                <StatsCard
                  icon={<User className="h-5 w-5 text-red-500" />}
                  title="Creators Watched"
                  value="247"
                  description="You love variety!"
                />
                <StatsCard
                  icon={<BarChart3 className="h-5 w-5 text-red-500" />}
                  title="Categories Explored"
                  value="18"
                  description="You're well-rounded!"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2 mt-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Top Videos</h3>
                  <div className="grid gap-4">
                    {userTopVideos.slice(0, 5).map((video, index) => (
                      <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow">
                        <div className="flex-shrink-0 mr-4 bg-gray-300 w-24 h-16 rounded flex items-center justify-center">
                          <Play className="h-8 w-8 text-gray-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">{video.title}</h4>
                          <p className="text-sm text-gray-500">
                            {video.channel} • {video.views} views
                          </p>
                        </div>
                        <div className="ml-auto text-sm font-medium text-gray-500">{video.watchCount} times</div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      <Link href="/videos">View All Videos</Link>
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Top Channels</h3>
                  <div className="space-y-4">
                    {userTopChannels.slice(0, 5).map((channel, index) => (
                      <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow">
                        <div className="mr-4 text-xl font-bold text-gray-400 w-6">#{index + 1}</div>
                        <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mr-4">
                          <User className="h-6 w-6 text-gray-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">{channel.name}</h4>
                          <p className="text-sm text-gray-500">{channel.subscribers} subscribers</p>
                        </div>
                        <div className="ml-auto">
                          <div className="text-right font-medium">{channel.watchTime}</div>
                          <div className="text-sm text-gray-500">{channel.videos} videos</div>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      <Link href="/channels">View All Channels</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Watch Time Patterns</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-medium mb-2">Daily Breakdown</h4>
                      <div className="h-60 flex items-end justify-between gap-2">
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
                          <div key={index} className="flex flex-col items-center">
                            <div
                              className="bg-red-500 w-12 rounded-t-md"
                              style={{ height: `${Math.random() * 70 + 30}%` }}
                            ></div>
                            <p className="text-xs mt-2">{day}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-medium mb-2">Time of Day</h4>
                      <div className="h-60 flex items-end justify-between gap-2">
                        {["Morning", "Afternoon", "Evening", "Night"].map((time, index) => (
                          <div key={index} className="flex flex-col items-center">
                            <div
                              className="bg-red-500 w-16 rounded-t-md"
                              style={{ height: `${Math.random() * 70 + 30}%` }}
                            ></div>
                            <p className="text-xs mt-2">{time}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="channels" className="mt-6">
              <h3 className="text-xl font-bold mb-4">Your Top Channels</h3>
              <div className="space-y-6">
                {userTopChannels.map((channel, index) => (
                  <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow">
                    <div className="mr-4 text-xl font-bold text-gray-400 w-6">#{index + 1}</div>
                    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mr-4">
                      <User className="h-6 w-6 text-gray-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">{channel.name}</h4>
                      <p className="text-sm text-gray-500">{channel.subscribers} subscribers</p>
                    </div>
                    <div className="ml-auto">
                      <div className="text-right font-medium">{channel.watchTime}</div>
                      <div className="text-sm text-gray-500">{channel.videos} videos</div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  <Link href="/channels">See Detailed Channel Analysis</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="videos" className="mt-6">
              <h3 className="text-xl font-bold mb-4">Your Top Videos</h3>
              <div className="grid gap-4">
                {userTopVideos.map((video, index) => (
                  <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow">
                    <div className="mr-4 text-xl font-bold text-gray-400 w-6">#{index + 1}</div>
                    <div className="flex-shrink-0 mr-4 bg-gray-300 w-24 h-16 rounded flex items-center justify-center">
                      <Play className="h-8 w-8 text-gray-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">{video.title}</h4>
                      <p className="text-sm text-gray-500">
                        {video.channel} • {video.views} views
                      </p>
                    </div>
                    <div className="ml-auto">
                      <div className="text-right font-medium">{video.watchCount} times</div>
                      <div className="text-sm text-gray-500">{video.duration} total</div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  <Link href="/videos">See Detailed Video Analysis</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="categories" className="mt-6">
              <h3 className="text-xl font-bold mb-4">Video Categories</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-medium mb-2">Category Breakdown</h4>
                    <div className="h-80 flex items-end justify-between gap-2">
                      {userCategories.map((category, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div
                            className="bg-red-500 w-12 rounded-t-md"
                            style={{ height: `${category.percentage}%` }}
                          ></div>
                          <p className="text-xs mt-2 font-medium">{category.name}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  {userCategories.map((category, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg shadow">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">{category.name}</h4>
                        <span className="text-sm font-medium">{category.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-red-500 h-2.5 rounded-full"
                          style={{ width: `${category.percentage}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        {category.hours} hours • {category.videos} videos
                      </p>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    <Link href="/categories">See Detailed Category Analysis</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

function StatsCard({ icon, title, value, description }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center space-x-2">
          {icon}
          <h3 className="font-medium">{title}</h3>
        </div>
        <div className="mt-3">
          <div className="text-3xl font-bold">{value}</div>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="p-4 bg-red-100 rounded-full">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  )
}

// Sample data for non-logged-in users
const sampleTopVideos = [
  { title: "How to Build a Website in 2023", channel: "TechMaster", views: "1.2M", watchCount: 8 },
  { title: "The Ultimate Productivity System", channel: "Productivity Guru", views: "850K", watchCount: 5 },
  { title: "Learn JavaScript in 1 Hour", channel: "Code With Me", views: "2.4M", watchCount: 3 },
]

const sampleTopChannels = [
  { name: "TechMaster", subscribers: "2.4M", watchTime: "42 hours", videos: 28 },
  { name: "Productivity Guru", subscribers: "1.8M", watchTime: "36 hours", videos: 22 },
  { name: "Code With Me", subscribers: "3.2M", watchTime: "28 hours", videos: 15 },
  { name: "Gaming Central", subscribers: "5.1M", watchTime: "24 hours", videos: 18 },
  { name: "Cooking Adventures", subscribers: "1.5M", watchTime: "18 hours", videos: 12 },
]

const sampleCategories = [
  { name: "Tech", percentage: 85 },
  { name: "Gaming", percentage: 65 },
  { name: "Education", percentage: 50 },
  { name: "Music", percentage: 40 },
  { name: "Cooking", percentage: 30 },
  { name: "Fitness", percentage: 20 },
]

// User data for logged-in users
const userTopVideos = [
  { title: "Advanced React Patterns", channel: "React Masters", views: "1.8M", watchCount: 12, duration: "3.5 hours" },
  { title: "Building a SaaS in 2023", channel: "Startup Central", views: "950K", watchCount: 9, duration: "2.8 hours" },
  { title: "Next.js 13 Full Course", channel: "Code With Me", views: "2.1M", watchCount: 7, duration: "5.2 hours" },
  { title: "The Future of AI", channel: "Tech Insights", views: "3.4M", watchCount: 6, duration: "1.5 hours" },
  {
    title: "Productivity System for Developers",
    channel: "Dev Lifestyle",
    views: "780K",
    watchCount: 5,
    duration: "1.2 hours",
  },
  { title: "TypeScript Deep Dive", channel: "TypeScript Guru", views: "1.2M", watchCount: 4, duration: "4.8 hours" },
  { title: "Building a Personal Brand", channel: "Career Growth", views: "650K", watchCount: 3, duration: "0.9 hours" },
  { title: "Modern CSS Techniques", channel: "CSS Wizards", views: "1.5M", watchCount: 3, duration: "2.1 hours" },
]

const userTopChannels = [
  { name: "React Masters", subscribers: "2.8M", watchTime: "68 hours", videos: 42 },
  { name: "Code With Me", subscribers: "3.2M", watchTime: "54 hours", videos: 36 },
  { name: "Tech Insights", subscribers: "4.5M", watchTime: "48 hours", videos: 32 },
  { name: "Startup Central", subscribers: "1.2M", watchTime: "42 hours", videos: 28 },
  { name: "Dev Lifestyle", subscribers: "950K", watchTime: "36 hours", videos: 24 },
  { name: "TypeScript Guru", subscribers: "1.8M", watchTime: "32 hours", videos: 18 },
  { name: "CSS Wizards", subscribers: "2.1M", watchTime: "28 hours", videos: 16 },
  { name: "Career Growth", subscribers: "1.5M", watchTime: "24 hours", videos: 14 },
]

const userCategories = [
  { name: "Tech", percentage: 75, hours: "512", videos: 248 },
  { name: "Programming", percentage: 65, hours: "444", videos: 186 },
  { name: "Education", percentage: 45, hours: "307", videos: 124 },
  { name: "Gaming", percentage: 35, hours: "239", videos: 98 },
  { name: "Music", percentage: 25, hours: "171", videos: 76 },
  { name: "Science", percentage: 20, hours: "137", videos: 58 },
  { name: "Fitness", percentage: 15, hours: "102", videos: 42 },
  { name: "Cooking", percentage: 10, hours: "68", videos: 28 },
]

