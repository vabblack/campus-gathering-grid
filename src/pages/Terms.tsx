
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      
      <div className="py-16 md:py-24 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl mb-8 text-center">Terms of Service</h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300">Last Updated: January 1, 2023</p>
            
            <h2 className="text-yellow-400 text-xl mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300">
              By accessing or using Campus Gathering Grid services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
            
            <h2 className="text-yellow-400 text-xl mt-8 mb-4">2. Use License</h2>
            <p className="text-gray-300">
              Permission is granted to temporarily access the materials on Campus Gathering Grid's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
            
            <h2 className="text-yellow-400 text-xl mt-8 mb-4">3. User Accounts</h2>
            <p className="text-gray-300">
              When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding your password and for all activities that occur under your account.
            </p>
            
            <h2 className="text-yellow-400 text-xl mt-8 mb-4">4. Contact Information</h2>
            <p className="text-gray-300">
              If you have any questions about these Terms, please contact us at info@campusevents.com.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Terms;
