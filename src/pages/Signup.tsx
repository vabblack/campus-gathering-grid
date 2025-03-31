
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      
      <div className="py-16 md:py-24 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gray-900 border border-gray-800">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center text-white">Create an account</CardTitle>
              <CardDescription className="text-gray-400 text-center">
                Enter your details to create your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-gray-300">First name</Label>
                  <Input id="firstName" className="bg-gray-800 border-gray-700 text-gray-100" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-gray-300">Last name</Label>
                  <Input id="lastName" className="bg-gray-800 border-gray-700 text-gray-100" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">Email</Label>
                <Input id="email" type="email" placeholder="example@university.edu" className="bg-gray-800 border-gray-700 text-gray-100" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-300">Password</Label>
                <Input id="password" type="password" className="bg-gray-800 border-gray-700 text-gray-100" />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm text-gray-400 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{' '}
                  <Link to="/terms" className="text-yellow-400 hover:text-yellow-300">
                    terms of service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-yellow-400 hover:text-yellow-300">
                    privacy policy
                  </Link>
                </label>
              </div>
              <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
                Create Account
              </Button>
              <Separator className="my-4 bg-gray-700" />
              <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800">
                Sign up with Google
              </Button>
            </CardContent>
            <CardFooter className="flex justify-center">
              <div className="text-center text-sm text-gray-400">
                Already have an account?{' '}
                <Link to="/signin" className="text-yellow-400 hover:text-yellow-300">
                  Sign in
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

export default Signup;
