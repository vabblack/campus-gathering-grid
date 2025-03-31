
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      
      <div className="py-16 md:py-24 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl mb-8 text-center">Frequently Asked Questions</h1>
          
          <div className="mt-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-gray-800 rounded-lg bg-gray-900/60 px-4">
                <AccordionTrigger className="text-lg font-medium text-yellow-400">
                  How do I create an event?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  To create an event, sign in to your account, navigate to the "Create Event" page, and fill out the event details form. You can add information such as the event title, description, date, time, location, and category. You can also upload an image to represent your event.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border border-gray-800 rounded-lg bg-gray-900/60 px-4">
                <AccordionTrigger className="text-lg font-medium text-yellow-400">
                  How do I register for an event?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  To register for an event, navigate to the event page and click the "Register" button. You may need to sign in or create an account if you haven't already. Some events may have additional registration requirements or fees, which will be outlined on the event page.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border border-gray-800 rounded-lg bg-gray-900/60 px-4">
                <AccordionTrigger className="text-lg font-medium text-yellow-400">
                  Can I edit or cancel my event?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Yes, as an event organizer, you can edit or cancel your events. Go to your account dashboard, find the event you want to modify, and click on "Edit" or "Cancel Event". Keep in mind that participants will be notified of any significant changes to the event details.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border border-gray-800 rounded-lg bg-gray-900/60 px-4">
                <AccordionTrigger className="text-lg font-medium text-yellow-400">
                  Is there a mobile app available?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Currently, we offer a fully responsive web application that works on mobile devices, but a dedicated mobile app is in development and will be released soon. Stay tuned for announcements!
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border border-gray-800 rounded-lg bg-gray-900/60 px-4">
                <AccordionTrigger className="text-lg font-medium text-yellow-400">
                  How do I contact event organizers?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Each event page has a "Contact Organizer" button that allows you to send a message directly to the event organizer. Alternatively, if provided, you can use the contact information listed on the event page.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ;
