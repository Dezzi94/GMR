import React, { ElementType } from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface CommonButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButtonProps extends CommonButtonProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonButtonProps> {
  as?: 'button';
}

interface ButtonAsLinkProps extends CommonButtonProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonButtonProps | 'href'> {
  as: 'a';
  href: string;
}

interface ButtonAsRouterLinkProps extends CommonButtonProps, Omit<LinkProps, keyof CommonButtonProps | 'to'> {
  as: ElementType;
  to: string;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps | ButtonAsRouterLinkProps;

const variants = {
  primary: 'bg-accent text-white hover:bg-accent-hover',
  secondary: 'bg-white text-accent border-2 border-accent hover:bg-accent hover:text-white',
  outline: 'bg-transparent text-accent border-2 border-accent hover:bg-accent hover:text-white'
};

const sizes = {
  small: 'px-4 py-2 text-sm',
  medium: 'px-6 py-3',
  large: 'px-8 py-4 text-lg'
};

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>((props, ref) => {
  const {
    variant = 'primary',
    size = 'medium',
    isLoading = false,
    className = '',
    children,
    ...rest
  } = props;

  const baseClasses = 'btn';
  const variantClasses = variants[variant];
  const sizeClasses = sizes[size];
  const classes = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`;

  const loadingSpinner = (
    <span className="inline-block animate-spin">⟳</span>
  );

  if ('to' in rest && rest.as === Link) {
    const { as: _, ...linkProps } = rest;
    return React.createElement(Link, {
      ...linkProps,
      className: classes,
      children: isLoading ? loadingSpinner : children
    });
  }

  if ('href' in rest && rest.as === 'a') {
    const { as: _, ...anchorProps } = rest;
    return React.createElement('a', {
      ...anchorProps,
      className: classes,
      ref: ref as React.Ref<HTMLAnchorElement>,
      children: isLoading ? loadingSpinner : children
    });
  }

  const { as: _, ...buttonProps } = rest;
  return React.createElement('button', {
    ...buttonProps,
    className: classes,
    ref: ref as React.Ref<HTMLButtonElement>,
    disabled: isLoading,
    children: isLoading ? loadingSpinner : children
  });
}) as React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>>;

Button.displayName = 'Button';

export default Button; 