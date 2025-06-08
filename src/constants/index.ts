export const COMPANY_NAME = 'GMR-1';
export const COMPANY_DESCRIPTION = 'Innovative Solutions for Tomorrow\'s Challenges';
export const COMPANY_EMAIL = 'admin@gmr1.com.au';
export const COMPANY_PHONE = '+61 455 365 528';
export const COMPANY_PHONE_2 = '+61 455 365 506';
export const COMPANY_ADDRESS = '47 Macquarie Street, Gracemere, Queensland 4702';

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/gmr1',
  twitter: 'https://twitter.com/gmr1',
  linkedin: 'https://linkedin.com/company/gmr1',
  instagram: 'https://instagram.com/gmr1',
};

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export const ANIMATION_DURATION = 0.5;
export const ANIMATION_DELAY = 0.2;

export const CONTACT_FORM_SUBJECTS = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'support', label: 'Technical Support' },
  { value: 'sales', label: 'Sales' },
  { value: 'other', label: 'Other' },
];

export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  },
}; 