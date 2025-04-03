"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import { useAuth } from "@/context/auth-context"
import NavBar from "@/components/nav-bar"

export default function FAQPage() {
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
                Frequently Asked Questions
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Find answers to common questions about YouTube Wrapped.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-2xl font-bold mb-4">FAQ Categories</h2>
                <div className="space-y-2">
                  <a href="#general" className="block p-2 bg-red-50 rounded-md text-red-600 font-medium">
                    General Questions
                  </a>
                  <a href="#account" className="block p-2 hover:bg-gray-50 rounded-md">
                    Account & Access
                  </a>
                  <a href="#privacy" className="block p-2 hover:bg-gray-50 rounded-md">
                    Privacy & Data
                  </a>
                  <a href="#features" className="block p-2 hover:bg-gray-50 rounded-md">
                    Features & Usage
                  </a>
                  <a href="#troubleshooting" className="block p-2 hover:bg-gray-50 rounded-md">
                    Troubleshooting
                  </a>
                </div>

                <div className="mt-8 p-6 bg-red-50 rounded-lg">
                  <h3 className="font-bold mb-2">Still have questions?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    If you couldn't find the answer to your question, feel free to contact our support team.
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700">Contact Support</Button>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div id="general" className="mb-12">
                <h2 className="text-2xl font-bold mb-6">General Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is YouTube Wrapped?</AccordionTrigger>
                    <AccordionContent>
                      YouTube Wrapped is a personalized year-in-review experience that provides insights into your
                      YouTube viewing habits. It analyzes your watch history to show you statistics like your
                      most-watched videos, favorite creators, preferred categories, and viewing patterns throughout the
                      year.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is YouTube Wrapped an official YouTube product?</AccordionTrigger>
                    <AccordionContent>
                      No, YouTube Wrapped is not an official product from YouTube or Google. It's a third-party service
                      that uses the YouTube API to access your watch history data (with your permission) and provide
                      personalized insights.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>When is YouTube Wrapped available?</AccordionTrigger>
                    <AccordionContent>
                      YouTube Wrapped is typically updated at the end of each calendar year, allowing you to see your
                      annual viewing summary. However, you can access your previous Wrapped experiences and current
                      year-to-date statistics at any time.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Is YouTube Wrapped free to use?</AccordionTrigger>
                    <AccordionContent>
                      Yes, YouTube Wrapped is completely free to use. We offer a basic version with all essential
                      insights at no cost. We may introduce a premium version with additional features in the future,
                      but the core experience will always remain free.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div id="account" className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Account & Access</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I sign up for YouTube Wrapped?</AccordionTrigger>
                    <AccordionContent>
                      To use YouTube Wrapped, simply click the "Sign In" button and authorize access to your YouTube
                      account. You'll need to grant permission for YouTube Wrapped to access your watch history data.
                      Once authorized, your personalized Wrapped experience will be generated automatically.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Can I use YouTube Wrapped without a Google account?</AccordionTrigger>
                    <AccordionContent>
                      No, YouTube Wrapped requires access to your YouTube watch history, which is only available if you
                      have a Google account and are signed in. Without a Google account, you won't be able to access
                      personalized insights, but you can still explore sample data to see what YouTube Wrapped offers.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Can I access my YouTube Wrapped from multiple devices?</AccordionTrigger>
                    <AccordionContent>
                      Yes, you can access your YouTube Wrapped from any device by signing in with your Google account.
                      Your data is stored securely in the cloud, allowing you to view your insights on desktop, mobile,
                      or tablet devices.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>How do I revoke access to my YouTube data?</AccordionTrigger>
                    <AccordionContent>
                      You can revoke YouTube Wrapped's access to your data at any time by visiting your Google Account
                      settings, selecting "Security," then "Third-party apps with account access," and removing YouTube
                      Wrapped from the list. This will immediately prevent any further access to your data.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div id="privacy" className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Privacy & Data</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How is my YouTube data used?</AccordionTrigger>
                    <AccordionContent>
                      Your YouTube data is used solely to generate your personalized YouTube Wrapped experience. We
                      analyze your watch history to identify patterns and create statistics about your viewing habits.
                      Your data is never sold to third parties or used for advertising purposes.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is my YouTube data stored securely?</AccordionTrigger>
                    <AccordionContent>
                      Yes, we take data security very seriously. Your YouTube data is encrypted both in transit and at
                      rest. We only store the minimum amount of data necessary to provide the YouTube Wrapped service,
                      and we implement industry-standard security measures to protect your information.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Can I delete my data from YouTube Wrapped?</AccordionTrigger>
                    <AccordionContent>
                      Yes, you can request the deletion of all your data from YouTube Wrapped at any time through your
                      account settings. Once deleted, your data cannot be recovered, and you'll need to reauthorize
                      access if you want to use YouTube Wrapped again.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Does YouTube Wrapped see my private or deleted videos?</AccordionTrigger>
                    <AccordionContent>
                      No, YouTube Wrapped only has access to the watch history that YouTube itself records. Private
                      videos you've watched while signed in may appear in your Wrapped, but videos you've watched in
                      incognito mode or after pausing watch history will not be included. Deleted videos are not
                      accessible.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div id="features" className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Features & Usage</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What insights does YouTube Wrapped provide?</AccordionTrigger>
                    <AccordionContent>
                      YouTube Wrapped provides a wide range of insights, including your most-watched videos, favorite
                      creators, preferred content categories, total watch time, viewing patterns by time of day and day
                      of week, and year-over-year comparisons of your viewing habits.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Can I share my YouTube Wrapped with others?</AccordionTrigger>
                    <AccordionContent>
                      Yes, YouTube Wrapped includes easy sharing options that allow you to share your insights on social
                      media platforms. You can choose which specific statistics to share, and we provide visually
                      appealing templates designed specifically for social sharing.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How far back does YouTube Wrapped analyze my history?</AccordionTrigger>
                    <AccordionContent>
                      By default, YouTube Wrapped analyzes your watch history for the current calendar year. However,
                      you can also access previous years' Wrapped experiences if you've used the service before,
                      allowing you to see how your viewing habits have evolved over time.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Can I customize what appears in my YouTube Wrapped?</AccordionTrigger>
                    <AccordionContent>
                      Currently, the insights provided in YouTube Wrapped are standardized for all users. However, we're
                      working on customization options that will allow you to focus on specific aspects of your viewing
                      habits that interest you most. Stay tuned for updates!
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div id="troubleshooting" className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Troubleshooting</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Why is my watch history incomplete?</AccordionTrigger>
                    <AccordionContent>
                      There are several reasons why your watch history might appear incomplete: you may have watched
                      videos while signed out, used incognito mode, paused your watch history in YouTube settings, or
                      deleted portions of your history. YouTube Wrapped can only analyze the watch history that YouTube
                      has recorded.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>The app is loading slowly or crashing. What can I do?</AccordionTrigger>
                    <AccordionContent>
                      If you're experiencing performance issues, try clearing your browser cache and cookies, using a
                      different browser, or accessing YouTube Wrapped from a different device. If problems persist,
                      please contact our support team with details about your device and the specific issues you're
                      encountering.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Why don't my statistics match what I remember watching?</AccordionTrigger>
                    <AccordionContent>
                      Your YouTube Wrapped statistics are based on your recorded watch history, which might not
                      perfectly match your recollection. Short viewing sessions or videos you didn't watch to completion
                      might be weighted differently. Additionally, if you share your account with others, their viewing
                      habits will also be reflected in your statistics.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>I authorized access but still see an error. What should I do?</AccordionTrigger>
                    <AccordionContent>
                      If you've authorized access but still encounter errors, try signing out and signing back in. Make
                      sure you've granted all the necessary permissions when authorizing the app. If problems persist,
                      try revoking access in your Google Account settings and then reauthorizing YouTube Wrapped from
                      scratch.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Most Popular Questions</h2>
            <p className="mx-auto max-w-[700px] text-gray-500">Quick answers to our most frequently asked questions.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>When does YouTube Wrapped update?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  YouTube Wrapped updates with a complete annual review at the end of each calendar year, typically in
                  December. However, you can access your current year-to-date statistics at any time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Is my data shared with YouTube?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  No, YouTube Wrapped doesn't share your analysis or insights back with YouTube or Google. We only
                  access the data that YouTube already has about your viewing habits, with your permission.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Can I use YouTube Wrapped on mobile?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Yes, YouTube Wrapped is fully responsive and works on all devices, including smartphones and tablets.
                  You can access all features and insights regardless of the device you're using.
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Discover Your YouTube Year?</h2>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Sign in now to see your personalized YouTube Wrapped experience.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              {!isLoggedIn && (
                <Button className="bg-white text-red-600 hover:bg-gray-100" onClick={login}>
                  Sign In Now
                </Button>
              )}
              {isLoggedIn && (
                <Button className="bg-white text-red-600 hover:bg-gray-100">
                  <Link href="/">Go to Dashboard</Link>
                </Button>
              )}
              <Button variant="outline" className="text-white border-white hover:bg-red-600">
                <Link href="/about" className="flex items-center">
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

