
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      
      <div className="py-16 md:py-24 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl mb-8 text-center">Privacy Policy</h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300">Last Updated: January 1, 2023</p>
            
            <h2 className="text-yellow-400 text-xl mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-300">
              Campus Gathering Grid ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Campus Gathering Grid.
            </p>
            
            <h2 className="text-yellow-400 text-xl mt-8 mb-4">2. Information We Collect</h2>
            <p className="text-gray-300">
              We collect information that you provide directly to us, such as when you create an account, update your profile, use interactive features, participate in contests, promotions, or surveys, request customer support, or otherwise communicate with us.
            </p>
            <p className="text-gray-300">
              The types of information we may collect include your name, email address, password, campus affiliation, photo, interests, and any other information you choose to provide.
            </p>
            
            <h2 className="text-yellow-400 text-xl mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-300">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process and complete transactions</li>
              <li>Send you technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Communicate with you about products, services, offers, and events</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
            </ul>
            
            <h2 className="text-yellow-400 text-xl mt-8 mb-4">4. Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about this Privacy Policy, please contact us at info@campusevents.com.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Privacy;
