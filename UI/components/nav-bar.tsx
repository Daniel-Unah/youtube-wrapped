"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Play, User, ChevronDown, LogOut, Settings } from "lucide-react"
import { useAuth } from "@/context/auth-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function NavBar() {
  const { isLoggedIn, user, logout } = useAuth()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-10 w-full bg-white border-b">
      <div className="container flex h-16 items-center px-4 md:px-6">
        {/* Logo and Mobile Menu */}
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <div className="flex items-center gap-2 cursor-pointer">
                <Play className="h-6 w-6 text-red-600 fill-current" />
                <span className="text-xl font-bold">YouTube Wrapped</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>
                  <div className="flex items-center gap-2">
                    <Play className="h-6 w-6 text-red-600 fill-current" />
                    <span className="text-xl font-bold">YouTube Wrapped</span>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-6">
                {isLoggedIn ? (
                  <>
                    <Link
                      href="/"
                      className={`text-sm font-medium p-2 rounded-md ${isActive("/") ? "bg-red-50 text-red-600" : "hover:bg-gray-100"}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/channels"
                      className={`text-sm font-medium p-2 rounded-md ${isActive("/channels") ? "bg-red-50 text-red-600" : "hover:bg-gray-100"}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Channels
                    </Link>
                    <Link
                      href="/videos"
                      className={`text-sm font-medium p-2 rounded-md ${isActive("/videos") ? "bg-red-50 text-red-600" : "hover:bg-gray-100"}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Videos
                    </Link>
                    <Link
                      href="/categories"
                      className={`text-sm font-medium p-2 rounded-md ${isActive("/categories") ? "bg-red-50 text-red-600" : "hover:bg-gray-100"}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Categories
                    </Link>
                    <Link
                      href="/profile"
                      className={`text-sm font-medium p-2 rounded-md ${isActive("/profile") ? "bg-red-50 text-red-600" : "hover:bg-gray-100"}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <Button
                      variant="ghost"
                      className="justify-start px-2 text-red-600 hover:bg-red-50 hover:text-red-700"
                      onClick={() => {
                        logout()
                        setMobileMenuOpen(false)
                      }}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Log Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/"
                      className={`text-sm font-medium p-2 rounded-md ${isActive("/") ? "bg-red-50 text-red-600" : "hover:bg-gray-100"}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="/features"
                      className={`text-sm font-medium p-2 rounded-md ${isActive("/features") ? "bg-red-50 text-red-600" : "hover:bg-gray-100"}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Features
                    </Link>
                    <Link
                      href="/about"
                      className={`text-sm font-medium p-2 rounded-md ${isActive("/about") ? "bg-red-50 text-red-600" : "hover:bg-gray-100"}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About
                    </Link>
                    <Link
                      href="/faq"
                      className={`text-sm font-medium p-2 rounded-md ${isActive("/faq") ? "bg-red-50 text-red-600" : "hover:bg-gray-100"}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      FAQ
                    </Link>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Logo */}
          <Link href="/" className="hidden md:flex items-center gap-2">
            <Play className="h-6 w-6 text-red-600 fill-current" />
            <span className="text-xl font-bold">YouTube Wrapped</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="ml-8 hidden md:flex gap-6">
          {isLoggedIn ? (
            <>
              <Link
                href="/"
                className={`text-sm font-medium ${isActive("/") ? "text-red-600 underline" : "hover:underline"}`}
              >
                Dashboard
              </Link>
              <Link
                href="/channels"
                className={`text-sm font-medium ${isActive("/channels") ? "text-red-600 underline" : "hover:underline"}`}
              >
                Channels
              </Link>
              <Link
                href="/videos"
                className={`text-sm font-medium ${isActive("/videos") ? "text-red-600 underline" : "hover:underline"}`}
              >
                Videos
              </Link>
              <Link
                href="/categories"
                className={`text-sm font-medium ${isActive("/categories") ? "text-red-600 underline" : "hover:underline"}`}
              >
                Categories
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/"
                className={`text-sm font-medium ${isActive("/") ? "text-red-600 underline" : "hover:underline"}`}
              >
                Home
              </Link>
              <Link
                href="/features"
                className={`text-sm font-medium ${isActive("/features") ? "text-red-600 underline" : "hover:underline"}`}
              >
                Features
              </Link>
              <Link
                href="/about"
                className={`text-sm font-medium ${isActive("/about") ? "text-red-600 underline" : "hover:underline"}`}
              >
                About
              </Link>
              <Link
                href="/faq"
                className={`text-sm font-medium ${isActive("/faq") ? "text-red-600 underline" : "hover:underline"}`}
              >
                FAQ
              </Link>
            </>
          )}
        </nav>

        {/* Right Side - Auth/Profile */}
        <div className="ml-auto flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Button variant="ghost" size="sm" className="hidden md:flex">
                Share My Wrapped
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="relative cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                      <img
                        src={user?.avatar || "/placeholder.svg?height=40&width=40"}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <div className="px-2 py-1.5 text-sm font-medium">{user?.name}</div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      View Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings" className="cursor-pointer">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Button className="bg-red-600 hover:bg-red-700">
              <Link href="/login">Sign In</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}

