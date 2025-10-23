import React, { useEffect, useMemo, useRef, useState } from 'react';
import { NavLink, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import { portfolioProjects, PortfolioProject } from './data/portfolioProjects';

const resumeLink = 'https://drive.google.com/drive/u/5/folders/1ORm-kJBELb_N09Fs5UZ8i9fHSkTvIS_j';

const navItems = [
  { label: 'Overview', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/experience' },
  { label: 'Contact', path: '/contact' },
];

const quickStats = [
  {
    value: '4+ flagship builds',
    label: 'Projects shipped',
    description: 'Predictive Analysis, Blood Bank, Virtual Lab, Syncspace',
    target: '/projects',
    icon: 'rocket_launch',
  },
  {
    value: 'B.Tech CSE',
    label: 'Engineering Fresher',
    description: 'Software engineering student focussed on product impact',
    target: '/about',
    icon: 'school',
  },
  {
    value: 'Full-stack & ML',
    label: 'Modern build toolkit',
    description: 'React 19, Node.js, TensorFlow, Django, analytics',
    target: '/skills',
    icon: 'hub',
  },
];

type SkillShowcase = {
  title: string;
  blurb: string;
  items: string[];
  icon: string;
};

const skillsShowcase: SkillShowcase[] = [
  {
    title: 'Frontend Engineering',
    blurb: 'Ship polished, accessible interfaces that hold up under rapid iteration.',
    items: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Design systems'],
    icon: 'palette',
  },
  {
    title: 'Backend & Realtime',
    blurb: 'Model resilient APIs and realtime rails for collaborative products.',
    items: ['Node.js 20', 'Express', 'Socket.IO', 'Redis messaging', 'JWT auth'],
    icon: 'hub',
  },
  {
    title: 'Python & Platforms',
    blurb: 'Craft reliable services and tooling with Python-first ecosystems.',
    items: ['Django 4.2', 'Flask', 'Jinja2', 'CI workflows', 'Git discipline'],
    icon: 'terminal',
  },
  {
    title: 'Data Science & ML',
    blurb: 'Translate messy datasets into measurable impact with tuned models.',
    items: [
      'TensorFlow · scikit-learn',
      'Feature pipelines & SMOTE',
      'Evaluation dashboards (F1, recall, CV)',
    ],
    icon: 'analytics',
  },
];


const experienceNarrative = {
  headline: 'Designing Syncspace & Predictive Retention Systems',
  intro:
    'I build for clarity and reliability—whether that is a realtime workspace like Syncspace or a data-heavy ML pipeline predicting student dropout.',
  bullets: [
    'Syncspace: React 19 + Socket.IO collaboration layer with role-aware access and optimistic UI flows.',
    'Blood Bank: Django dashboards automate stock alerts and keep donor data verifiable.',
    'Dropout Analytics: TensorFlow and scikit-learn models tuned with SMOTE and evaluated on recall-driven metrics.',
  ],
  closer:
    'Each project pairs thoughtful UX with dependable engineering so teams can act on trusted insights.',
};

const profileImageSrc = '/assets/images/profile.jpg';

const contactDetails = [
  { label: 'Email', value: 'rshyamsingh106@gmail.com', href: 'mailto:rshyamsingh106@gmail.com', icon: 'mail' },
  { label: 'LinkedIn', value: 'linkedin.com/in/ravi-shyam-singh-411740268', href: 'https://www.linkedin.com/in/ravi-shyam-singh-411740268/', icon: 'public' },
  { label: 'GitHub', value: 'github.com/ravishyam', href: 'https://github.com/ravishyam', icon: 'terminal' },
];

const SectionWrapper: React.FC<React.PropsWithChildren<{ title: string; subtitle?: string }>> = ({ title, subtitle, children }) => (
  <section className="section-padding">
    <div className="container-custom">
      <div className="max-w-3xl mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-primary-500 mb-3">{subtitle ?? 'Portfolio Snapshot'}</p>
        <h2 className="text-4xl font-bold text-secondary-900 dark:text-white">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

const HomeSection: React.FC = () => {
  const navigate = useNavigate();
  const typingTexts = useMemo(
    () => ['Ravi Shyam Singh', 'Full Stack Developer', 'Open for Collaboration'],
    []
  );
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const strings = typingTexts;
    const currentText = strings[currentIndex];

    if (!isDeleting && displayText === currentText) {
      const pause = window.setTimeout(() => setIsDeleting(true), 1400);
      return () => window.clearTimeout(pause);
    }

    if (isDeleting && displayText === '') {
      const nextWordDelay = window.setTimeout(() => {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % strings.length);
      }, 250);
      return () => window.clearTimeout(nextWordDelay);
    }

    const timeout = window.setTimeout(() => {
      setDisplayText((prev) => {
        if (isDeleting) {
          return prev.slice(0, -1);
        }
        return currentText.slice(0, prev.length + 1);
      });
    }, isDeleting ? 45 : 85);

    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, typingTexts]);

  return (
    <section className="pt-20 pb-16 min-h-[calc(100vh-6rem)] bg-gradient-to-br from-white via-[#eef3ff] to-[#f4f9ff] dark:from-secondary-900 dark:via-secondary-900 dark:to-secondary-800">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 dark:bg-primary-900/40 dark:text-primary-200 px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
              <span className="material-symbols-rounded text-primary-500">workspace_premium</span>
              Engineering Fresher · Software Engineering (CSE)
            </span>
            <div className="space-y-1" aria-live="polite">
              <p className="text-3xl lg:text-2xl font-bold text-secondary-900 dark:text-white leading-tight tracking-tight">
                {displayText}
                <span className="inline-block ml-1 text-primary-500 animate-pulse">|</span>
              </p>
            </div>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 leading-relaxed">
              I am a final-year B.Tech CSE student crafting thoughtful web platforms. My focus is on building reliable, real-time experiences that help teams learn, collaborate, and ship with confidence.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
              <button className="btn-primary" onClick={() => navigate('/projects')}>
                <span className="material-symbols-rounded text-white/90">rocket_launch</span>
                Explore Projects
              </button>
              <button className="btn-secondary" onClick={() => navigate('/contact')}>
                <span className="material-symbols-rounded text-primary-500">chat</span>
                Connect With Me
              </button>
              <a
                href={resumeLink}
                className="btn-secondary bg-white text-primary-600 border border-primary-200 hover:bg-primary-50 hover:text-primary-700 dark:bg-secondary-900 dark:text-primary-300 dark:border-primary-500"
                target="_blank"
                rel="noreferrer"
                download
                title="Download Ravi Shyam Singh CV"
              >
                <span className="material-symbols-rounded text-primary-500">download</span>
                Download CV
              </a>
            </div>
            <div className="grid sm:grid-cols-3 gap-5 pt-8 border-t border-secondary-200 dark:border-secondary-700">
              {quickStats.map((stat) => (
                <button
                  key={stat.label}
                  onClick={() => navigate(stat.target)}
                  className="card p-5 text-left transition-transform hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-rounded text-primary-500 text-3xl">{stat.icon}</span>
                    <p className="text-xs uppercase tracking-[0.25em] text-secondary-500 dark:text-secondary-400">{stat.label}</p>
                  </div>
                  <p className="text-lg font-semibold text-secondary-900 dark:text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-secondary-500 dark:text-secondary-400">{stat.description}</p>
                </button>
              ))}
            </div>
          </div>
          <div className="relative self-start">
            <div className="relative w-full max-w-[22rem] mx-auto aspect-square">
              <div className="absolute inset-0 rounded-[34px] bg-gradient-to-br from-primary-200/35 via-white/40 to-secondary-200/30 dark:from-primary-700/35 dark:via-secondary-800/40 dark:to-secondary-700/30 blur-2xl" aria-hidden="true" />
              <div className="relative h-full rounded-[30px] bg-white dark:bg-secondary-900 ring-1 ring-primary-100/60 dark:ring-secondary-700 shadow-[0_24px_50px_-28px_rgba(79,70,229,0.45)] overflow-hidden">
                <img
                  src={profileImageSrc}
                  alt="Portrait of Ravi Shyam Singh"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-x-5 bottom-5 bg-white/85 dark:bg-secondary-900/85 backdrop-blur rounded-2xl px-4 py-3 flex items-center justify-between shadow-[0_12px_30px_-18px_rgba(79,70,229,0.45)]">
                  <div>
                    <p className="text-sm font-semibold text-secondary-900 dark:text-white">Ravi Shyam Singh</p>
                    <p className="text-xs text-secondary-500 dark:text-secondary-300 uppercase tracking-[0.28em]">Full Stack Developer</p>
                  </div>
                  <span className="material-symbols-rounded text-primary-500 text-2xl">verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection: React.FC = () => (
  <SectionWrapper title="Who I Am" subtitle="About">
    <div className="grid lg:grid-cols-2 gap-10">
      <div className="space-y-6">
        <div className="card p-6">
          <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3">🎓 Academic Journey</h3>
          <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
            Final-year B.Tech Computer Science & Engineering student with a passion for software craftsmanship. I approach every build with a learning mindset and an eye for production readiness.
          </p>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3">🏆 Highlights</h3>
          <ul className="space-y-3 text-secondary-600 dark:text-secondary-300">
            <li>• Runner-up at ACM collegiate hackathon for an automation-led problem statement.</li>
            <li>• Led campus workshops on version control and rapid prototyping with Tailwind CSS.</li>
            <li>• Actively contributing to peers by sharing project templates and collaboration tips.</li>
          </ul>
        </div>
      </div>
      <div className="space-y-6">
        <div className="card p-6">
          <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3">📌 What Drives Me</h3>
          <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
            I enjoy transforming complex requirements into intuitive experiences. My projects focus on helping users understand difficult topics (like cryptography) or collaborate seamlessly (like Syncspace).
          </p>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3">🌍 Based In</h3>
          <p className="text-secondary-600 dark:text-secondary-300">
            Tamil Nadu, Madurai · Available for remote Software Engineer / Full-Stack Developer roles and internships.
          </p>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

const useReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) {
      return;
    }

    if (typeof window === 'undefined' || !(window as any).IntersectionObserver) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { elementRef, isVisible };
};

const ProjectCard: React.FC<{ project: PortfolioProject; index: number }> = ({ project, index }) => {
  const { elementRef, isVisible } = useReveal();

  return (
    <article
      ref={elementRef}
      className={`relative overflow-hidden rounded-3xl border border-primary-100/70 dark:border-secondary-700 bg-gradient-to-br from-white via-primary-50/40 to-primary-100/30 dark:from-secondary-900/80 dark:via-secondary-900/70 dark:to-secondary-800/60 shadow-xl backdrop-blur transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-8 rotate-[2deg]'
      } hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.01]`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span className="pointer-events-none absolute inset-x-6 top-0 h-1 rounded-full bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-500 opacity-80" />
      <div className="flex flex-col gap-6 h-full p-6 lg:p-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.25em] text-primary-500">{project.subtitle}</p>
          <h3 className="text-2xl font-semibold text-secondary-900 dark:text-white">{project.title}</h3>
          <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-white/70 text-primary-700 shadow-sm border border-primary-100/60 text-xs font-medium dark:bg-secondary-900/80 dark:text-primary-200 dark:border-secondary-600"
            >
              {tech}
            </span>
          ))}
        </div>
        <ul className="space-y-3 text-sm lg:text-base text-secondary-600 dark:text-secondary-300">
          {project.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="flex items-start gap-2">
              <span className="material-symbols-rounded text-primary-500 mt-0.5 text-lg">check_circle</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

const SkillCard: React.FC<{ category: SkillShowcase; index: number }> = ({ category, index }) => {
  const { elementRef, isVisible } = useReveal();

  return (
    <article
      ref={elementRef}
      className={`card p-6 h-full flex flex-col transition-all duration-500 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } hover:-translate-y-1 hover:shadow-2xl`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">{category.title}</h3>
        <span className="material-symbols-rounded text-primary-500" aria-hidden="true">{category.icon}</span>
      </div>
      <p className="text-sm text-secondary-500 dark:text-secondary-400 mb-4">{category.blurb}</p>
      <ul className="space-y-2 text-secondary-600 dark:text-secondary-300">
        {category.items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="material-symbols-rounded text-primary-500 mt-0.5">check_circle</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

const SkillsSection: React.FC = () => (
  <SectionWrapper title="Skills & Tools" subtitle="Skills">
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
      {skillsShowcase.map((group, index) => (
        <SkillCard key={group.title} category={group} index={index} />
      ))}
    </div>
  </SectionWrapper>
);

const ProjectsSection: React.FC = () => (
  <SectionWrapper title="Projects" subtitle="Selected Work">
    <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
      {portfolioProjects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  </SectionWrapper>
);

const ExperienceSection: React.FC = () => {
  const primaryCard = useReveal();
  const focusCard = useReveal();

  return (
    <SectionWrapper title="Experience as a Builder" subtitle="Experience">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <article
          ref={primaryCard.elementRef}
          className={`card p-6 lg:p-8 space-y-4 border-l-4 border-primary-200 dark:border-primary-500 transition-all duration-600 ease-out ${
            primaryCard.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h3 className="text-2xl font-semibold text-secondary-900 dark:text-white flex items-center gap-3">
            <span className="material-symbols-rounded text-primary-500">timeline</span>
            {experienceNarrative.headline}
          </h3>
          <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">{experienceNarrative.intro}</p>
          <ul className="space-y-3 text-secondary-600 dark:text-secondary-300">
            {experienceNarrative.bullets.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="material-symbols-rounded text-primary-500 mt-0.5">grade</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">{experienceNarrative.closer}</p>
        </article>
        <article
          ref={focusCard.elementRef}
          className={`card p-6 lg:p-8 space-y-4 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900 border-none shadow-xl transition-all duration-600 ease-out ${
            focusCard.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '120ms' }}
        >
          <h4 className="text-lg font-semibold text-secondary-900 dark:text-white">Focus Areas</h4>
          <div className="space-y-3 text-secondary-600 dark:text-secondary-300">
            <p className="flex items-start gap-2">
              <span className="material-symbols-rounded text-primary-500">hub</span>
              Product-ready realtime workflows
            </p>
            <p className="flex items-start gap-2">
              <span className="material-symbols-rounded text-primary-500">insights</span>
              Data storytelling that drives decisions
            </p>
            <p className="flex items-start gap-2">
              <span className="material-symbols-rounded text-primary-500">security</span>
              Trustworthy auth and system reliability
            </p>
          </div>
        </article>
      </div>
    </SectionWrapper>
  );
};

const ContactSection: React.FC = () => (
  <SectionWrapper title="Let’s Connect" subtitle="Contact">
    <div className="card p-6 lg:p-8">
      <p className="text-secondary-600 dark:text-secondary-300 mb-6">
        I’m actively seeking internship and entry-level opportunities where I can contribute as a software engineer. If you’d like to collaborate or just say hi, feel free to reach out through any of the channels below.
      </p>
      <div className="grid sm:grid-cols-3 gap-4">
        {contactDetails.map((detail) => (
          <a
            key={detail.label}
            href={detail.href}
            className="card p-4 hover:-translate-y-1 transition-transform"
            target={detail.href.startsWith('http') ? '_blank' : undefined}
            rel={detail.href.startsWith('http') ? 'noreferrer' : undefined}
          >
            <div className="flex items-center gap-2 text-secondary-500 dark:text-secondary-400 text-sm">
              <span className="material-symbols-rounded text-primary-500">{detail.icon}</span>
              <span>{detail.label}</span>
            </div>
            <p className="mt-1 font-semibold text-secondary-900 dark:text-white break-words">{detail.value}</p>
          </a>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

const Footer: React.FC = () => (
  <footer className="bg-secondary-900 dark:bg-black text-white py-12">
    <div className="container-custom text-center space-y-4">
      <p className="text-xl font-semibold">Ravi Shyam Singh</p>
      <p className="text-secondary-400 text-sm">Building dependable web experiences with empathy and curiosity.</p>
      <div className="flex justify-center gap-5 text-sm">
        {contactDetails.map((detail) => (
          <a key={detail.label} href={detail.href} className="text-secondary-400 hover:text-white transition-colors inline-flex items-center gap-1" target={detail.href.startsWith('http') ? '_blank' : undefined} rel={detail.href.startsWith('http') ? 'noreferrer' : undefined}>
            <span className="material-symbols-rounded text-primary-400 text-base">{detail.icon}</span>
            {detail.label}
          </a>
        ))}
      </div>
      <p className="text-xs text-secondary-500">© {new Date().getFullYear()} Ravi Shyam Singh. Crafted with React & Tailwind CSS.</p>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-secondary-900 transition-colors duration-300">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-secondary-900/90 backdrop-blur-lg border-b border-secondary-200 dark:border-secondary-700">
        <div className="container-custom flex items-center justify-between py-4">
          <NavLink to="/" className="text-2xl font-bold text-gradient">
            Ravi Shyam Singh
          </NavLink>
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }: { isActive: boolean }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-primary-600 dark:text-primary-300'
                      : 'text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-300'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="pt-24">
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/skills" element={<SkillsSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/experience" element={<ExperienceSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
