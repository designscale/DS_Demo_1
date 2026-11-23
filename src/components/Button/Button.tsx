import type { ButtonHTMLAttributes } from 'react';
import { cx } from '../cx';
import styles from './Button.module.css';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Figma variant */
  variant?: 'primary' | 'secondary';
  /** Stretch to the parent's width (used by About on mobile). */
  fullWidth?: boolean;
  /**
   * Pin a visual state for documentation. In real use leave this unset:
   * hover / active / focus come from the browser.
   */
  forceState?: 'hover' | 'active' | 'focused';
};

/** Figma: ❖ Components / Primitives / Button (variant × state) */
export function Button({ variant = 'primary', fullWidth, forceState, className, type = 'button', children = 'Label', ...rest }: ButtonProps) {
  return (
    <button
      type={type}
      className={cx('ds-font-button-md', styles.button, styles[variant], fullWidth && styles.fullWidth, className)}
      data-state={forceState}
      {...rest}
    >
      {children}
    </button>
  );
}
