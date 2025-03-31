
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      
      <div className="py-16 md:py-24 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl">Pricing Plans</h1>
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the perfect plan for your campus event organization needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Free Plan */}
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-8 relative flex flex-col">
              <div className="mb-5">
                <h3 className="text-xl font-bold text-white">Free</h3>
                <p className="text-gray-400 mt-2">Basic event management for individuals</p>
              </div>
              <div className="mb-5">
                <div className="text-4xl font-bold text-white">$0</div>
                <div className="text-gray-400">Forever free</div>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-gray-300">Create up to 3 events</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-gray-300">Basic analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-gray-300">Event listings</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-gray-300">Email notifications</span>
                </li>
              </ul>
              <Button className="w-full border border-yellow-400 bg-transparent text-yellow-400 hover:bg-yellow-400 hover:text-black">
                Get Started
              </Button>
            </div>
            
            {/* Standard Plan */}
            <div className="rounded-lg border border-yellow-400 bg-gray-900 p-8 relative flex flex-col shadow-lg shadow-yellow-400/10">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <div className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
              </div>
              <div className="mb-5">
                <h3 className="text-xl font-bold text-white">Standard</h3>
                <p className="text-gray-400 mt-2">Perfect for student organizations</p>
              </div>
              <div className="mb-5">
                <div className="text-4xl font-bold text-white">$29</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-gray-300">Unlimited events</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-gray-300">Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-gray-300">Featured events</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-gray-300">Custom registration forms</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-gray-300">Attendee management</span>
                </li>
              </ul>
              <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
                Get Started
              </Button>
            </div>
            
            {/* Pro Plan */}
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-8 relative flex flex-col">
              <div className="mb-5">
                <h3 className="text-xl font-bold text-white">Pro</h3>
                <p className="text-gray-400 mt-2">For campus departments & large organizations</p>
              </div>
              <div className="mb-5">
                <div className="text-4xl font-bold text-white">$99</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-gray-300">Everything in Standard</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-gray-300">Priority support</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-gray-300">Custom branding</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-gray-300">API access</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-gray-300">Multiple admin accounts</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-gray-300">Advanced reporting</span>
                </li>
              </ul>
              <Button className="w-full border border-yellow-400 bg-transparent text-yellow-400 hover:bg-yellow-400 hover:text-black">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Pricing;
