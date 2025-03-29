
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedEvents from '@/components/FeaturedEvents';
import CategoryFilter from '@/components/CategoryFilter';
import EventCard from '@/components/EventCard';
import Footer from '@/components/Footer';
import { events } from '@/data/events';
import { EventCategory } from '@/types';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('All');
  const eventsGridRef = useRef<HTMLDivElement>(null);

  const filteredEvents = selectedCategory === 'All'
    ? events
    : events.filter(event => event.category === selectedCategory);

  const handleCategoryChange = (category: EventCategory) => {
    setSelectedCategory(category);
    // Smooth scroll to events grid after small delay
    setTimeout(() => {
      eventsGridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Navbar />
      <Hero />
      
      {/* Featured Events Section with improved styling */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-100/40 to-purple-100/40 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Featured Events
              </span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Don't miss out on these popular campus events
            </p>
            <div className="mt-6 h-1 w-24 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {events.filter(event => event.featured).map((event, index) => (
              <div 
                key={event.id} 
                className="scroll-reveal transform transition-all duration-300 hover:-translate-y-2"
                style={{transitionDelay: `${index * 0.1}s`}}
              >
                <EventCard event={event} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Browse Events Section with improved styling */}
      <section className="py-16 relative overflow-hidden" id="events-section">
        <div className="absolute inset-0 bg-gradient-to-l from-pink-50/40 to-indigo-50/40 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-indigo-600">
                Browse Events
              </span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Discover what's happening across campus
            </p>
            <div className="mt-6 h-1 w-24 bg-gradient-to-r from-pink-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          
          <CategoryFilter 
            selectedCategory={selectedCategory} 
            onCategoryChange={handleCategoryChange} 
          />
          
          <div 
            ref={eventsGridRef} 
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12"
          >
            {filteredEvents.map((event, index) => (
              <div 
                key={event.id} 
                className="scroll-reveal transform transition-all duration-300 hover:-translate-y-2"
                style={{transitionDelay: `${index * 0.1}s`}}
              >
                <EventCard key={event.id} event={event} index={index} />
              </div>
            ))}
          </div>
          
          {filteredEvents.length === 0 && (
            <div className="text-center py-20 glass-card animate-fade-in mt-8">
              <p className="text-gray-600 text-xl">
                No events found in this category. Please check back later or try another category.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section with elegant glass effect */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-16 backdrop-blur-lg bg-white/20 border border-white/30 rounded-3xl shadow-xl scroll-reveal">
            <h2 className="text-4xl font-bold text-white sm:text-5xl drop-shadow-md">
              Ready to create your own event?
            </h2>
            <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
              Organize a campus event and reach thousands of students
            </p>
            <div className="mt-10 flex justify-center">
              <a
                href="/create-event"
                className="px-8 py-4 bg-white text-indigo-600 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
