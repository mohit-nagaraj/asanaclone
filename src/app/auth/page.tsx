"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ForgotPasswordModal } from "@/components/modal/forgot-password";

export default function AuthForm() {
  const router = useRouter()
  const query = useSearchParams()
  const logout = query.get("logout")
  const [loggingOut, setLoggingOut] = useState<boolean>(logout === "true")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  useEffect(() => {
    if (logout) {
      setTimeout(() => {
        setLoggingOut(false)
      }, 3000)
    }
  }, [logout])

  useEffect(() => {
    // Check for user's preferred color scheme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true)
    }
  }, [])

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    router.push("/home")
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="w-full flex justify-between p-4 bg-background text-foreground">
        <div className="flex items-center p-3">
          <img src="springreen_logo1.png" alt="TaskFlow" className="h-10 w-10 transition-all duration-200 transform hover:scale-110 active:scale-95 " />
        </div>
        <div className="flex items-center space-x-4">
          <Switch
            onCheckedChange={toggleDarkMode}
            className="text-foreground"
          />
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle dark mode</span>
          
          <Button variant="ghost" asChild>
            <a href="/" className="text-sm">
              Contact
            </a>
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 p-4 bg-background">
        {loggingOut ? (
          <Card className={`w-full max-w-md ${isDarkMode ? " bg-[#2e2e30]":""} `}>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">TaskFlow</CardTitle>
              <CardDescription>Logging out...</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <div className="h-20 w-20 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
              </div>
            </CardContent>
          </Card>
        ) : (
            <Card className={`w-full max-w-md ${isDarkMode ? "bg-[#2e2e30]":""} `}>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">TaskFlow</CardTitle>
              <CardDescription>
                Sign in or create a new account.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="signin" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                  <TabsTrigger value="signin">Sign In</TabsTrigger>
                </TabsList>
                <TabsContent value="signin">
                  <form onSubmit={onSubmit}>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="email-signin">Email</Label>
                        <Input
                          id="email-signin"
                          placeholder="demo@springreen.in"
                          type="email"
                          autoCapitalize="none"
                          autoComplete="email"
                          autoCorrect="off"
                          required
                          className="border-white"
                          disabled={isLoading}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="password-signin">Password</Label>
                        <Input
                          id="password-signin"
                          type="password"
                          autoCapitalize="none"
                          className="border-white"
                          autoComplete="current-password"
                          autoCorrect="off"
                          required
                          disabled={isLoading}
                        />
                      </div>
                        <div className="flex items-center justify-between text-sm">
                          <ForgotPasswordModal />
                        </div>
                        <Button disabled={isLoading} type="submit" className=" rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-50">
                        {isLoading && (
                          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-foreground"></div>
                        )}
                        Sign In
                      </Button>
                    </div>
                  </form>
                </TabsContent>
                <TabsContent value="signup">
                  <form onSubmit={onSubmit}>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="email-signup">Email</Label>
                        <Input
                          id="email-signup"
                          placeholder="demo@springreen.in"
                          type="email"
                          autoCapitalize="none"
                          autoComplete="email"
                          autoCorrect="off"
                          required
                          className="border-white"
                          disabled={isLoading}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="password-signup">Password</Label>
                        <Input
                          id="password-signup"
                          type="password"
                          autoCapitalize="none"
                          autoComplete="new-password"
                          autoCorrect="off"
                          required
                          className="border-white"
                          disabled={isLoading}
                        />
                      </div>
                        <Button disabled={isLoading} type="submit" className="rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-50">
                        {isLoading && (
                          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-foreground"></div>
                        )}
                        Sign Up
                      </Button>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <p className="px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <a
                  href="/"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}

