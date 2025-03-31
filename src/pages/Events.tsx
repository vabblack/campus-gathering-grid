
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CategoryFilter from '@/components/CategoryFilter';
import EventCard from '@/components/EventCard';
import { events } from '@/data/events';
import { EventCategory } from '@/types';

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('All');
  const [animatedElements, setAnimatedElements] = useState<Element[]>([]);

  const filteredEvents = selectedCategory === 'All'
    ? events
    : events.filter(event => event.category === selectedCategory);

  const handleCategoryChange = (category: EventCategory) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
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

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => {
      observer.observe(el);
    });

    setAnimatedElements(Array.from(elements));

    return () => {
      if (animatedElements.length) {
        animatedElements.forEach(el => {
          observer.unobserve(el);
        });
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      
      <div className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Browse All Events
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
              Find the perfect event for you on campus
            </p>
          </div>
          
          <CategoryFilter 
            selectedCategory={selectedCategory} 
            onCategoryChange={handleCategoryChange} 
          />
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
            {filteredEvents.map((event, index) => (
              <div key={event.id} className="scroll-reveal" style={{transitionDelay: `${index * 0.1}s`}}>
                <EventCard event={event} index={index} />
              </div>
            ))}
          </div>
          
          {filteredEvents.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-300 text-xl">
                No events found in this category. Please check back later or try another category.
              </p>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Events;
