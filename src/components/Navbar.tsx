
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center animate-fade-in">
              <span className="text-2xl font-bold text-indigo-600">CampusEvents</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {['Home', 'Events', 'Create Event', 'About'].map((item, index) => (
                <Link 
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 staggered-item"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 glass-input placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                type="search"
                placeholder="Search events"
              />
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <Button variant="ghost" size="icon" className="p-1 hover:bg-indigo-100 transition-all">
                <Bell className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="p-1 hover:bg-indigo-100 transition-all">
                <User className="h-6 w-6" />
              </Button>
              <Button className="ml-4 glass-button">
                Sign In
              </Button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-card mx-2 my-2">
            {['Home', 'Events', 'Create Event', 'About'].map((item, index) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-gray-50 staggered-item"
                onClick={() => setIsMenuOpen(false)}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 glass-card mx-2 my-2">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-indigo-200 flex items-center justify-center">
                  <User className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">Guest User</div>
                <div className="text-sm font-medium text-gray-500">Sign in to access your account</div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <Button className="w-full justify-center glass-button">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
