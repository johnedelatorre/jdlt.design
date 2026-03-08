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
    label: 'Resume',
    href: '/resume',
    icon: 'download'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/johnericdelatorreugarte/',
    external: true,
    icon: 'linkedin'
  }
]; 