declare module 'react-router-dom' {
  import { ComponentType, ReactNode, ForwardRefExoticComponent, RefAttributes } from 'react';

  export interface LinkProps extends RefAttributes<HTMLAnchorElement> {
    to: string;
    replace?: boolean;
    state?: any;
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
  }

  export interface RouteProps {
    path?: string;
    element?: ReactNode;
    children?: ReactNode;
  }

  export interface RoutesProps {
    children?: ReactNode;
    location?: Location;
  }

  export const Link: ForwardRefExoticComponent<LinkProps>;
  export const Routes: ComponentType<RoutesProps>;
  export const Route: ComponentType<RouteProps>;
  export const BrowserRouter: ComponentType<{ children?: ReactNode }>;

  export interface NavigateProps {
    to: string;
    replace?: boolean;
    state?: any;
  }

  export const Navigate: ComponentType<NavigateProps>;

  export type NavigateFunction = (
    to: string,
    options?: { replace?: boolean; state?: any }
  ) => void;

  export function useNavigate(): NavigateFunction;
  export function useLocation(): Location;
  export function useParams<T extends { [K in keyof T]?: string } = {}>(): T;
} 