import React from 'react';
import { Link, LinkProps as RouterLinkProps } from 'react-router-dom';

interface CommonButtonProps {
  className?: string;
  size?: 'sm' | 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'outline';
  as?: 'button' | 'a' | typeof Link;
  to?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

type ButtonProps = CommonButtonProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonButtonProps>;
type AnchorProps = CommonButtonProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonButtonProps>;
type LinkProps = CommonButtonProps & RouterLinkProps;

type Props = ButtonProps | AnchorProps | LinkProps;

const sizes = {
  sm: 'px-4 py-2 text-sm',
  small: 'px-4 py-2 text-sm',
  medium: 'px-6 py-3 text-base',
  large: 'px-8 py-4 text-lg'
};

const variants = {
  primary: 'bg-accent hover:bg-accent-dark text-white',
  secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
  outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-white'
};

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>((props, ref) => {
  const {
    className = '',
    size = 'medium',
    variant = 'primary',
    as: Component = 'button',
    type = 'button',
    disabled = false,
    children,
    ...rest
  } = props;

  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed';
  const sizeClasses = sizes[size] || sizes.medium;
  const variantClasses = variants[variant] || variants.primary;
  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  if (Component === Link) {
    const { to, ...linkProps } = rest as LinkProps;
    const safeProps = {
      ...linkProps,
      className: combinedClasses,
      to
    };
    return <Link ref={ref as React.Ref<HTMLAnchorElement>} {...safeProps}>{children}</Link>;
  }

  if (Component === 'a') {
    const { href, target, rel, ...anchorProps } = rest as AnchorProps;
    const safeProps = {
      ...anchorProps,
      className: combinedClasses,
      href,
      target,
      rel
    };
    return <a ref={ref as React.Ref<HTMLAnchorElement>} {...safeProps}>{children}</a>;
  }

  const buttonProps = {
    ...rest as ButtonProps,
    className: combinedClasses,
    type,
    disabled
  };
  return <button ref={ref as React.Ref<HTMLButtonElement>} {...buttonProps}>{children}</button>;
});

Button.displayName = 'Button';

export default Button; 