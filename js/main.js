
// Event data (normally this would come from a PHP backend)
const events = [
  {
    id: "1",
    title: "Freshman Welcome Party",
    description: "Welcome event for all new students with games, food, and networking opportunities.",
    date: "2023-09-15",
    time: "6:00 PM - 9:00 PM",
    location: "Student Union Building",
    organizer: "Student Council",
    category: "Social",
    image: "images/events/welcome-party.jpg",
    ticketPrice: 0,
    featured: true
  },
  {
    id: "2",
    title: "AI & Machine Learning Workshop",
    description: "Learn the basics of artificial intelligence and machine learning in this hands-on workshop.",
    date: "2023-09-20",
    time: "2:00 PM - 5:00 PM",
    location: "Computer Science Building, Room 105",
    organizer: "CS Department",
    category: "Workshop",
    image: "images/events/ai-workshop.jpg",
    ticketPrice: 10,
    featured: true
  },
  {
    id: "3",
    title: "Fall Campus Concert",
    description: "Annual fall concert featuring student bands and special musical guests.",
    date: "2023-10-05",
    time: "7:00 PM - 11:00 PM",
    location: "Campus Amphitheater",
    organizer: "Student Activities Board",
    category: "Concert",
    image: "images/events/concert.jpg",
    ticketPrice: 15,
    featured: true
  },
  {
    id: "4",
    title: "Career Fair",
    description: "Connect with employers from various industries looking to hire students and graduates.",
    date: "2023-10-10",
    time: "10:00 AM - 3:00 PM",
    location: "Grand Hall",
    organizer: "Career Services",
    category: "Career",
    image: "images/events/career-fair.jpg",
    ticketPrice: 0,
    featured: false
  },
  {
    id: "5",
    title: "International Food Festival",
    description: "Taste cuisine from around the world prepared by international student groups.",
    date: "2023-10-15",
    time: "12:00 PM - 4:00 PM",
    location: "Campus Quad",
    organizer: "International Student Association",
    category: "Cultural",
    image: "images/events/food-festival.jpg",
    ticketPrice: 5,
    featured: false
  },
  {
    id: "6",
    title: "Hackathon 2023",
    description: "24-hour coding competition with prizes for the most innovative projects.",
    date: "2023-10-20",
    time: "9:00 AM (24 hours)",
    location: "Engineering Building",
    organizer: "Tech Club",
    category: "Academic",
    image: "images/events/hackathon.jpg",
    ticketPrice: 0,
    featured: false
  },
  {
    id: "7",
    title: "Basketball Tournament",
    description: "Intramural basketball tournament open to all students and faculty.",
    date: "2023-10-25",
    time: "1:00 PM - 6:00 PM",
    location: "Sports Complex",
    organizer: "Campus Athletics",
    category: "Sports",
    image: "images/events/basketball.jpg",
    ticketPrice: 0,
    featured: false
  },
  {
    id: "8",
    title: "Leadership Seminar",
    description: "Develop your leadership skills with guidance from successful alumni and professionals.",
    date: "2023-11-05",
    time: "3:00 PM - 5:00 PM",
    location: "Business School Auditorium",
    organizer: "Leadership Council",
    category: "Workshop",
    image: "images/events/leadership.jpg",
    ticketPrice: 5,
    featured: false
  },
  {
    id: "9",
    title: "Art Exhibition",
    description: "Showcase of student artwork from the Fine Arts department.",
    date: "2023-11-10",
    time: "11:00 AM - 7:00 PM",
    location: "Campus Gallery",
    organizer: "Fine Arts Department",
    category: "Cultural",
    image: "images/events/art-exhibition.jpg",
    ticketPrice: 0,
    featured: false
  }
];

// Helper functions
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  });
}

function formatCurrency(amount) {
  return amount === 0 
    ? 'Free' 
    : new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
      }).format(amount);
}

// Create event card HTML
function createEventCard(event) {
  return `
    <div class="bg-white rounded-lg shadow-md overflow-hidden event-card">
      <div class="relative">
        <img 
          src="${event.image}" 
          alt="${event.title}" 
          class="w-full h-48 object-cover"
          onerror="this.src='images/event-placeholder.jpg'"
        />
        ${event.featured ? '<span class="badge badge-featured absolute top-4 right-4">Featured</span>' : ''}
      </div>
      <div class="p-5">
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-xl font-bold text-gray-900 truncate">${event.title}</h3>
        </div>
        <p class="text-gray-600 text-sm mb-4 truncate-2">${event.description}</p>
        <div class="space-y-2">
          <div class="flex items-center text-gray-500 text-sm">
            <svg class="h-4 w-4 mr-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>${formatDate(event.date)}</span>
          </div>
          <div class="flex items-center text-gray-500 text-sm">
            <svg class="h-4 w-4 mr-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>${event.time}</span>
          </div>
          <div class="flex items-center text-gray-500 text-sm">
            <svg class="h-4 w-4 mr-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span class="truncate">${event.location}</span>
          </div>
          <div class="flex items-center text-gray-500 text-sm">
            <svg class="h-4 w-4 mr-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>${formatCurrency(event.ticketPrice)}</span>
          </div>
        </div>
        <div class="mt-4 flex justify-between items-center">
          <span class="badge badge-category">
            ${event.category}
          </span>
          <a href="event-details.php?id=${event.id}" class="text-indigo-600 hover:text-indigo-800 font-medium text-sm">
            View Details →
          </a>
        </div>
      </div>
    </div>
  `;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Load featured events
  const featuredEventsContainer = document.getElementById('featured-events');
  if (featuredEventsContainer) {
    const featuredEvents = events.filter(event => event.featured);
    if (featuredEvents.length > 0) {
      featuredEventsContainer.innerHTML = featuredEvents
        .map(event => createEventCard(event))
        .join('');
    }
  }

  // Initialize category filters
  const categoryFiltersContainer = document.getElementById('category-filters');
  if (categoryFiltersContainer) {
    // Extract unique categories
    const categories = ['All', ...new Set(events.map(event => event.category))];
    
    // Create category buttons
    categoryFiltersContainer.innerHTML = categories.map(category => `
      <button
        data-category="${category}"
        class="category-filter px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
          category === 'All'
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }"
      >
        ${category}
      </button>
    `).join('');
    
    // Add click event listeners to category buttons
    const categoryButtons = document.querySelectorAll('.category-filter');
    categoryButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Update active class
        categoryButtons.forEach(btn => {
          btn.classList.remove('bg-indigo-600', 'text-white');
          btn.classList.add('bg-gray-100', 'text-gray-800', 'hover:bg-gray-200');
        });
        this.classList.remove('bg-gray-100', 'text-gray-800', 'hover:bg-gray-200');
        this.classList.add('bg-indigo-600', 'text-white');
        
        // Filter events
        const selectedCategory = this.getAttribute('data-category');
        filterEvents(selectedCategory);
      });
    });
  }
  
  // Load all events initially
  loadEvents('All');
});

// Filter events by category
function filterEvents(category) {
  loadEvents(category);
}

// Load events into the events grid
function loadEvents(category) {
  const eventsGrid = document.getElementById('events-grid');
  const noEventsMessage = document.getElementById('no-events');
  
  if (!eventsGrid) return;
  
  const filteredEvents = category === 'All'
    ? events
    : events.filter(event => event.category === category);
  
  if (filteredEvents.length === 0) {
    eventsGrid.innerHTML = '';
    noEventsMessage.classList.remove('hidden');
  } else {
    eventsGrid.innerHTML = filteredEvents
      .map(event => createEventCard(event))
      .join('');
    noEventsMessage.classList.add('hidden');
  }
}
