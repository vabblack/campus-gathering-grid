
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-black to-gray-900 overflow-hidden">
      {/* Abstract geometric shapes for background flair */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float-slow"></div>
        <div className="absolute bottom-20 right-24 w-80 h-80 bg-yellow-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-float-delay"></div>
      </div>
      
      {/* Floating event comments - moved to the right side */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] right-[15%] glass-card p-3 rounded-lg w-48 animate-float-slow opacity-90 shadow-lg z-10">
          <p className="text-sm text-white">"The concert last week was amazing! Can't wait for the next one."</p>
          <div className="flex items-center mt-2">
            <div className="h-6 w-6 rounded-full bg-yellow-500"></div>
            <span className="text-xs ml-2 text-gray-300">Sarah, Music Major</span>
          </div>
        </div>
        
        <div className="absolute top-[40%] right-[25%] glass-card p-3 rounded-lg w-52 animate-float opacity-90 shadow-lg z-10" style={{animationDelay: "2s"}}>
          <p className="text-sm text-white">"The hackathon helped me connect with my future co-founders!"</p>
          <div className="flex items-center mt-2">
            <div className="h-6 w-6 rounded-full bg-yellow-500"></div>
            <span className="text-xs ml-2 text-gray-300">Mike, CS Student</span>
          </div>
        </div>
        
        <div className="absolute bottom-[20%] right-[10%] glass-card p-3 rounded-lg w-44 animate-float-delay opacity-90 shadow-lg z-10" style={{animationDelay: "1s"}}>
          <p className="text-sm text-white">"Found my favorite club at the Activities Fair!"</p>
          <div className="flex items-center mt-2">
            <div className="h-6 w-6 rounded-full bg-yellow-500"></div>
            <span className="text-xs ml-2 text-gray-300">Alex, Freshman</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl animate-fade-in">
                <span className="block">Discover & Create</span>
                <span className="block text-yellow-400">Campus Events</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-fade-in" style={{animationDelay: '0.2s'}}>
                Your ultimate platform to find exciting events on campus, connect with peers, and create your own gatherings.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start animate-fade-in" style={{animationDelay: '0.3s'}}>
                <div className="rounded-md shadow">
                  <Link to="/events">
                    <Button size="lg" className="w-full bg-yellow-400 text-black hover:bg-yellow-500 hover:scale-105 transition-all">
                      Browse Events
                    </Button>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link to="/create-event">
                    <Button size="lg" variant="outline" className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black hover:scale-105 transition-all">
                      Create Event
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="mt-8 sm:max-w-lg sm:mx-auto lg:mx-0 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="relative glass-input rounded-lg">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search for events..."
                    className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-lg leading-5 bg-gray-800/50 backdrop-blur-md placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Students at a campus event"
        />
      </div>
    </div>
  );
};

export default Hero;
