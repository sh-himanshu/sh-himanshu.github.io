export const NAV_ITEMS = [
  { id: 'experience', label: 'Work Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const;

export const TECH_STACK = [
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind',
  'Node.js',
  'PostgreSQL',
  'AWS',
  'Docker',
] as const;

export const EXPERIENCE = [
  {
    company: 'Birdeye',
    role: 'Software Development Engineer',
    dates: 'July 2024 — Present',
    location: 'Palo Alto, California (Remote)',
    logo: '/birdeye_logo.jpeg',
    summary: 'Led design system and performance work for a multi-tenant dashboard.',
  },
  {
    company: 'Oojan',
    role: 'Software Development Engineer',
    dates: 'Sep 2022 — Jul 2024',
    location: 'Onsite / Mumbai, India',
    logo: '/oorjan_logo.jpeg',
    summary: 'Built SSR apps, GraphQL services, and CI pipelines.',
  },
  {
    company: 'RaftLabs',
    role: 'Software Development Engineer',
    dates: 'Sep 2022 — Jul 2024',
    location: 'Onsite / Mumbai, India',
    logo: '/raftlabs_logo.jpeg',
    summary: 'Built SSR apps, GraphQL services, and CI pipelines.',
  },
] as const;

export const PROJECTS = [
  {
    title: '3D Globe',
    desc: 'WebGL globe visualizing real-time data.',
    image: '/globe.svg',
    tags: ['Next', 'Three.js', 'Edge'],
    github: 'https://github.com/',
    demo: 'https://example.com',
  },
  {
    title: 'Window UI',
    desc: 'Desktop-like window manager for the browser.',
    image: '/window.svg',
    tags: ['React', 'Zustand', 'Tailwind'],
    github: 'https://github.com/',
    demo: 'https://example.com',
  },
] as const;

export const CONTACT = {
  name: 'Himanshu Sharma',
  firstName: 'Himanshu',
  email: 'himanshu.sh1220@gmail.com',
  location: 'Gurugram, India',
  linkedin: 'sh-himanshu',
  resumeUrl: 'https://drive.google.com/file/d/1vVL9G0t-H99QSifRNha-2yAJxGdVDuiL/view?usp=sharing',
  github: 'sh-himanshu',
};
