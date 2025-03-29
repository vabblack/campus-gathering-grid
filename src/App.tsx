
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import EventPage from "./pages/EventPage";
import CreateEvent from "./pages/CreateEvent";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// Add JavaScript for scroll animations
const initScrollAnimations = () => {
  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach(el => {
      observer.observe(el);
    });
  });
};

// Mouse trail animation effect
const initMouseTrail = () => {
  document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.92) { // Only create particles occasionally for performance
      const particle = document.createElement('div');
      particle.className = 'mouse-particle';
      document.body.appendChild(particle);
      
      // Position the particle
      particle.style.left = `${e.clientX}px`;
      particle.style.top = `${e.clientY}px`;
      
      // Remove the particle after animation completes
      setTimeout(() => {
        particle.remove();
      }, 1000);
    }
  });
};

function App() {
  // Initialize animations
  React.useEffect(() => {
    initScrollAnimations();
    initMouseTrail();
    
    // Also add event listeners for staggered animations
    const staggerItems = document.querySelectorAll('.staggered-item');
    staggerItems.forEach((item, index) => {
      // Fix: Cast the item to HTMLElement to access style property
      const htmlItem = item as HTMLElement;
      htmlItem.style.animationDelay = `${0.1 * index}s`;
    });
  }, []);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/event/:id" element={<EventPage />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
