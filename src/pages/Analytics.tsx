
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, BarChart, LineChart, PieChart } from '@/components/ui/chart';

const Analytics = () => {
  // Sample data for charts
  const viewsData = [
    { name: 'Mon', value: 40 },
    { name: 'Tue', value: 30 },
    { name: 'Wed', value: 60 },
    { name: 'Thu', value: 45 },
    { name: 'Fri', value: 80 },
    { name: 'Sat', value: 90 },
    { name: 'Sun', value: 70 },
  ];
  
  const attendeeData = [
    { name: 'Tech Startup Showcase', value: 32 },
    { name: 'International Food Festival', value: 45 },
    { name: 'Fall Music Concert', value: 52 },
    { name: 'Homecoming Game', value: 75 },
    { name: 'Research Symposium', value: 18 },
  ];
  
  const categoryData = [
    { name: 'Technology', value: 25 },
    { name: 'Cultural', value: 15 },
    { name: 'Arts', value: 20 },
    { name: 'Sports', value: 30 },
    { name: 'Academic', value: 10 },
  ];
  
  const growthData = [
    { name: 'Jan', value: 10 },
    { name: 'Feb', value: 15 },
    { name: 'Mar', value: 25 },
    { name: 'Apr', value: 30 },
    { name: 'May', value: 45 },
    { name: 'Jun', value: 60 },
  ];
  
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      
      <div className="py-16 md:py-24 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl mb-8">Event Analytics</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-yellow-400">Weekly Event Views</CardTitle>
                <CardDescription className="text-gray-400">Page views for all your events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <AreaChart
                    data={viewsData}
                    index="name"
                    categories={['value']}
                    colors={['yellow']}
                    valueFormatter={(value) => `${value} views`}
                    className="h-full"
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-yellow-400">Attendees by Event</CardTitle>
                <CardDescription className="text-gray-400">Number of attendees per event</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <BarChart
                    data={attendeeData}
                    index="name"
                    categories={['value']}
                    colors={['yellow']}
                    valueFormatter={(value) => `${value} attendees`}
                    className="h-full"
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-yellow-400">Event Categories Distribution</CardTitle>
                <CardDescription className="text-gray-400">Events by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <PieChart
                    data={categoryData}
                    index="name"
                    categories={['value']}
                    colors={['yellow', 'amber', 'orange', 'red', 'rose']}
                    valueFormatter={(value) => `${value}%`}
                    className="h-full"
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-yellow-400">Audience Growth</CardTitle>
                <CardDescription className="text-gray-400">Event followers over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <LineChart
                    data={growthData}
                    index="name"
                    categories={['value']}
                    colors={['yellow']}
                    valueFormatter={(value) => `${value} followers`}
                    className="h-full"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Analytics;
