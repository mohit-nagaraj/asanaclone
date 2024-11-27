"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";
import { ForgotPasswordModal } from "@/components/modal/forgot-password";

export default function AuthForm() {
  const router = useRouter();
  const query = useSearchParams();
  const logout = query.get("logout");
  const [loggingOut, setLoggingOut] = useState<boolean>(
    logout === "true" ? true : false
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    router.push("/home");
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  useEffect(() => {
    if (logout) {
      setTimeout(() => {
        setLoggingOut(false);
      }, 3000);
    }
  }, []);

  return (
    <div className="flex flex-col h-screen bg-[#1E1F21]">
      <div className="w-full flex justify-between p-4 ">
        <div className="flex items-center p-3">
          <img src="springreen_logo.png" alt="Logo" className="h-10" />
        </div>
        <div className="flex items-center">
          <a
            href="/"
            className="text-sm text-white bg-slate-700 p-3 rounded-sm text-primary hover:bg-slate-300 hover:text-black"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center flex-1">
        <Card className="w-[400px]">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">TaskFlow</CardTitle>
            <CardDescription>Sign in or create a new account.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
                <TabsTrigger value="signin">Sign In</TabsTrigger>
              </TabsList>
              <TabsContent value="signin">
                <form onSubmit={onSubmit}>
                  <div className="grid gap-2">
                    <div className="grid gap-1">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        placeholder="demo@springreen.in"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        placeholder=""
                        type="password"
                        autoCapitalize="none"
                        autoComplete="current-password"
                        autoCorrect="off"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <ForgotPasswordModal />
                    </div>

                    <Button disabled={isLoading}>
                      {isLoading && (
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
                      )}
                      Sign In
                    </Button>
                  </div>
                </form>
              </TabsContent>
              <TabsContent value="signup">
                <form onSubmit={onSubmit}>
                  <div className="grid gap-2">
                    <div className="grid gap-1">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        placeholder="demo@springreen.in"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        placeholder=""
                        type="password"
                        autoCapitalize="none"
                        autoComplete="new-password"
                        autoCorrect="off"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <Button disabled={isLoading}>
                      {isLoading && (
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
                      )}
                      Sign Up
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-center">
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
      </div>
    </div>
  );
}
