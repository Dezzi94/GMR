declare module 'framer-motion' {
  import { ComponentType, ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';

  export interface MotionVariant {
    [key: string]: {
      [key: string]: string | number | boolean | object;
    };
  }

  export interface MotionProps {
    initial?: boolean | object | string;
    animate?: object | string;
    exit?: object | string;
    variants?: MotionVariant | {
      [key: string]: {
        [key: string]: string | number | boolean | object;
      };
    };
    transition?: {
      duration?: number;
      ease?: string | number[];
      loop?: boolean | number;
      repeat?: number;
      delay?: number;
      stiffness?: number;
      damping?: number;
      mass?: number;
      type?: string;
    };
    whileHover?: object | string;
    whileTap?: object | string;
    whileInView?: object | string;
    viewport?: {
      once?: boolean;
      amount?: number | "some" | "all";
      margin?: string;
    };
    style?: React.CSSProperties;
    className?: string;
    onAnimationStart?: () => void;
    onAnimationComplete?: () => void;
  }

  export interface AnimatePresenceProps {
    children?: React.ReactNode;
    mode?: "sync" | "wait" | "popLayout";
    initial?: boolean;
    onExitComplete?: () => void;
  }

  export type MotionComponent<T extends keyof HTMLElementTagNameMap> = ForwardRefExoticComponent<
    HTMLAttributes<HTMLElementTagNameMap[T]> &
    MotionProps &
    RefAttributes<HTMLElementTagNameMap[T]>
  >;

  export interface Motion {
    div: MotionComponent<'div'>;
    span: MotionComponent<'span'>;
    h1: MotionComponent<'h1'>;
    h2: MotionComponent<'h2'>;
    h3: MotionComponent<'h3'>;
    h4: MotionComponent<'h4'>;
    h5: MotionComponent<'h5'>;
    h6: MotionComponent<'h6'>;
    p: MotionComponent<'p'>;
    a: MotionComponent<'a'>;
    button: MotionComponent<'button'>;
    [key: string]: MotionComponent<'div'>;
  }

  export const motion: Motion;
  export const AnimatePresence: ComponentType<AnimatePresenceProps>;

  export interface UseInViewOptions {
    once?: boolean;
    amount?: number | "some" | "all";
    margin?: string;
  }

  export function useInView(ref: React.RefObject<Element>, options?: UseInViewOptions): boolean;
} 