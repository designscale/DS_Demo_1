import type { ButtonHTMLAttributes } from 'react';
import menuIcon from '../../assets/icon-menu.svg';
import closeIcon from '../../assets/icon-close.svg';
import { cx } from '../cx';
import styles from './MenuToggle.module.css';

export type MenuToggleProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  /** true shows the close (×) icon, false shows the menu icon. */
  open?: boolean;
};

/**
 * Figma: ❖ Components / Primitives / Menu ("Property 1" = open | close).
 * In Figma, `open` is the hamburger and `close` the ×. In code the prop
 * describes the menu's state instead, which is what screen readers need.
 */
export function MenuToggle({ open = false, className, ...rest }: MenuToggleProps) {
  return (
    <button
      type="button"
      aria-expanded={open}
      aria-label={open ? 'Close menu' : 'Open menu'}
      className={cx(styles.toggle, className)}
      {...rest}
    >
      <img src={open ? closeIcon : menuIcon} width={36} height={29} alt="" />
    </button>
  );
}
