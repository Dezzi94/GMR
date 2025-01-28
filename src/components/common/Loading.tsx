import React from 'react';
import { motion } from 'framer-motion';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large' | 'sm';
  color?: 'primary' | 'accent' | 'white';
  className?: string;
}

const sizes = {
  small: 'w-4 h-4',
  sm: 'w-4 h-4',
  medium: 'w-6 h-6',
  large: 'w-8 h-8'
};

const colors = {
  primary: 'text-primary',
  accent: 'text-accent',
  white: 'text-white'
};

const Loading: React.FC<LoadingProps> = ({ 
  size = 'medium', 
  color = 'accent',
  className = '' 
}) => {
  const sizeClass = sizes[size];
  const colorClass = colors[color];
  const classes = `inline-block ${sizeClass} ${colorClass} ${className}`;

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={classes}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        ⟳
      </motion.div>
    </div>
  );
};

Loading.displayName = 'Loading';

export default Loading; 