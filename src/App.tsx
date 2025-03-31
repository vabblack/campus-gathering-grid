
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import EventPage from "./pages/EventPage";
import CreateEvent from "./pages/CreateEvent";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Events from "./pages/Events";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import FAQ from "./pages/FAQ";
import OrganizerDashboard from "./pages/OrganizerDashboard";
import Analytics from "./pages/Analytics";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event/:id" element={<EventPage />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/organizer" element={<OrganizerDashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
