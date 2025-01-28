import 'react';
import 'react-router-dom';

declare module 'react' {
  export type ReactFragment = Record<string, never> | ReactNodeArray;
  export type ReactNodeArray = Array<ReactNode>;
  
  export interface ReactPortal {
    children?: ReactNode;
    key: null | string;
    type: string;
  }

  export type ReactNode = 
    | ReactChild
    | ReactFragment
    | ReactPortal
    | boolean
    | null
    | undefined;

  export type JSXElementConstructor<P> = ((props: P) => ReactElement<unknown, unknown>) | (new (props: P) => Component<unknown, unknown>);

  export interface DOMAttributes<T> {
    children?: ReactNode;
    dangerouslySetInnerHTML?: { __html: string };
    onCopy?: ReactEventHandler<T>;
    onCut?: ReactEventHandler<T>;
    onPaste?: ReactEventHandler<T>;
    onCompositionEnd?: ReactEventHandler<T>;
    onCompositionStart?: ReactEventHandler<T>;
    onCompositionUpdate?: ReactEventHandler<T>;
    onFocus?: ReactEventHandler<T>;
    onBlur?: ReactEventHandler<T>;
    onChange?: ReactEventHandler<T>;
    onInput?: ReactEventHandler<T>;
    onSubmit?: ReactEventHandler<T>;
    onReset?: ReactEventHandler<T>;
    onClick?: ReactEventHandler<T>;
    onContextMenu?: ReactEventHandler<T>;
    onDoubleClick?: ReactEventHandler<T>;
    onDrag?: ReactEventHandler<T>;
    onDragEnd?: ReactEventHandler<T>;
    onDragEnter?: ReactEventHandler<T>;
    onDragExit?: ReactEventHandler<T>;
    onDragLeave?: ReactEventHandler<T>;
    onDragOver?: ReactEventHandler<T>;
    onDragStart?: ReactEventHandler<T>;
    onDrop?: ReactEventHandler<T>;
    onMouseDown?: ReactEventHandler<T>;
    onMouseEnter?: ReactEventHandler<T>;
    onMouseLeave?: ReactEventHandler<T>;
    onMouseMove?: ReactEventHandler<T>;
    onMouseOut?: ReactEventHandler<T>;
    onMouseOver?: ReactEventHandler<T>;
    onMouseUp?: ReactEventHandler<T>;
    onSelect?: ReactEventHandler<T>;
    onTouchCancel?: ReactEventHandler<T>;
    onTouchEnd?: ReactEventHandler<T>;
    onTouchMove?: ReactEventHandler<T>;
    onTouchStart?: ReactEventHandler<T>;
    onScroll?: ReactEventHandler<T>;
    onWheel?: ReactEventHandler<T>;
    onKeyDown?: ReactEventHandler<T>;
    onKeyPress?: ReactEventHandler<T>;
    onKeyUp?: ReactEventHandler<T>;
  }

  export interface HTMLAttributes<T> extends DOMAttributes<T> {
    accessKey?: string;
    className?: string;
    contentEditable?: boolean | "inherit";
    contextMenu?: string;
    dir?: string;
    draggable?: boolean;
    hidden?: boolean;
    id?: string;
    lang?: string;
    placeholder?: string;
    slot?: string;
    spellCheck?: boolean;
    style?: CSSProperties;
    tabIndex?: number;
    title?: string;
    translate?: 'yes' | 'no';
  }

