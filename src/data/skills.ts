export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'languages' | 'frameworks';
  proficiency: number; // 0-100
  yearsOfExperience: number;
  icon: string;
  color: string;
  description: string;
  projects: string[]; // project IDs where this skill was used
}

export const skills: Skill[] = [
  // Frontend Technologies
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    proficiency: 90,
    yearsOfExperience: 3,
    icon: 'react',
    color: '#61DAFB',
    description: 'Advanced React development with hooks, context, and modern patterns',
    projects: ['personal-portfolio', 'ai-mock-interview', 'task-management-app', 'weather-dashboard', 'ecommerce-platform']
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'languages',
    proficiency: 85,
    yearsOfExperience: 2,
    icon: 'typescript',
    color: '#3178C6',
    description: 'Strong typing and modern TypeScript features for scalable applications',
    projects: ['personal-portfolio', 'weather-dashboard']
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'languages',
    proficiency: 95,
    yearsOfExperience: 4,
    icon: 'javascript',
    color: '#F7DF1E',
    description: 'Expert-level JavaScript including ES6+, async/await, and modern frameworks',
    projects: ['virtual-lab-cryptography', 'ai-mock-interview', 'task-management-app', 'weather-dashboard']
  },
  {
    id: 'html5',
    name: 'HTML5',
    category: 'frontend',
    proficiency: 95,
    yearsOfExperience: 4,
    icon: 'html5',
    color: '#E34F26',
    description: 'Semantic HTML5, accessibility best practices, and modern web standards',
    projects: ['personal-portfolio', 'virtual-lab-cryptography']
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: 'frontend',
    proficiency: 90,
    yearsOfExperience: 4,
    icon: 'css3',
    color: '#1572B6',
    description: 'Advanced CSS including Flexbox, Grid, animations, and responsive design',
    projects: ['personal-portfolio', 'virtual-lab-cryptography']
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    category: 'frontend',
    proficiency: 88,
    yearsOfExperience: 2,
    icon: 'tailwindcss',
    color: '#06B6D4',
    description: 'Utility-first CSS framework for rapid UI development',
    projects: ['personal-portfolio', 'virtual-lab-cryptography', 'weather-dashboard']
  },

  // Backend Technologies
  {
    id: 'django',
    name: 'Django',
    category: 'backend',
    proficiency: 85,
    yearsOfExperience: 2,
    icon: 'django',
    color: '#092E20',
    description: 'Django web framework with REST API development and ORM',
    projects: ['personal-portfolio']
  },
  {
    id: 'flask',
    name: 'Flask',
    category: 'backend',
    proficiency: 80,
    yearsOfExperience: 2,
    icon: 'flask',
    color: '#000000',
    description: 'Lightweight Flask framework for web applications and APIs',
    projects: ['virtual-lab-cryptography']
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    proficiency: 82,
    yearsOfExperience: 2,
    icon: 'nodejs',
    color: '#339933',
    description: 'Server-side JavaScript runtime for building scalable applications',
    projects: ['ai-mock-interview', 'task-management-app', 'ecommerce-platform']
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'backend',
    proficiency: 80,
    yearsOfExperience: 2,
    icon: 'express',
    color: '#000000',
    description: 'Fast and minimalist web framework for Node.js',
    projects: ['ai-mock-interview', 'task-management-app', 'ecommerce-platform']
  },

  // Programming Languages
  {
    id: 'python',
    name: 'Python',
    category: 'languages',
    proficiency: 88,
    yearsOfExperience: 3,
    icon: 'python',
    color: '#3776AB',
    description: 'Python programming for web development, scripting, and data processing',
    projects: ['virtual-lab-cryptography', 'personal-portfolio']
  },
  {
    id: 'java',
    name: 'Java',
    category: 'languages',
    proficiency: 75,
    yearsOfExperience: 2,
    icon: 'java',
    color: '#ED8B00',
    description: 'Object-oriented programming and enterprise application development',
    projects: []
  },

  // Databases
  {
    id: 'sqlite',
    name: 'SQLite',
    category: 'database',
    proficiency: 80,
    yearsOfExperience: 2,
    icon: 'sqlite',
    color: '#003B57',
    description: 'Lightweight database for development and small applications',
    projects: ['personal-portfolio']
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    proficiency: 75,
    yearsOfExperience: 1,
    icon: 'postgresql',
    color: '#336791',
    description: 'Advanced relational database with complex queries and optimization',
    projects: ['task-management-app']
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    proficiency: 78,
    yearsOfExperience: 2,
    icon: 'mongodb',
    color: '#47A248',
    description: 'NoSQL document database for flexible data modeling',
    projects: ['ai-mock-interview', 'ecommerce-platform']
  },

  // Tools and Frameworks
  {
    id: 'git',
    name: 'Git',
    category: 'tools',
    proficiency: 85,
    yearsOfExperience: 3,
    icon: 'git',
    color: '#F05032',
    description: 'Version control with Git and GitHub for collaborative development',
    projects: ['personal-portfolio', 'virtual-lab-cryptography', 'ai-mock-interview', 'task-management-app', 'weather-dashboard', 'ecommerce-platform']
  },
  {
    id: 'redux',
    name: 'Redux',
    category: 'frontend',
    proficiency: 78,
    yearsOfExperience: 1,
    icon: 'redux',
    color: '#764ABC',
    description: 'State management for complex React applications',
    projects: ['task-management-app']
  },
  {
    id: 'socketio',
    name: 'Socket.io',
    category: 'backend',
    proficiency: 75,
    yearsOfExperience: 1,
    icon: 'socketio',
    color: '#010101',
    description: 'Real-time bidirectional event-based communication',
    projects: ['task-management-app']
  },
  {
    id: 'jwt',
    name: 'JWT',
    category: 'backend',
    proficiency: 80,
    yearsOfExperience: 2,
    icon: 'jwt',
    color: '#000000',
    description: 'JSON Web Tokens for secure authentication and authorization',
    projects: ['ecommerce-platform', 'ai-mock-interview']
  }
];

export const getSkillsByCategory = (category: string) => {
  return skills.filter(skill => skill.category === category);
};

export const getTopSkills = (limit: number = 8) => {
  return skills
    .sort((a, b) => b.proficiency - a.proficiency)
    .slice(0, limit);
};

export const getSkillById = (id: string) => {
  return skills.find(skill => skill.id === id);
};

export const skillCategories = [
  { id: 'frontend', name: 'Frontend', icon: 'laptop-code', color: '#3B82F6' },
  { id: 'backend', name: 'Backend', icon: 'server', color: '#10B981' },
  { id: 'languages', name: 'Languages', icon: 'code', color: '#8B5CF6' },
  { id: 'database', name: 'Database', icon: 'database', color: '#F59E0B' },
  { id: 'tools', name: 'Tools', icon: 'tools', color: '#EF4444' },
  { id: 'frameworks', name: 'Frameworks', icon: 'layer-group', color: '#06B6D4' }
];
