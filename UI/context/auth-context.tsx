"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

// Define user type
type User = {
  name: string
  username: string
  email: string
  joinDate: string
  avatar: string
}

// Define context type
type AuthContextType = {
  isLoggedIn: boolean
  user: User | null
  login: () => void
  logout: () => void
}

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {},
})

// Sample user data
const sampleUser: User = {
  name: "Alex Johnson",
  username: "alexj",
  email: "alex.johnson@example.com",
  joinDate: "January 2020",
  avatar: "/placeholder.svg?height=40&width=40",
}

// Auth provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  const login = () => {
    setIsLoggedIn(true)
    setUser(sampleUser)
  }

  const logout = () => {
    setIsLoggedIn(false)
    setUser(null)
  }

  return <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>{children}</AuthContext.Provider>
}

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext)

