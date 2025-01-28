import React from 'react';
import { motion } from 'framer-motion';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isHoverable?: boolean;
  isClickable?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', onClick, isHoverable = true, isClickable = false, ...props }, ref) => {
    const baseClasses = 'bg-white rounded-lg shadow-lg p-6';
    const hoverClasses = isHoverable ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1' : '';
    const clickableClasses = isClickable ? 'cursor-pointer' : '';
    const classes = `${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`;

    return (
      <motion.div
        ref={ref}
        className={classes}
        onClick={onClick}
        whileHover={isHoverable ? { scale: 1.02 } : undefined}
        whileTap={isClickable ? { scale: 0.98 } : undefined}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
) as React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;

Card.displayName = 'Card';

export default Card; 