
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      
      <div className="py-16 md:py-24 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gray-900 border border-gray-800">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center text-white">Sign In</CardTitle>
              <CardDescription className="text-gray-400 text-center">
                Enter your email and password to sign in to your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">Email</Label>
                <Input id="email" type="email" placeholder="example@university.edu" className="bg-gray-800 border-gray-700 text-gray-100" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-gray-300">Password</Label>
                  <Link to="/forgot-password" className="text-sm text-yellow-400 hover:text-yellow-300">
                    Forgot password?
                  </Link>
                </div>
                <Input id="password" type="password" className="bg-gray-800 border-gray-700 text-gray-100" />
              </div>
              <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
                Sign In
              </Button>
              <Separator className="my-4 bg-gray-700" />
              <div className="flex items-center justify-center">
                <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800">
                  Sign in with Google
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <div className="text-center text-sm text-gray-400">
                Don't have an account?{' '}
                <Link to="/signup" className="text-yellow-400 hover:text-yellow-300">
                  Sign up
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SignIn;
