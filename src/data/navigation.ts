import type { NavigationItem } from '../types';

export const navigationItems: NavigationItem[] = [
  {
    label: 'Case Studies',
    href: '/',
  },
  {
    label: 'About Me',
    href: '/about',
  },
  {
    label: 'Contact Me',
    href: '/contact',
  },
  {
    label: 'Download Resume',
    href: '/resume.pdf',
    external: true,
    icon: 'download'
  }
]; 