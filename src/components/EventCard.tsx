
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, DollarSign } from 'lucide-react';
import { Event } from '@/types';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-48 object-cover"
        />
        {event.featured && (
          <Badge className="absolute top-4 right-4 bg-indigo-600">
            Featured
          </Badge>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 truncate">{event.title}</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
        <div className="space-y-2">
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="h-4 w-4 mr-2 text-indigo-500" />
            <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="h-4 w-4 mr-2 text-indigo-500" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <MapPin className="h-4 w-4 mr-2 text-indigo-500" />
            <span className="truncate">{event.location}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <DollarSign className="h-4 w-4 mr-2 text-indigo-500" />
            <span>{event.ticketPrice === 0 ? 'Free' : `$${event.ticketPrice}`}</span>
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <Badge variant="outline" className="bg-gray-100">
            {event.category}
          </Badge>
          <Link to={`/event/${event.id}`} className="text-indigo-600 hover:text-indigo-800 font-medium text-sm">
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
