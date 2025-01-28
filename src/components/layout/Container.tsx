import React, { ElementType } from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const sizes = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-[1400px]',
  full: 'max-w-full',
};

export const Container = ({
  children,
  className = '',
  as: Component = 'div',
  size = 'lg',
}: ContainerProps) => {
  return (
    <Component
      className={`
        mx-auto px-4 sm:px-6 lg:px-8
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </Component>
  );
}; 