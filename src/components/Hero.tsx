import React from 'react';
import { Search, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-rose-500 via-purple-500 to-pink-500 min-h-[85vh] flex items-center">
      {/* Background particles/bubbles animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-white/10 animate-float"></div>
        <div className="absolute top-40 right-10 w-60 h-60 rounded-full bg-white/10 animate-float-delay"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-white/10 animate-float-slow"></div>
        <div className="absolute -bottom-20 right-40 w-80 h-80 rounded-full bg-white/5 animate-float-slow-delay"></div>
      </div>
      
      {/* Content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content area - simplified */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-tight animate-fade-in">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-100">
                UniEvents
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-white max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{animationDelay: "0.2s"}}>
              Your campus event marketplace. Connect, discover, celebrate.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/events" className="animate-fade-in" style={{animationDelay: "0.4s"}}>
                <Button className="w-full sm:w-auto px-8 py-6 text-lg bg-white text-rose-600 hover:bg-rose-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Calendar className="mr-2 h-5 w-5" />
                  Explore Events
                </Button>
              </Link>
              
              <Link to="/create-event" className="animate-fade-in" style={{animationDelay: "0.5s"}}>
                <Button variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-105">
                  Create Event
                </Button>
              </Link>
            </div>
            
            {/* Search bar */}
            <div className="mt-12 max-w-md mx-auto lg:mx-0 animate-fade-in" style={{animationDelay: "0.6s"}}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for events..."
                  className="block w-full pl-12 pr-6 py-4 bg-white/90 backdrop-blur-md rounded-full border-0 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white transition-all shadow-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Right side image/illustration area - keeping as requested */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-rose-600 to-transparent opacity-40 rounded-3xl z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Students at a campus event"
                className="rounded-3xl shadow-2xl object-cover h-[600px] w-full animate-fade-in"
                style={{animationDelay: "0.7s"}}
              />
              
              {/* Floating cards - keeping as requested */}
              <div className="absolute top-10 -left-10 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl animate-float-slow w-64 z-20">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-800">Music Festival</p>
                    <p className="text-sm text-gray-500">Oct 15 · 500+ attending</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-10 -right-10 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl animate-float w-64 z-20">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                    T
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-800">Tech Conference</p>
                    <p className="text-sm text-gray-500">Nov 3 · 350+ attending</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
