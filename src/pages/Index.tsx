
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

  useEffect(() => {
    // Initialize scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      scrollElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  const handleCategoryChange = (category: EventCategory) => {
    setSelectedCategory(category);
    // Smooth scroll to events grid after small delay
    setTimeout(() => {
      eventsGridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedEvents events={events} />
      
      <section className="py-12 gradient-bg-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="text-3xl font-extrabold elegant-text-primary sm:text-4xl">
              Browse Events
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl elegant-text-secondary sm:mt-4">
              Discover what's happening across campus
            </p>
          </div>
          
          <CategoryFilter 
            selectedCategory={selectedCategory} 
            onCategoryChange={handleCategoryChange} 
          />
          
          <div ref={eventsGridRef} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event, index) => (
              <div key={event.id} className="scroll-reveal" style={{transitionDelay: `${index * 0.1}s`}}>
                <EventCard key={event.id} event={event} index={index} />
              </div>
            ))}
          </div>
          
          {filteredEvents.length === 0 && (
            <div className="text-center py-10 glass-card animate-fade-in">
              <p className="elegant-text-secondary text-lg">
                No events found in this category. Please check back later or try another category.
              </p>
            </div>
          )}
        </div>
      </section>
      
      <section className="py-16 gradient-bg-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-10 scroll-reveal">
            <h2 className="text-3xl font-extrabold elegant-text-primary sm:text-4xl">
              Ready to create your own event?
            </h2>
            <p className="mt-4 text-xl elegant-text-secondary">
              Organize a campus event and reach thousands of students
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="/create-event"
                  className="glass-button inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:scale-105 transition-all"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
