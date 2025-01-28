import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME } from '../../constants';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const sizes = {
  sm: 'w-24',
  md: 'w-32',
  lg: 'w-40'
};

const textColors = {
  light: 'text-white',
  dark: 'text-primary'
};

const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showText = true,
  className = ''
}) => {
  const sizeClass = sizes[size];
  const textColorClass = textColors[variant];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    target.onerror = null;
    target.src = '/assets/images/logo-fallback.png';
  };

  return (
    <Link 
      to="/" 
      className={`flex items-center space-x-2 focus-ring rounded-md ${className}`}
      aria-label={`${COMPANY_NAME} logo`}
    >
      <img
        src="/assets/images/logo.png"
        alt={COMPANY_NAME}
        className={`
          ${sizeClass} 
          h-auto 
          ${variant === 'light' ? 'brightness-0 invert' : ''}
          transition-all 
          duration-200
        `}
        onError={handleImageError}
      />
      {showText && (
        <span className={`font-heading font-bold text-xl ${textColorClass}`}>
          {COMPANY_NAME}
        </span>
      )}
    </Link>
  );
};

Logo.displayName = 'Logo';

export default Logo; 