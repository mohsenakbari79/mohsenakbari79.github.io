/**
 * Shared site-wide configuration and content types.
 * Content itself lives in `fa.ts` / `en.ts` and is copied verbatim
 * from the previous React site.
 */

export type Locale = 'fa' | 'en';

export interface Profile {
  name: string;
  expertise: string;
  phone: string;
  email: string;
  marital_status: string;
  military_service: string;
  address: string;
  birthday: string;
}

export interface Degree {
  degree: string;
  university: string;
  specialization?: string;
  start_year: string;
  end_year: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Job {
  position: string;
  company: string;
  period: string;
  tasks: string[];
}

export interface Project {
  title: string;
  urls?: string;
  description: string[];
  technologies: string[];
  client: string;
  startDate: string;
  endDate: string;
}

export interface Course {
  title: string;
  date: string;
  source: string;
  link: string;
}

export interface Content {
  header: { title: string; language: string };
  profile: Profile;
  about_me: { title: string; summary: string };
  education: { title: string; degrees: Degree[] };
  social_media: { title: string };
  skills: { title: string; categories: SkillCategory[] };
  experience: { title: string; tasks_title: string; jobs: Job[] };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    phone: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    phonePlaceholder: string;
    send: string;
    sending: string;
    successMessage: string;
    formError: string;
  };
  project: {
    title: string;
    technologiesUsed: string;
    client: string;
    startDate: string;
    endDate: string;
  };
  projects: Project[];
  courses: { title: string; date: string; source: string };
  course: Course[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'telegram' | 'virgool';
}

/** Social profiles shown in the UI (extracted from the previous site). */
export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/mohsenakbari79', icon: 'github' },
  { name: 'Telegram', url: 'https://t.me/malevin', icon: 'telegram' },
  { name: 'Virgool', url: 'https://virgool.io/@malevin2020', icon: 'virgool' },
];

/** Navigation labels (UI chrome, per locale). */
export const navItems: Record<Locale, { href: string; label: string }[]> = {
  fa: [
    { href: '/', label: 'خانه' },
    { href: '/resume', label: 'رزومه' },
    { href: '/contact', label: 'تماس' },
  ],
  en: [
    { href: '/en/', label: 'Home' },
    { href: '/en/resume', label: 'Resume' },
    { href: '/en/contact', label: 'Contact' },
  ],
};

/** Alternate-language version of the current path (for the language toggle). */
export function alternateHref(pathname: string, lang: Locale): string {
  if (lang === 'fa') {
    return pathname === '/' ? '/en/' : `/en${pathname}`;
  }
  const stripped = pathname.replace(/^\/en/, '');
  return stripped === '' ? '/' : stripped;
}

export const site = {
  url: 'https://mohsenakbari79.github.io',
  email: 'malevin2020@gmail.com',
  ogImage: 'https://mohsenakbari79.github.io/profile.png',
  /** FormSubmit.co AJAX endpoint — works without any API key. */
  formEndpoint: 'https://formsubmit.co/ajax/malevin2020@gmail.com',
} as const;
