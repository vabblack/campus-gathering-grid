
<?php
// In a real application, you would fetch event details from a database
// For this example, we'll simulate that with a static array

$events = [
  [
    "id" => "1",
    "title" => "Freshman Welcome Party",
    "description" => "Welcome event for all new students with games, food, and networking opportunities. This is a great way to meet fellow students and start building your campus community. There will be music, free food, games, and opportunities to learn about student clubs and organizations.",
    "date" => "2023-09-15",
    "time" => "6:00 PM - 9:00 PM",
    "location" => "Student Union Building",
    "organizer" => "Student Council",
    "category" => "Social",
    "image" => "images/events/welcome-party.jpg",
    "ticketPrice" => 0,
    "featured" => true
  ],
  [
    "id" => "2",
    "title" => "AI & Machine Learning Workshop",
    "description" => "Learn the basics of artificial intelligence and machine learning in this hands-on workshop. This workshop is designed for beginners and will cover fundamental concepts like neural networks, supervised learning, and practical applications. Bring your laptop to participate in coding exercises. Prerequisites: Basic programming knowledge is helpful but not required.",
    "date" => "2023-09-20",
    "time" => "2:00 PM - 5:00 PM",
    "location" => "Computer Science Building, Room 105",
    "organizer" => "CS Department",
    "category" => "Workshop",
    "image" => "images/events/ai-workshop.jpg",
    "ticketPrice" => 10,
    "featured" => true
  ],
  [
    "id" => "3",
    "title" => "Fall Campus Concert",
    "description" => "Annual fall concert featuring student bands and special musical guests. Join us for a night of amazing music from talented student performers and headlining bands. Food and beverages will be available for purchase. This is one of the biggest campus events of the fall semester, with multiple stages and various genres of music represented.",
    "date" => "2023-10-05",
    "time" => "7:00 PM - 11:00 PM",
    "location" => "Campus Amphitheater",
    "organizer" => "Student Activities Board",
    "category" => "Concert",
    "image" => "images/events/concert.jpg",
    "ticketPrice" => 15,
    "featured" => true
  ],
  [
    "id" => "4",
    "title" => "Career Fair",
    "description" => "Connect with employers from various industries looking to hire students and graduates. Bring multiple copies of your resume and dress professionally. Over 50 companies will be represented, including tech, healthcare, finance, and more. There will also be workshops on resume writing and interview skills throughout the day.",
    "date" => "2023-10-10",
    "time" => "10:00 AM - 3:00 PM",
    "location" => "Grand Hall",
    "organizer" => "Career Services",
    "category" => "Career",
    "image" => "images/events/career-fair.jpg",
    "ticketPrice" => 0,
    "featured" => false
  ],
  [
    "id" => "5",
    "title" => "International Food Festival",
    "description" => "Taste cuisine from around the world prepared by international student groups. Each booth represents a different country or region, offering authentic dishes and information about their culture. Tickets can be purchased at the entrance and exchanged for food samples at each booth.",
    "date" => "2023-10-15",
    "time" => "12:00 PM - 4:00 PM",
    "location" => "Campus Quad",
    "organizer" => "International Student Association",
    "category" => "Cultural",
    "image" => "images/events/food-festival.jpg",
    "ticketPrice" => 5,
    "featured" => false
  ],
  [
    "id" => "6",
    "title" => "Hackathon 2023",
    "description" => "24-hour coding competition with prizes for the most innovative projects. Form teams of up to 4 people and create something amazing within the time limit. Mentors will be available to provide guidance, and meals will be provided. Sleep is optional but recommended!",
    "date" => "2023-10-20",
    "time" => "9:00 AM (24 hours)",
    "location" => "Engineering Building",
    "organizer" => "Tech Club",
    "category" => "Academic",
    "image" => "images/events/hackathon.jpg",
    "ticketPrice" => 0,
    "featured" => false
  ],
  [
    "id" => "7",
    "title" => "Basketball Tournament",
    "description" => "Intramural basketball tournament open to all students and faculty. Teams must register in advance with 5-8 players. Awards will be given to the champions and runners-up. Come play or cheer on your friends in this exciting campus-wide competition.",
    "date" => "2023-10-25",
    "time" => "1:00 PM - 6:00 PM",
    "location" => "Sports Complex",
    "organizer" => "Campus Athletics",
    "category" => "Sports",
    "image" => "images/events/basketball.jpg",
    "ticketPrice" => 0,
    "featured" => false
  ],
  [
    "id" => "8",
    "title" => "Leadership Seminar",
    "description" => "Develop your leadership skills with guidance from successful alumni and professionals. This interactive seminar will include keynote speeches, breakout sessions, and networking opportunities. Topics include communication, team building, conflict resolution, and ethical leadership.",
    "date" => "2023-11-05",
    "time" => "3:00 PM - 5:00 PM",
    "location" => "Business School Auditorium",
    "organizer" => "Leadership Council",
    "category" => "Workshop",
    "image" => "images/events/leadership.jpg",
    "ticketPrice" => 5,
    "featured" => false
  ],
  [
    "id" => "9",
    "title" => "Art Exhibition",
    "description" => "Showcase of student artwork from the Fine Arts department. Various mediums will be on display, including painting, sculpture, photography, and digital art. Many pieces will be available for purchase, with proceeds supporting student art programs.",
    "date" => "2023-11-10",
    "time" => "11:00 AM - 7:00 PM",
    "location" => "Campus Gallery",
    "organizer" => "Fine Arts Department",
    "category" => "Cultural",
    "image" => "images/events/art-exhibition.jpg",
    "ticketPrice" => 0,
    "featured" => false
  ]
];

