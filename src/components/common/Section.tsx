import * as React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'primary' | 'accent' | 'dark';
}

const backgrounds = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  primary: 'bg-primary text-white',
  accent: 'bg-accent text-white',
  dark: 'bg-[#2b2b2b] text-white'
};

const Section = ({
  children,
  className = '',
  id,
  background = 'white'
}: SectionProps): JSX.Element => {
  const sectionClasses = `py-16 md:py-24 ${backgrounds[background]} ${className}`;

  return (
    <section id={id} className={sectionClasses}>
      {children}
    </section>
  );
};

export default Section; 