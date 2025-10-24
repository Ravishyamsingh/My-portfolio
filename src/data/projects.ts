export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: 'frontend' | 'fullstack' | 'backend' | 'python';
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
  screenshots: string[];
  startDate: string;
  endDate: string;
  status: 'completed' | 'in-progress' | 'planned';
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    description: 'A responsive full-stack portfolio showcasing my skills and projects with modern design and interactive features.',
    longDescription: 'A comprehensive portfolio website built with React and Django, featuring responsive design, dark/light theme toggle, contact form, and project showcase. The site demonstrates my full-stack development capabilities with clean code architecture and modern UI/UX practices.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Django', 'Django REST Framework', 'SQLite', 'Netlify'],
    category: 'fullstack',
    featured: true,
    githubUrl: 'https://github.com/ravishyam/portfolio',
    liveUrl: 'https://ravishyam-portfolio.netlify.app',
    imageUrl: '/assets/images/projects/portfolio-main.jpg',
    screenshots: [
      '/assets/images/projects/portfolio-home.jpg',
      '/assets/images/projects/portfolio-projects.jpg',
      '/assets/images/projects/portfolio-contact.jpg'
    ],
    startDate: '2022-06',
    endDate: '2024-03',
    status: 'completed',
    highlights: [
      'Responsive design with mobile-first approach',
      'Dark/Light theme implementation',
      'Contact form with email notifications',
      'Performance optimization achieving 90+ Lighthouse score',
      'SEO optimization with meta tags and structured data'
    ]
  },
  {
    id: 'virtual-lab-cryptography',
    title: 'Virtual Lab - Cryptography Learning Platform',
    description: 'An interactive educational platform for learning cryptography algorithms with real-time encryption tools.',
    longDescription: 'A comprehensive learning platform that provides interactive tools for understanding various cryptography algorithms. Built with modern web technologies, it features multiple cipher implementations, real-time encryption/decryption, and educational content to help students learn cryptography concepts effectively.',
    techStack: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Flask', 'Jinja2', 'Python'],
    category: 'fullstack',
    featured: true,
    githubUrl: 'https://github.com/ravishyam/cryptography-lab',
    liveUrl: 'https://crypto-lab-ravi.github.io',
    imageUrl: '/assets/images/projects/crypto-lab-main.jpg',
    screenshots: [
      '/assets/images/projects/crypto-caesar.jpg',
      '/assets/images/projects/crypto-mono.jpg',
      '/assets/images/projects/crypto-tools.jpg'
    ],
    startDate: '2022-06',
    endDate: '2024-03',
    status: 'completed',
    highlights: [
      'Multiple cipher algorithm implementations',
      'Real-time encryption and decryption tools',
      'Interactive learning modules',
      'Responsive design for all devices',
      'Educational content with examples'
    ]
  },
  {
    id: 'ai-mock-interview',
    title: 'AI Mock Interview Platform',
    description: 'An AI-powered platform for conducting mock interviews with real-time feedback and performance analytics.',
    longDescription: 'A sophisticated interview preparation platform that uses artificial intelligence to conduct mock interviews, provide real-time feedback, and generate detailed performance reports. The platform helps job seekers practice and improve their interview skills.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI API', 'WebRTC'],
    category: 'fullstack',
    featured: true,
    githubUrl: 'https://github.com/ravishyam/ai-interview',
    imageUrl: '/assets/images/projects/ai-interview-main.jpg',
    screenshots: [
      '/assets/images/projects/ai-interview-dashboard.jpg',
      '/assets/images/projects/ai-interview-session.jpg',
      '/assets/images/projects/ai-interview-analytics.jpg'
    ],
    startDate: '2023-01',
    endDate: '2023-06',
    status: 'completed',
    highlights: [
      'AI-powered interview simulation',
      'Real-time speech recognition',
      'Performance analytics and feedback',
      'Video recording and playback',
      'Progress tracking dashboard'
    ]
  },
  {
    id: 'task-management-app',
    title: 'Advanced Task Management System',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    longDescription: 'A comprehensive task management system designed for teams and individuals to organize, track, and complete projects efficiently. Features include real-time collaboration, deadline tracking, file attachments, and progress visualization.',
    techStack: ['React', 'Redux', 'Node.js', 'Express', 'PostgreSQL', 'Socket.io'],
    category: 'fullstack',
    featured: false,
    githubUrl: 'https://github.com/ravishyam/task-manager',
    imageUrl: '/assets/images/projects/task-manager-main.jpg',
    screenshots: [
      '/assets/images/projects/task-board.jpg',
      '/assets/images/projects/task-calendar.jpg',
      '/assets/images/projects/task-analytics.jpg'
    ],
    startDate: '2023-07',
    endDate: '2023-12',
    status: 'completed',
    highlights: [
      'Real-time collaboration with Socket.io',
      'Drag-and-drop task management',
      'Team member assignment and notifications',
      'Progress tracking and analytics',
      'File attachment and commenting system'
    ]
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Analytics Dashboard',
    description: 'A comprehensive weather dashboard with forecasts, historical data, and interactive visualizations.',
    longDescription: 'A feature-rich weather application that provides current weather information, detailed forecasts, historical weather data, and interactive charts. Built with modern frontend technologies and integrated with multiple weather APIs for accurate data.',
    techStack: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS', 'Weather API'],
    category: 'frontend',
    featured: false,
    githubUrl: 'https://github.com/ravishyam/weather-dashboard',
    liveUrl: 'https://weather-dash-ravi.netlify.app',
    imageUrl: '/assets/images/projects/weather-main.jpg',
    screenshots: [
      '/assets/images/projects/weather-current.jpg',
      '/assets/images/projects/weather-forecast.jpg',
      '/assets/images/projects/weather-charts.jpg'
    ],
    startDate: '2023-03',
    endDate: '2023-05',
    status: 'completed',
    highlights: [
      'Real-time weather data integration',
      'Interactive charts and visualizations',
      'Location-based weather search',
      'Responsive design for all devices',
      'Detailed forecast and historical data'
    ]
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with payment integration and admin dashboard.',
    longDescription: 'A complete e-commerce solution featuring user authentication, product catalog, shopping cart, payment processing, order management, and comprehensive admin dashboard. Built with scalability and security in mind.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'JWT'],
    category: 'fullstack',
    featured: false,
    githubUrl: 'https://github.com/ravishyam/ecommerce-platform',
    imageUrl: '/assets/images/projects/ecommerce-main.jpg',
    screenshots: [
      '/assets/images/projects/ecommerce-home.jpg',
      '/assets/images/projects/ecommerce-product.jpg',
      '/assets/images/projects/ecommerce-admin.jpg'
    ],
    startDate: '2024-01',
    endDate: '2024-06',
    status: 'in-progress',
    highlights: [
      'Secure user authentication and authorization',
      'Payment integration with Stripe',
      'Comprehensive admin dashboard',
      'Product search and filtering',
      'Order tracking and management'
    ]
  }
];

export const getProjectsByCategory = (category: string) => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectById = (id: string) => {
  return projects.find(project => project.id === id);
};
