import * as React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const sizes = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-[90rem]',
  full: 'w-full'
};

const Container = ({
  children,
  className = '',
  size = 'lg'
}: ContainerProps): JSX.Element => {
  const containerClasses = `mx-auto px-4 sm:px-6 lg:px-8 ${sizes[size]} ${className}`;

  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
};

export default Container; 