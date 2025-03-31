
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { PlusCircle, Calendar, Users, BarChart2 } from 'lucide-react';
import { events } from '@/data/events';

const OrganizerDashboard = () => {
  // Filter to just a few events to simulate user's events
  const myEvents = events.slice(0, 3);
  
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      
      <div className="py-16 md:py-24 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-extrabold text-white sm:text-4xl">Organizer Dashboard</h1>
              <p className="mt-2 text-xl text-gray-300">Manage your events and check analytics</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500">
                <Link to="/create-event">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Create New Event
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-yellow-400">Total Events</CardTitle>
                <CardDescription className="text-gray-400">All events you've created</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Calendar className="h-8 w-8 text-yellow-400 mr-3" />
                  <span className="text-3xl font-bold text-white">{myEvents.length}</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-yellow-400">Total Attendees</CardTitle>
                <CardDescription className="text-gray-400">People attending your events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-yellow-400 mr-3" />
                  <span className="text-3xl font-bold text-white">45</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-yellow-400">Event Views</CardTitle>
                <CardDescription className="text-gray-400">Last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <BarChart2 className="h-8 w-8 text-yellow-400 mr-3" />
                  <span className="text-3xl font-bold text-white">312</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-6">Your Events</h2>
          
          <div className="space-y-4">
            {myEvents.map((event) => (
              <Card key={event.id} className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full md:w-48 h-32 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-1">{event.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">
                        {event.date} • {event.time} • {event.location}
                      </p>
                      <p className="text-gray-300 mb-3 line-clamp-2">{event.description}</p>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs bg-gray-800 text-yellow-400 px-2 py-1 rounded">
                          {event.category}
                        </span>
                        {event.featured && (
                          <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                        View Attendees
                      </Button>
                      <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                        Analytics
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OrganizerDashboard;
