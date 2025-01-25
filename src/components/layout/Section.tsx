import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'primary' | 'accent';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  animate?: boolean;
}

const backgrounds = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  primary: 'bg-primary text-white',
  accent: 'bg-accent text-white',
};

export const Section = ({
  children,
  className = '',
  id,
  background = 'white',
  containerSize = 'lg',
  animate = true,
}: SectionProps) => {
  const content = (
    <section
      id={id}
      className={`
        py-16 sm:py-20
        ${backgrounds[background]}
        ${className}
      `}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
}; 