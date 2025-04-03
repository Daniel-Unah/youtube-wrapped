"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Clock, Play, User, Share2, PieChart, LineChart, Award, Zap, Lock } from "lucide-react"
import { useAuth } from "@/context/auth-context"
import NavBar from "@/components/nav-bar"

export default function FeaturesPage() {
  const { isLoggedIn, login } = useAuth()

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-red-500 to-red-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Features & Capabilities
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Discover everything YouTube Wrapped has to offer to enhance your YouTube experience.
              </p>
            </div>
            {!isLoggedIn && (
              <Button className="bg-white text-red-600 hover:bg-gray-100" onClick={login}>
                Get Started Now
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Core Features</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              YouTube Wrapped provides comprehensive insights into your viewing habits.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<BarChart3 className="h-10 w-10 text-red-500" />}
              title="Detailed Analytics"
              description="Get comprehensive stats about your viewing habits, favorite creators, and more."
            />
            <FeatureCard
              icon={<Clock className="h-10 w-10 text-red-500" />}
              title="Time Tracking"
              description="See how much time you've spent watching different types of content throughout the year."
            />
            <FeatureCard
              icon={<User className="h-10 w-10 text-red-500" />}
              title="Creator Insights"
              description="Discover which creators you've supported the most and how your viewing patterns have changed."
            />
            <FeatureCard
              icon={<PieChart className="h-10 w-10 text-red-500" />}
              title="Category Breakdown"
              description="Visualize the distribution of content categories you've consumed over time."
            />
            <FeatureCard
              icon={<LineChart className="h-10 w-10 text-red-500" />}
              title="Trend Analysis"
              description="Track how your viewing habits have evolved throughout the year with trend analysis."
            />
            <FeatureCard
              icon={<Share2 className="h-10 w-10 text-red-500" />}
              title="Shareable Results"
              description="Easily share your YouTube Wrapped insights with friends on social media."
            />
          </div>
        </div>
      </section>

      {/* Dashboard Features */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Interactive Dashboard</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Explore your YouTube data through our intuitive and interactive dashboard.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Dashboard Overview</CardTitle>
                <CardDescription>A comprehensive view of your YouTube activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-red-100 rounded-full">
                      <Play className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Video Count Tracking</h3>
                      <p className="text-sm text-gray-500">
                        See exactly how many videos you've watched throughout the year, broken down by month.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-red-100 rounded-full">
                      <Clock className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Watch Time Analysis</h3>
                      <p className="text-sm text-gray-500">
                        Track your total watch time and see how it's distributed across different times of day.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-red-100 rounded-full">
                      <Award className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Achievement Badges</h3>
                      <p className="text-sm text-gray-500">
                        Earn special badges based on your viewing milestones and patterns.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Detailed Breakdowns</CardTitle>
                <CardDescription>Dive deeper into specific aspects of your viewing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-red-100 rounded-full">
                      <User className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Channel Analysis</h3>
                      <p className="text-sm text-gray-500">
                        Explore which channels you watch most frequently and how your channel preferences have evolved.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-red-100 rounded-full">
                      <PieChart className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Category Insights</h3>
                      <p className="text-sm text-gray-500">
                        Visualize the distribution of content categories you consume with interactive charts.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-red-100 rounded-full">
                      <Zap className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Trend Detection</h3>
                      <p className="text-sm text-gray-500">
                        Identify emerging trends in your viewing habits and discover new content you might enjoy.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Features */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Privacy & Security</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Your data privacy and security are our top priorities.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Lock className="h-8 w-8 text-red-500" />
                <div>
                  <CardTitle>Data Privacy</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Your YouTube data is only used to generate your personal Wrapped experience and is never shared with
                  third parties.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <User className="h-8 w-8 text-red-500" />
                <div>
                  <CardTitle>User Control</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  You have complete control over what data is used and can delete your information at any time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Share2 className="h-8 w-8 text-red-500" />
                <div>
                  <CardTitle>Sharing Options</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Choose exactly what insights you want to share with friends and on social media.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-red-500 to-red-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Unwrap Your YouTube Year?</h2>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Sign in now to see your personalized YouTube Wrapped experience.
              </p>
            </div>
            {!isLoggedIn && (
              <Button className="bg-white text-red-600 hover:bg-gray-100" onClick={login}>
                Get Started
              </Button>
            )}
            {isLoggedIn && (
              <Button className="bg-white text-red-600 hover:bg-gray-100">
                <Link href="/">Go to Dashboard</Link>
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-3 bg-red-100 rounded-full">{icon}</div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-500">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

