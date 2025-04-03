"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, Cell, Pie, PieChart, XAxis, YAxis } from "recharts"

export default function VideosPage() {
  return (
    <div className="flex flex-col">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-10 w-full bg-white border-b">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="flex items-center gap-2">
                <Play className="h-6 w-6 text-red-600 fill-current" />
                <span className="text-xl font-bold">YouTube Wrapped</span>
              </div>
            </Link>
          </div>
          <nav className="ml-8 hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline">
              Dashboard
            </Link>
            <Link href="/channels" className="text-sm font-medium hover:underline">
              Channels
            </Link>
            <Link href="/videos" className="text-sm font-medium text-red-600 underline">
              Videos
            </Link>
            <Link href="/categories" className="text-sm font-medium hover:underline">
              Categories
            </Link>
          </nav>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Share My Wrapped
            </Button>
            <div className="relative cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                <img src="/placeholder.svg?height=40&width=40" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 bg-gradient-to-b from-red-500 to-red-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Your Video Insights</h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Discover your most watched videos and viewing patterns.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-8 w-full max-w-3xl">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold">1,842</div>
                <div className="text-gray-200">Videos Watched</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold">12</div>
                <div className="text-gray-200">Most Rewatched</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold">683</div>
                <div className="text-gray-200">Hours Watched</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-12 md:py-24 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10">
            {/* Top Videos */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Your Most Watched Videos</h2>
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
              </div>
            </div>

            {/* Video Stats */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Video Watching Patterns</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-4">Video Length Preference</h3>
                    <div className="h-[300px]">
                      <ChartContainer
                        config={{
                          count: {
                            label: "Videos Watched",
                            color: "hsl(var(--chart-1))",
                          },
                        }}
                      >
                        <BarChart data={videoLengthData} margin={{ top: 10, right: 10, left: 40, bottom: 20 }}>
                          <XAxis dataKey="length" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent formatValue={(value) => `${value} videos`} />} />
                          <Bar dataKey="count" fill="var(--color-count)" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ChartContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-4">Video Completion Rate</h3>
                    <div className="h-[300px] flex items-center justify-center">
                      <ChartContainer
                        config={{
                          value: {
                            label: "Completion Rate",
                            color: "hsl(var(--chart-1))",
                          },
                        }}
                      >
                        <PieChart width={250} height={250}>
                          <Pie
                            data={videoCompletionData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {videoCompletionData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <ChartTooltip content={<ChartTooltipContent formatValue={(value) => `${value}%`} />} />
                        </PieChart>
                      </ChartContainer>
                      <div className="ml-4 space-y-2">
                        {videoCompletionData.map((item, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                            <span className="text-sm">{item.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Video Watching Trends */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Video Watching Trends</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-4">Time of Day</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Morning</span>
                          <span className="text-sm font-medium">15%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{ width: "15%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Afternoon</span>
                          <span className="text-sm font-medium">25%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Evening</span>
                          <span className="text-sm font-medium">40%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{ width: "40%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Night</span>
                          <span className="text-sm font-medium">20%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{ width: "20%" }}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-4">Day of Week</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Weekdays</span>
                          <span className="text-sm font-medium">65%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Weekends</span>
                          <span className="text-sm font-medium">35%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{ width: "35%" }}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-4">Device Usage</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Mobile</span>
                          <span className="text-sm font-medium">45%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Desktop</span>
                          <span className="text-sm font-medium">40%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{ width: "40%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">TV</span>
                          <span className="text-sm font-medium">15%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{ width: "15%" }}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// User data for videos
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

// Data for video length chart
const videoLengthData = [
  { length: "< 5 min", count: 420 },
  { length: "5-10 min", count: 580 },
  { length: "10-20 min", count: 380 },
  { length: "20-30 min", count: 240 },
  { length: "30-60 min", count: 150 },
  { length: "> 60 min", count: 72 },
]

// Data for video completion pie chart
const videoCompletionData = [
  { name: "Watched Fully", value: 68, color: "#ef4444" },
  { name: "Watched 75%", value: 17, color: "#f97316" },
  { name: "Watched 50%", value: 10, color: "#eab308" },
  { name: "Watched 25%", value: 5, color: "#a3a3a3" },
]

