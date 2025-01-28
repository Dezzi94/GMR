import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const sizes = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-[1400px]',
  full: 'max-w-full',
};

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(({
  children,
  className = '',
  size = 'lg',
}, ref) => {
  const containerClasses = `mx-auto px-4 sm:px-6 lg:px-8 ${sizes[size]} ${className}`;

  return (
    <div ref={ref} className={containerClasses}>
      {children}
    </div>
  );
});

Container.displayName = 'Container';

export default Container; 