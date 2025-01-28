declare module 'framer-motion' {
  import { ElementType, ReactNode, HTMLAttributes, RefAttributes, RefObject } from 'react';

  export interface MotionVariant {
    [key: string]: any;
  }

  export interface TransitionProps {
    duration?: number;
    ease?: string | number[];
    delay?: number;
    staggerChildren?: number;
    loop?: number | boolean | "Infinity" | Infinity;
    repeat?: number | "Infinity" | Infinity;
    type?: "tween" | "spring" | "keyframes";
    stiffness?: number;
    damping?: number;
    mass?: number;
  }

  export interface MotionProps {
    initial?: MotionVariant | string | boolean;
    animate?: MotionVariant | string | {
      [key: string]: string | number | number[];
    };
    exit?: MotionVariant | string;
    transition?: TransitionProps;
    whileHover?: MotionVariant;
    whileTap?: MotionVariant;
    whileInView?: MotionVariant | string;
    viewport?: { 
      once?: boolean; 
      margin?: string; 
      amount?: number | "some" | "all";
      root?: RefObject<Element>;
    };
    variants?: {
      [key: string]: MotionVariant & {
        transition?: TransitionProps;
      };
    };
    key?: string | number;
    style?: any;
    transformTemplate?: (transform: string, generatedTransform: string) => string;
    transformOrigin?: string;
    layoutId?: string;
  }

  type HTMLMotionComponents = {
    [K in keyof JSX.IntrinsicElements]: ElementType<JSX.IntrinsicElements[K] & MotionProps & RefAttributes<HTMLElement>>;
  };

  export interface Motion extends HTMLMotionComponents {
    div: ElementType<HTMLAttributes<HTMLDivElement> & MotionProps & RefAttributes<HTMLDivElement>>;
    span: ElementType<HTMLAttributes<HTMLSpanElement> & MotionProps & RefAttributes<HTMLSpanElement>>;
    h1: ElementType<HTMLAttributes<HTMLHeadingElement> & MotionProps & RefAttributes<HTMLHeadingElement>>;
    h2: ElementType<HTMLAttributes<HTMLHeadingElement> & MotionProps & RefAttributes<HTMLHeadingElement>>;
    h3: ElementType<HTMLAttributes<HTMLHeadingElement> & MotionProps & RefAttributes<HTMLHeadingElement>>;
    p: ElementType<HTMLAttributes<HTMLParagraphElement> & MotionProps & RefAttributes<HTMLParagraphElement>>;
    img: ElementType<HTMLAttributes<HTMLImageElement> & MotionProps & RefAttributes<HTMLImageElement>>;
    a: ElementType<HTMLAttributes<HTMLAnchorElement> & MotionProps & RefAttributes<HTMLAnchorElement>>;
    li: ElementType<HTMLAttributes<HTMLLIElement> & MotionProps & RefAttributes<HTMLLIElement>>;
  }

  export interface AnimatePresenceProps {
    children?: ReactNode;
    mode?: 'sync' | 'wait' | 'popLayout';
    initial?: boolean;
    onExitComplete?: () => void;
  }

  export interface UseInViewOptions {
    root?: RefObject<Element> | null;
    margin?: string;
    amount?: "some" | "all" | number;
    once?: boolean;
  }

  export type UseInViewHook = {
    (ref: RefObject<Element>, options?: UseInViewOptions): boolean;
    (options?: UseInViewOptions): [RefObject<Element>, boolean];
  };

  export const useInView: UseInViewHook;
  export const motion: Motion;
  export const AnimatePresence: ElementType<AnimatePresenceProps>;
} 