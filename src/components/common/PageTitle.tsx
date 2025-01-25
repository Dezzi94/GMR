import * as React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../layout/Section';

interface PageTitleProps {
  title: string;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
  background?: 'white' | 'gray' | 'primary' | 'accent';
}

const PageTitle = ({
  title,
  subtitle,
  align = 'center',
  className = '',
  background = 'primary',
}: PageTitleProps): JSX.Element => {
  return (
    <Section background={background} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-${align} max-w-4xl mx-auto`}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
        {subtitle && (
          <div className="text-xl md:text-2xl opacity-90">
            {subtitle}
          </div>
        )}
      </motion.div>
    </Section>
  );
};

export default PageTitle; 