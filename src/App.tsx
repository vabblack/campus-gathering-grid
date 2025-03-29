
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
      { threshold: 0.1 }
    );

    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach(el => {
      observer.observe(el);
    });
  });
};

function App() {
  // Initialize animations
  React.useEffect(() => {
    initScrollAnimations();
    
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
