import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Area, AreaChart, Bar, BarChart, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

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

  // Custom colors
  const yellowColor = "#FFC107";
  const amberColor = "#FFD54F";
  const orangeColor = "#FF9800";
  const redColor = "#F44336";
  const roseColor = "#E91E63";
  
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
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={viewsData}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <XAxis dataKey="name" stroke="#6B7280" />
                      <YAxis stroke="#6B7280" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          borderColor: '#4B5563',
                          color: '#E5E7EB' 
                        }}
                        formatter={(value) => [`${value} views`, 'Views']}
                      />
                      <Area type="monotone" dataKey="value" stroke={yellowColor} fill={yellowColor} fillOpacity={0.2} />
                    </AreaChart>
                  </ResponsiveContainer>
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
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={attendeeData}
                      layout="vertical"
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <XAxis type="number" stroke="#6B7280" />
                      <YAxis dataKey="name" type="category" width={100} stroke="#6B7280" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          borderColor: '#4B5563',
                          color: '#E5E7EB' 
                        }} 
                        formatter={(value) => [`${value} attendees`, 'Attendees']}
                      />
                      <Bar dataKey="value" fill={yellowColor} />
                    </BarChart>
                  </ResponsiveContainer>
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
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {categoryData.map((entry, index) => {
                          const colors = [yellowColor, amberColor, orangeColor, redColor, roseColor];
                          return (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={colors[index % colors.length]} 
                            />
                          );
                        })}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          borderColor: '#4B5563',
                          color: '#E5E7EB' 
                        }}
                        formatter={(value) => [`${value}%`, 'Percentage']}
                      />
                    </PieChart>
                  </ResponsiveContainer>
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
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={growthData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <XAxis dataKey="name" stroke="#6B7280" />
                      <YAxis stroke="#6B7280" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          borderColor: '#4B5563',
                          color: '#E5E7EB' 
                        }}
                        formatter={(value) => [`${value} followers`, 'Followers']}
                      />
                      <Line type="monotone" dataKey="value" stroke={yellowColor} />
                    </LineChart>
                  </ResponsiveContainer>
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
