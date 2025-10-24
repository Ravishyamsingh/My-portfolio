export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  highlights: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'predictive-analysis',
    title: 'Predictive Analysis of Student Dropout Using Machine Learning and Deep Learning',
    subtitle: 'Academic research · 2025',
    description:
      'Forecasts dropout risk with classical ML pipelines and deep neural nets crafted for imbalanced academic datasets.',
    techStack: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'TensorFlow', 'Keras', 'Matplotlib', 'Seaborn', 'SMOTE'],
    highlights: [
      'Engineered reproducible ML pipelines across logistic regression, random forest, SVM, and KNN.',
      'Built TensorFlow networks with dropout to capture non-linear churn indicators.',
      'Surfaced precision/recall insights via cross-validation dashboards for faculty stakeholders.',
    ],
  },
  {
    id: 'blood-bank-management',
    title: 'Blood Bank Management System (BDMS)',
    subtitle: 'Healthcare capstone · 2025',
    description:
      'Secures donor, patient, and stock operations through a role-based Django suite for blood banks.',
    techStack: [
      'Django 4.2',
      'Python 3.13',
      'SQLite',
      'Django ORM',
      'HTML5',
      'CSS3',
      'Bootstrap 4',
      'django-widget-tweaks',
      'Pillow',
      'SMTP email',
    ],
    highlights: [
      'Delivered admin, staff, and donor dashboards with granular Django permissions.',
      'Automated inventory alerts and emergency notifications via SMTP workflows.',
      'Streamlined stock tracking with Bootstrap-first forms and ORM audit trails.',
    ],
  },
  {
    id: 'virtual-lab',
    title: 'Virtual Lab – Cryptography Learning Platform',
    subtitle: 'Academic capstone · 2024',
    description:
      'Interactive cryptography lab guiding students through classical ciphers with instant feedback loops.',
    techStack: ['HTML5', 'Tailwind CSS', 'Vanilla JavaScript', 'Flask', 'Jinja2'],
    highlights: [
      'Multi-cipher simulations with real-time encrypt/decrypt previews.',
      'Story-driven walkthroughs tailored for cryptography newcomers.',
      'Responsive Tailwind UI optimised for classroom and remote cohorts.',
    ],
  },
  {
    id: 'syncspace',
    title: 'Syncspace Collaborative Platform',
    subtitle: 'Independent build · 2025',
    description:
      'Real-time collaboration hub aligning distributed teams around shared documents, tasks, and updates.',
    techStack: ['React 19', 'Vite', 'TypeScript', 'Zustand', 'Socket.IO', 'Node.js 20', 'Express', 'MySQL', 'Redis', 'JWT'],
    highlights: [
      'Socket.IO event mesh delivers sub-second presence and cursor sync.',
      'JWT-secured APIs with role-aware access controls and audit logs.',
      'Optimistic UI patterns keep collaborative boards responsive under load.',
    ],
  },
  {
    id: 'java-learning-platform',
    title: 'Interactive Java Learning Platform',
    subtitle: 'EdTech initiative · 2024',
    description:
      'Full-stack Java learning environment supporting 300+ students with analytics-rich journeys.',
    techStack: [
      'React 18',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'shadcn/ui',
      'Firebase Auth',
      'Firestore',
      'React Query',
      'Context API',
      'Recharts',
    ],
    highlights: [
      'Auth, protected routes, and real-time sync powered by Firebase.',
      'Analytics dashboards visualise streaks and completion across cohorts.',
      'Gamified modules encourage progression with responsive UI patterns.',
    ],
  },
];
