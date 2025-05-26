'use client'
import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, ArrowRight, Github, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
const router = useRouter()
    const handleGrantAccess = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // Set in localStorage for client-side checks
        localStorage.setItem("userHasAccess", "true");
        // Set in cookie for middleware (server-side) checks
        document.cookie = "userHasAccess=true; path=/";
        // Navigate to protected route
        router.push("/en/home");
    };
 
    return (
        <div className="flex min-h-screen bg-[#131618] items-center justify-center from-slate-50 to-slate-100 p-4">
            <div className="w-full max-w-md">
                <div className="mb-6 text-center">
                    <h1 className="text-3xl font-bold text-white">Welcome back</h1>
                    <p className="mt-2 text-white">Sign in to your account to continue</p>
                </div>

                <Card className="overflow-hidden border border-slate-200 shadow-lg">
                    <CardHeader className="space-y-1 pb-4">
                        <CardTitle className="text-xl font-semibold text-slate-900">Sign In</CardTitle>
                        <CardDescription className="text-slate-500">Enter your credentials to access your account</CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={handleGrantAccess} className="space-y-5">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="h-11 border-slate-200 focus-visible:ring-slate-400"
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password" className="text-sm font-medium text-slate-700">
                                        Password
                                    </Label>
                                   
                                </div>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="h-11 border-slate-200 pr-10 focus-visible:ring-slate-400"
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-700"
                                        onClick={() => setShowPassword(!showPassword)}
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="h-11 w-full bg-cyan-400 text-white transition-colors "
                                disabled={isLoading}
                            >
                                {isLoading ? "Signing in..." : "Sign In"}
                                {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                            </Button>

                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t border-slate-200"></span>
                                </div>
                                <div className="relative flex justify-center">
                                    <span className="bg-white px-3 text-xs font-medium text-slate-500">OR CONTINUE WITH</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <Button
                                    variant="outline"
                                    type="button"
                                    className="h-11 border-slate-200 font-medium text-slate-700 transition-all hover:bg-slate-50 hover:text-slate-900"
                                >
                                    <Github className="mr-2 h-4 w-4" />
                                    Github
                                </Button>
                                <Button
                                    variant="outline"
                                    type="button"
                                    className="h-11 border-slate-200 font-medium text-slate-700 transition-all hover:bg-slate-50 hover:text-slate-900"
                                >
                                    <Twitter className="mr-2 h-4 w-4" />
                                    Twitter
                                </Button>
                            </div>
                        </form>
                    </CardContent>

                    <CardFooter className="flex justify-center border-t border-slate-100 p-6">
                        <p className="text-sm text-slate-600">
                            Do not have an account?{" "}
                            <a href="#" className="font-medium text-slate-800 transition-colors hover:text-slate-900 hover:underline">
                                Create one
                            </a>
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