  export interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
    autoFocus?: boolean;
    disabled?: boolean;
    form?: string;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    name?: string;
    type?: 'submit' | 'reset' | 'button';
    value?: string | ReadonlyArray<string> | number;
  }

  export interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
    download?: any;
    href?: string;
    hrefLang?: string;
    media?: string;
    ping?: string;
    rel?: string;
    target?: string;
    type?: string;
    referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url';
  }

  export interface AriaAttributes {
    'aria-activedescendant'?: string;
    'aria-atomic'?: boolean | 'false' | 'true';
    'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both';
    'aria-busy'?: boolean | 'false' | 'true';
    'aria-checked'?: boolean | 'false' | 'mixed' | 'true';
    'aria-colcount'?: number;
    'aria-colindex'?: number;
    'aria-colspan'?: number;
    'aria-controls'?: string;
    'aria-current'?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time';
    'aria-describedby'?: string;
    'aria-details'?: string;
    'aria-disabled'?: boolean | 'false' | 'true';
    'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup';
    'aria-errormessage'?: string;
    'aria-expanded'?: boolean | 'false' | 'true';
    'aria-flowto'?: string;
    'aria-grabbed'?: boolean | 'false' | 'true';
    'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
    'aria-hidden'?: boolean | 'false' | 'true';
    'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling';
    'aria-keyshortcuts'?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-level'?: number;
    'aria-live'?: 'off' | 'assertive' | 'polite';
    'aria-modal'?: boolean | 'false' | 'true';
    'aria-multiline'?: boolean | 'false' | 'true';
    'aria-multiselectable'?: boolean | 'false' | 'true';
    'aria-orientation'?: 'horizontal' | 'vertical';
    'aria-owns'?: string;
    'aria-placeholder'?: string;
    'aria-posinset'?: number;
    'aria-pressed'?: boolean | 'false' | 'mixed' | 'true';
    'aria-readonly'?: boolean | 'false' | 'true';
    'aria-relevant'?: 'additions' | 'additions removals' | 'additions text' | 'all' | 'removals' | 'removals additions' | 'removals text' | 'text' | 'text additions' | 'text removals';
    'aria-required'?: boolean | 'false' | 'true';
    'aria-roledescription'?: string;
    'aria-rowcount'?: number;
    'aria-rowindex'?: number;
    'aria-rowspan'?: number;
    'aria-selected'?: boolean | 'false' | 'true';
    'aria-setsize'?: number;
    'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other';
    'aria-valuemax'?: number;
    'aria-valuemin'?: number;
    'aria-valuenow'?: number;
    'aria-valuetext'?: string;
  }

  export interface CSSProperties {
    [key: string]: string | number | undefined;
  }

  export type ElementType<P = unknown> = 
    | keyof JSX.IntrinsicElements 
    | ComponentType<P>
    | ForwardRefExoticComponent<P & RefAttributes<unknown>>;

  export type ComponentType<P = Record<string, never>> = ComponentClass<P> | FC<P>;

  export interface ComponentClass<P = Record<string, never>, S = ComponentState> extends StaticLifecycle<P, S> {
    new (props: P, context?: unknown): Component<P, S>;
    propTypes?: WeakValidationMap<P>;
    contextType?: Context<unknown>;
    contextTypes?: ValidationMap<unknown>;
    childContextTypes?: ValidationMap<unknown>;
    defaultProps?: Partial<P>;
    displayName?: string;
  }

  export interface FunctionComponent<P = Record<string, never>> {
    (props: PropsWithChildren<P>, context?: unknown): ReactElement<unknown, unknown> | null;
    propTypes?: WeakValidationMap<P>;
    contextTypes?: ValidationMap<unknown>;
    defaultProps?: Partial<P>;
    displayName?: string;
  }

  export type FC<P = Record<string, never>> = FunctionComponent<P>;

  export type PropsWithChildren<P> = P & { children?: ReactNode };

  export type ValidationMap<T> = { [K in keyof T]?: Validator<T[K]> };
  export type WeakValidationMap<T> = { [K in keyof T]?: WeakValidator<T[K]> };
  export type Validator<T> = PropTypes.Validator<T>;
  export type WeakValidator<T> = PropTypes.Requireable<T>;

  export const useState: <T>(initialState: T | (() => T)) => [T, (newState: T | ((prevState: T) => T)) => void];
  export const useEffect: (effect: () => void | (() => void), deps?: ReadonlyArray<any>) => void;
  export const useRef: <T>(initialValue: T | null) => { current: T | null };
  export const createElement: typeof React.createElement;
  export const Fragment: typeof React.Fragment;
  export const StrictMode: typeof React.StrictMode;
  export const forwardRef: typeof React.forwardRef;
  export type ForwardRefExoticComponent<P> = React.ForwardRefExoticComponent<P>;
  export type RefAttributes<T> = React.RefAttributes<T>;
  export type Ref<T> = React.Ref<T>;
  export type ChangeEvent<T> = React.ChangeEvent<T>;
  export type FormEvent<T = Element> = React.FormEvent<T>;
  export type MouseEvent<T = Element> = React.MouseEvent<T>;
}

declare global {
  namespace JSX {
    type Element = React.ReactElement<unknown, unknown>
    interface ElementClass extends React.Component<unknown> {
      render(): React.ReactNode;
    }
    interface ElementAttributesProperty { props: Record<string, unknown>; }
    interface ElementChildrenAttribute { children: Record<string, unknown>; }
    interface IntrinsicElements {
      [elemName: string]: Record<string, unknown>;
    }
  }
}

declare module 'react-router-dom' {
  import { ComponentType, ReactNode, ForwardRefExoticComponent, RefAttributes } from 'react';

  export interface LinkProps extends RefAttributes<HTMLAnchorElement> {
    to: string;
    replace?: boolean;
    state?: any;
    className?: string;
    children?: ReactNode;
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
} 