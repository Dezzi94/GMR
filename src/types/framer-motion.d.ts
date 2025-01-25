declare module 'framer-motion' {
  import { ElementType, ReactNode, HTMLAttributes, RefAttributes, RefObject } from 'react';

  export interface MotionVariant {
    [key: string]: any;
  }

  export interface MotionProps {
    initial?: MotionVariant | string;
    animate?: MotionVariant | string;
    exit?: MotionVariant | string;
    transition?: {
      duration?: number;
      ease?: string | number[];
      delay?: number;
      staggerChildren?: number;
    };
    whileHover?: MotionVariant;
    whileTap?: MotionVariant;
    whileInView?: MotionVariant | string;
    viewport?: { once?: boolean; margin?: string; amount?: number | "some" | "all"; };
    variants?: MotionVariant;
    key?: string | number;
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