// Get event ID from URL parameter
$eventId = isset($_GET['id']) ? $_GET['id'] : null;
$event = null;

// Find the matching event
if ($eventId) {
  foreach ($events as $e) {
    if ($e['id'] === $eventId) {
      $event = $e;
      break;
    }
  }
}

// Format functions
function formatDate($dateString) {
  $date = new DateTime($dateString);
  return $date->format('l, F j, Y');
}

function formatCurrency($amount) {
  return $amount === 0 ? 'Free' : '$' . $amount;
}

// 404 handling
if (!$event) {
  header("HTTP/1.0 404 Not Found");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title><?php echo $event ? $event['title'] : 'Event Not Found'; ?> - Campus Gathering Grid</title>
  <meta name="description" content="<?php echo $event ? substr($event['description'], 0, 160) : 'Event details'; ?>" />
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: {
              DEFAULT: '#4f46e5',
              dark: '#4338ca',
              light: '#818cf8'
            }
          }
        }
      }
    }
  </script>
  <!-- Custom CSS -->
  <link rel="stylesheet" href="css/styles.css">
</head>

<body class="bg-gray-50">
  <!-- Navigation -->
  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <a href="index.html" class="flex-shrink-0 flex items-center">
            <img class="h-8 w-auto" src="images/logo.svg" alt="Campus Gathering Grid">
            <span class="ml-2 text-xl font-bold text-indigo-600">Campus Events</span>
          </a>
        </div>
        <div class="flex items-center">
          <div class="hidden md:ml-6 md:flex md:space-x-6">
            <a href="index.html" class="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
              Home
            </a>
            <a href="index.html#browse-events" class="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium">
              Events
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
              Categories
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
              Create Event
            </a>
          </div>
          <div class="ml-6 flex items-center">
            <button class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium">
              Sign In
            </button>
          </div>
        </div>
        <div class="flex items-center md:hidden">
          <button id="mobile-menu-button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div id="mobile-menu" class="hidden md:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <a href="index.html" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
          Home
        </a>
        <a href="index.html#browse-events" class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
          Events
        </a>
        <a href="#" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
          Categories
        </a>
        <a href="#" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
          Create Event
        </a>
      </div>
    </div>
  </nav>

  <?php if ($event): ?>
  <!-- Event Details -->
  <main class="py-10">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <!-- Breadcrumbs -->
      <nav class="px-4 sm:px-0 mb-8">
        <ol class="flex text-sm text-gray-500">
          <li>
            <a href="index.html" class="hover:text-indigo-600">Home</a>
          </li>
          <li class="mx-2">/</li>
          <li>
            <a href="index.html#browse-events" class="hover:text-indigo-600">Events</a>
          </li>
          <li class="mx-2">/</li>
          <li class="text-gray-900 font-medium truncate"><?php echo htmlspecialchars($event['title']); ?></li>
        </ol>
      </nav>

      <!-- Event Header -->
      <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
        <div class="px-4 py-5 sm:px-6 flex flex-col md:flex-row justify-between">
          <div>
            <h1 class="text-3xl font-bold text-gray-900">
              <?php echo htmlspecialchars($event['title']); ?>
            </h1>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">
              Organized by <?php echo htmlspecialchars($event['organizer']); ?>
            </p>
          </div>
          <div class="mt-4 md:mt-0">
            <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              <?php echo htmlspecialchars($event['category']); ?>
            </span>
            <?php if ($event['featured']): ?>
            <span class="ml-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              Featured
            </span>
            <?php endif; ?>
          </div>
        </div>
      </div>

      <!-- Event Content -->
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Left Column: Image and Details -->
        <div class="lg:w-2/3">
          <div class="bg-white shadow overflow-hidden sm:rounded-lg">
            <!-- Event Image -->
            <div class="relative h-72 sm:h-96">
              <img class="w-full h-full object-cover" src="<?php echo htmlspecialchars($event['image']); ?>" alt="<?php echo htmlspecialchars($event['title']); ?>" onerror="this.src='images/event-placeholder.jpg'">
            </div>
            
            <!-- Event Description -->
            <div class="px-4 py-5 sm:p-6">
              <h2 class="text-xl font-semibold text-gray-900 mb-4">About This Event</h2>
              <p class="text-gray-700 whitespace-pre-line"><?php echo htmlspecialchars($event['description']); ?></p>
            </div>
          </div>
        </div>

        <!-- Right Column: Event Details and Registration -->
        <div class="lg:w-1/3">
          <!-- Event Details Card -->
          <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div class="px-4 py-5 sm:p-6">
              <h2 class="text-lg font-medium text-gray-900 mb-4">Event Details</h2>
              <div class="space-y-4">
                <!-- Date -->
                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div class="ml-3 text-sm">
                    <p class="font-medium text-gray-900">Date</p>
                    <p class="text-gray-600"><?php echo formatDate($event['date']); ?></p>
                  </div>
                </div>
                
                <!-- Time -->
                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div class="ml-3 text-sm">
                    <p class="font-medium text-gray-900">Time</p>
                    <p class="text-gray-600"><?php echo htmlspecialchars($event['time']); ?></p>
                  </div>
                </div>
                
                <!-- Location -->
                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div class="ml-3 text-sm">
                    <p class="font-medium text-gray-900">Location</p>
                    <p class="text-gray-600"><?php echo htmlspecialchars($event['location']); ?></p>
                  </div>
                </div>
                
                <!-- Price -->
                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div class="ml-3 text-sm">
                    <p class="font-medium text-gray-900">Ticket Price</p>
                    <p class="text-gray-600"><?php echo formatCurrency($event['ticketPrice']); ?></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Registration Card -->
          <div class="bg-white shadow overflow-hidden sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <h2 class="text-lg font-medium text-gray-900 mb-4">Register for This Event</h2>
              <form action="register.php" method="post" class="space-y-4">
                <input type="hidden" name="event_id" value="<?php echo htmlspecialchars($event['id']); ?>">
                
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" name="name" id="name" required class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border">
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" name="email" id="email" required class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border">
                </div>
                
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input type="tel" name="phone" id="phone" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border">
                </div>
                
                <?php if ($event['ticketPrice'] > 0): ?>
                <div>
                  <label for="tickets" class="block text-sm font-medium text-gray-700">Number of Tickets</label>
                  <select name="tickets" id="tickets" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <?php endif; ?>
                
                <div>
                  <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <?php echo $event['ticketPrice'] > 0 ? 'Purchase Tickets' : 'Register Now'; ?>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <?php else: ?>
  <!-- Event Not Found -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
    <div class="bg-white p-8 rounded-lg shadow">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Event Not Found</h1>
      <p class="text-lg text-gray-600 mb-8">The event you're looking for doesn't exist or has been removed.</p>
      <a href="index.html" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
        Back to All Events
      </a>
    </div>
  </div>
  <?php endif; ?>

  <!-- Footer -->
  <footer class="bg-gray-800">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">Campus Gathering Grid</h3>
          <p class="text-gray-300">Connecting students with campus events and activities.</p>
          <div class="mt-4 flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white">
              <span class="sr-only">Facebook</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <span class="sr-only">Instagram</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <span class="sr-only">Twitter</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><a href="index.html" class="text-gray-300 hover:text-white">Home</a></li>
            <li><a href="index.html#browse-events" class="text-gray-300 hover:text-white">All Events</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white">Categories</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white">Create Event</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white">About Us</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <p class="text-gray-300 mb-2">Email: info@campusgrid.edu</p>
          <p class="text-gray-300 mb-2">Phone: (123) 456-7890</p>
          <p class="text-gray-300">Address: 123 University Ave, Campus City, ST 12345</p>
        </div>
      </div>
      <div class="mt-8 border-t border-gray-700 pt-8">
        <p class="text-gray-400 text-center">&copy; 2023 Campus Gathering Grid. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script>
    // Mobile menu toggle
    document.addEventListener('DOMContentLoaded', function() {
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      
      if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
          mobileMenu.classList.toggle('hidden');
        });
      }
    });
  </script>
</body>
</html>
