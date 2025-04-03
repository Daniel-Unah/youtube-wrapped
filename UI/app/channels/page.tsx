"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { User } from "lucide-react"
import { useAuth } from "@/context/auth-context"
import NavBar from "@/components/nav-bar"

export default function ChannelsPage() {
  const { isLoggedIn } = useAuth()
  const router = useRouter()

  // Redirect if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/")
    }
  }, [isLoggedIn, router])

  if (!isLoggedIn) {
    return null
  }

  return (
    <div className="flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 bg-gradient-to-b from-red-500 to-red-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Your Channel Insights</h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Discover which creators you've spent the most time with this year.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-8 w-full max-w-3xl">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold">247</div>
                <div className="text-gray-200">Channels Watched</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold">68</div>
                <div className="text-gray-200">Hours on Top Channel</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold">42</div>
                <div className="text-gray-200">Videos from Favorite</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-12 md:py-24 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10">
            {/* Top Channels */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Your Top Channels</h2>
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
              </div>
            </div>

            {/* Channel Watch Time Chart */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Channel Watch Time</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="h-[400px]">
                    <div className="space-y-6">
                      {channelWatchTimeData.map((channel, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">{channel.name}</span>
                            <span className="text-sm font-medium">{channel.watchTime} hours</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                              className="bg-red-500 h-3 rounded-full"
                              style={{ width: `${(channel.watchTime / 68) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Channel Growth */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Channel Discovery</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-4">New Channels Discovered</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-3xl font-bold text-red-500">86</div>
                        <div className="text-sm text-gray-500 text-center">This Month</div>
                      </div>
                      <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-3xl font-bold text-red-500">247</div>
                        <div className="text-sm text-gray-500 text-center">This Year</div>
                      </div>
                      <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-3xl font-bold text-red-500">+32%</div>
                        <div className="text-sm text-gray-500 text-center">From Last Year</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-4">Channel Loyalty</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">React Masters</span>
                          <span className="text-sm font-medium">92%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">You watched 92% of their new uploads</p>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Code With Me</span>
                          <span className="text-sm font-medium">87%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{ width: "87%" }}></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">You watched 87% of their new uploads</p>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Tech Insights</span>
                          <span className="text-sm font-medium">78%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">You watched 78% of their new uploads</p>
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

// User data for channels
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

// Data for channel watch time chart
const channelWatchTimeData = [
  { name: "React Masters", watchTime: 68 },
  { name: "Code With Me", watchTime: 54 },
  { name: "Tech Insights", watchTime: 48 },
  { name: "Startup Central", watchTime: 42 },
  { name: "Dev Lifestyle", watchTime: 36 },
  { name: "TypeScript Guru", watchTime: 32 },
  { name: "CSS Wizards", watchTime: 28 },
  { name: "Career Growth", watchTime: 24 },
].sort((a, b) => b.watchTime - a.watchTime)

