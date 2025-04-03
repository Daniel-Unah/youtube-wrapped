"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Calendar, Mail, User, Clock, Play, BarChart3 } from "lucide-react"
import { useAuth } from "@/context/auth-context"
import NavBar from "@/components/nav-bar"

export default function ProfilePage() {
  const { isLoggedIn, user } = useAuth()
  const router = useRouter()

  // Redirect if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/")
    }
  }, [isLoggedIn, router])

  if (!isLoggedIn || !user) {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-1 py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Profile Card */}
            <Card className="md:col-span-1">
              <CardHeader className="pb-3">
                <CardTitle>Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
                    <img src={user.avatar || "/placeholder.svg"} alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <div className="text-center">
                    <h2 className="text-xl font-bold">{user.name}</h2>
                    <p className="text-sm text-gray-500">@{user.username}</p>
                  </div>
                  <div className="w-full space-y-2">
                    <div className="flex items-center text-sm">
                      <Mail className="mr-2 h-4 w-4 text-gray-500" />
                      <span>{user.email}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-2 h-4 w-4 text-gray-500" />
                      <span>Joined {user.joinDate}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stats and Activity */}
            <div className="md:col-span-2 space-y-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>YouTube Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                      <Play className="h-5 w-5 text-red-500 mb-2" />
                      <div className="text-2xl font-bold">1,842</div>
                      <div className="text-xs text-gray-500">Videos Watched</div>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                      <Clock className="h-5 w-5 text-red-500 mb-2" />
                      <div className="text-2xl font-bold">683</div>
                      <div className="text-xs text-gray-500">Hours Watched</div>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                      <User className="h-5 w-5 text-red-500 mb-2" />
                      <div className="text-2xl font-bold">247</div>
                      <div className="text-xs text-gray-500">Channels</div>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                      <BarChart3 className="h-5 w-5 text-red-500 mb-2" />
                      <div className="text-2xl font-bold">18</div>
                      <div className="text-xs text-gray-500">Categories</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Email Notifications</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Weekly YouTube Wrapped updates</span>
                      <div className="w-10 h-5 bg-red-500 rounded-full relative">
                        <div className="absolute right-0.5 top-0.5 bg-white w-4 h-4 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-sm font-medium mb-2">Privacy Settings</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Make my YouTube Wrapped public</span>
                      <div className="w-10 h-5 bg-gray-300 rounded-full relative">
                        <div className="absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-sm font-medium mb-2">Connected Accounts</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-2">
                          <Play className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm">YouTube</span>
                      </div>
                      <span className="text-xs text-green-500">Connected</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

