"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"

export default function CategoriesPage() {
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
            <Link href="/videos" className="text-sm font-medium hover:underline">
              Videos
            </Link>
            <Link href="/categories" className="text-sm font-medium text-red-600 underline">
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Your Category Insights</h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Discover what types of content you've been watching the most.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-8 w-full max-w-3xl">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold">18</div>
                <div className="text-gray-200">Categories Explored</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold">Tech</div>
                <div className="text-gray-200">Top Category</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold">512</div>
                <div className="text-gray-200">Hours in Top Category</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-12 md:py-24 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10">
            {/* Category Distribution */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Category Distribution</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-4">Watch Time by Category</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {categoryData.map((category, index) => (
                        <div key={index} className="p-4 bg-white rounded-lg shadow">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium">{category.name}</h4>
                            <span className="text-sm font-medium">{category.percentage}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="h-2.5 rounded-full"
                              style={{
                                width: `${category.percentage}%`,
                                backgroundColor: categoryColors[index % categoryColors.length],
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  {userCategories.slice(0, 6).map((category, index) => (
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
                    View All Categories
                  </Button>
                </div>
              </div>
            </div>

            {/* Category Treemap */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Category Breakdown</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="h-[500px]">
                    <div className="grid grid-cols-4 gap-4 h-full">
                      {treemapData.map((item, index) => (
                        <div
                          key={index}
                          className="relative flex items-center justify-center rounded-lg text-white p-4"
                          style={{
                            backgroundColor: item.fill,
                            height: `${(item.size / 512) * 100}%`,
                          }}
                        >
                          <div className="text-center">
                            <div className="font-bold">{item.name}</div>
                            <div className="text-sm">{item.hours} hours</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Category Insights */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Category Insights</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-4">Most Watched Time</h3>
                    <div className="text-center">
                      <div className="text-5xl font-bold text-red-500 mb-2">Tech</div>
                      <p className="text-gray-500">512 hours watched</p>
                      <p className="text-gray-500">75% of your total watch time</p>
                      <div className="mt-4 p-3 bg-red-50 rounded-md text-sm">
                        You watched 32% more tech content than last year
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-4">Most Diverse</h3>
                    <div className="text-center">
                      <div className="text-5xl font-bold text-red-500 mb-2">Education</div>
                      <p className="text-gray-500">124 different creators</p>
                      <p className="text-gray-500">307 hours watched</p>
                      <div className="mt-4 p-3 bg-red-50 rounded-md text-sm">
                        You explored 28 new educational channels this year
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-4">Fastest Growing</h3>
                    <div className="text-center">
                      <div className="text-5xl font-bold text-red-500 mb-2">Science</div>
                      <p className="text-gray-500">+215% from last year</p>
                      <p className="text-gray-500">137 hours watched</p>
                      <div className="mt-4 p-3 bg-red-50 rounded-md text-sm">
                        You've discovered a new interest in scientific content
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

// User data for categories
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

// Data for category pie chart
const categoryData = [
  { name: "Tech", percentage: 30 },
  { name: "Programming", percentage: 25 },
  { name: "Education", percentage: 18 },
  { name: "Gaming", percentage: 14 },
  { name: "Music", percentage: 8 },
  { name: "Other", percentage: 5 },
]

// Colors for category pie chart
const categoryColors = [
  "#ef4444", // red
  "#f97316", // orange
  "#eab308", // yellow
  "#22c55e", // green
  "#3b82f6", // blue
  "#a855f7", // purple
  "#ec4899", // pink
  "#64748b", // slate
]

// Data for treemap
const treemapData = [
  {
    name: "Tech",
    size: 512,
    hours: "512",
    videos: 248,
    fill: "#ef4444",
  },
  {
    name: "Programming",
    size: 444,
    hours: "444",
    videos: 186,
    fill: "#f97316",
  },
  {
    name: "Education",
    size: 307,
    hours: "307",
    videos: 124,
    fill: "#eab308",
  },
  {
    name: "Gaming",
    size: 239,
    hours: "239",
    videos: 98,
    fill: "#22c55e",
  },
  {
    name: "Music",
    size: 171,
    hours: "171",
    videos: 76,
    fill: "#3b82f6",
  },
  {
    name: "Science",
    size: 137,
    hours: "137",
    videos: 58,
    fill: "#a855f7",
  },
  {
    name: "Fitness",
    size: 102,
    hours: "102",
    videos: 42,
    fill: "#ec4899",
  },
  {
    name: "Cooking",
    size: 68,
    hours: "68",
    videos: 28,
    fill: "#64748b",
  },
]

