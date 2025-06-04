"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export default function LoginPageLight() { // Renamed component for clarity
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-10 p-4"> {/* Changed background to light gray */}
        {/* Assuming logo.svg has a transparent background or looks good on light backgrounds */}
 
      <Card className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-md p-6 sm:p-8"> {/* Standard light card */}
        <CardHeader className="text-center mb-4"> {/* Adjusted margin */}
          <CardTitle className="text-2xl font-semibold text-gray-900">Admin Panel</CardTitle> {/* Dark text */}
          <CardDescription className="text-gray-600"> {/* Medium dark text */}
            Please sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-gray-700 font-medium"> {/* Darker label text */}
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                className="mt-1 w-full bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-md" /* Light input styles */
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-gray-700 font-medium"> {/* Darker label text */}
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                className="mt-1 w-full bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-md" /* Light input styles */
              />
            </div>
            <Button type="submit" className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-150 ease-in-out"> {/* Adjusted button color and added text-white */}
              Sign In
            </Button>
          </form>
        
        </CardContent>
      </Card>
      <style jsx global>{`
        input:-webkit-autofill,
        textarea:-webkit-autofill,
        select:-webkit-autofill {
          background-color: transparent !important;
          -webkit-box-shadow: 0 0 0px 1000px #ffff inset !important;
          -webkit-text-fill-color: black !important;
        }
      `}</style>
    </div>
  );
 
}