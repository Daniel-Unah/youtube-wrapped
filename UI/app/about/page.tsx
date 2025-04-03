"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, BarChart3, Clock, User, ChevronRight } from "lucide-react"
import { useAuth } from "@/context/auth-context"
import NavBar from "@/components/nav-bar"

export default function AboutPage() {
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
                About YouTube Wrapped
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Discover the story behind your personalized YouTube year in review.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is YouTube Wrapped */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4">What is YouTube Wrapped?</h2>
              <p className="text-gray-500 mb-4">
                YouTube Wrapped is an annual personalized experience that showcases your YouTube viewing habits
                throughout the year. It provides insights into your most-watched videos, favorite creators, preferred
                categories, and much more.
              </p>
              <p className="text-gray-500 mb-4">
                Inspired by Spotify's popular year-end review, YouTube Wrapped transforms your viewing data into
                beautiful visualizations and interesting statistics that help you understand your YouTube consumption
                patterns.
              </p>
              <p className="text-gray-500">
                Whether you're curious about how many hours you've spent watching tech tutorials, gaming content, or
                music videos, YouTube Wrapped gives you a comprehensive breakdown of your year on the platform.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-100 rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-100 rounded-full"></div>
                <div className="relative bg-white p-6 rounded-lg shadow-lg z-10">
                  <div className="flex items-center justify-center mb-6">
                    <Play className="h-12 w-12 text-red-600 fill-current" />
                    <span className="text-2xl font-bold ml-2">YouTube Wrapped</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <BarChart3 className="h-6 w-6 text-red-500 mr-3" />
                      <span className="text-gray-700">Personalized analytics</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-6 w-6 text-red-500 mr-3" />
                      <span className="text-gray-700">Watch time insights</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-6 w-6 text-red-500 mr-3" />
                      <span className="text-gray-700">Creator breakdowns</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">How YouTube Wrapped Works</h2>
            <p className="mx-auto max-w-[700px] text-gray-500">
              Understanding the technology and process behind your personalized experience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-xl font-bold text-red-600">1</span>
                  </div>
                  <h3 className="text-xl font-bold">Data Collection</h3>
                  <p className="text-gray-500">
                    With your permission, we securely access your YouTube watch history through the YouTube API to
                    analyze your viewing patterns.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-xl font-bold text-red-600">2</span>
                  </div>
                  <h3 className="text-xl font-bold">Analysis & Processing</h3>
                  <p className="text-gray-500">
                    Our algorithms analyze your viewing data to identify patterns, preferences, and trends throughout
                    the year.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-xl font-bold text-red-600">3</span>
                  </div>
                  <h3 className="text-xl font-bold">Visualization</h3>
                  <p className="text-gray-500">
                    Your data is transformed into beautiful, interactive visualizations that make it easy to understand
                    your YouTube habits.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-red-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-4">
                  At YouTube Wrapped, we believe that understanding your content consumption habits can lead to more
                  mindful viewing and help you discover new content that truly resonates with your interests.
                </p>
                <p className="text-gray-700 mb-4">
                  Our mission is to provide YouTube users with meaningful insights into their viewing patterns while
                  maintaining the highest standards of privacy and data security.
                </p>
                <p className="text-gray-700">
                  We're committed to continuously improving the YouTube Wrapped experience, adding new features and
                  insights that make your year in review even more valuable and enjoyable.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Why We Created YouTube Wrapped</h2>
              <p className="text-gray-500 mb-4">
                YouTube has become an integral part of our daily lives, whether for entertainment, education, or
                inspiration. Yet, most users have little insight into their viewing habits over time.
              </p>
              <p className="text-gray-500 mb-4">
                We created YouTube Wrapped to fill this gap, providing users with a fun, engaging way to reflect on
                their year of YouTube consumption and discover patterns they might not have noticed.
              </p>
              <p className="text-gray-500">
                Our team of data scientists, designers, and developers work together to create an experience that's not
                just informative, but also delightful and shareable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-red-500 to-red-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Experience Your YouTube Wrapped</h2>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Ready to discover your YouTube viewing habits? Sign in now to see your personalized YouTube Wrapped.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              {!isLoggedIn && (
                <Button className="bg-white text-red-600 hover:bg-gray-100" onClick={login}>
                  Sign In Now
                </Button>
              )}
              <Button variant="outline" className="text-white border-white hover:bg-red-600">
                <Link href="/features" className="flex items-center">
                  Explore Features <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

