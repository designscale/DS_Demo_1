import { useState } from 'react';
import { Button } from '../Button/Button';
import { Logo } from '../Logo/Logo';
import { MenuToggle } from '../MenuToggle/MenuToggle';
import { cx } from '../cx';
import styles from './Navigation.module.css';

export type NavLink = { label: string; href: string };

export type NavigationProps = {
  links?: NavLink[];
  ctaLabel?: string;
  onCtaClick?: () => void;
  logoHref?: string;
  /** Start with the mobile menu expanded (useful for docs). */
  defaultMenuOpen?: boolean;
  className?: string;
};

const defaultLinks: NavLink[] = [
  { label: 'about.', href: '#about' },
  { label: 'work.', href: '#work' },
  { label: 'blog.', href: '#blog' },
];

/**
 * Figma: ❖ Components / Layout / Navigation (breakpoint = desktop | tablet | mobile).
 * One responsive component: links + CTA from 800px up, a menu toggle below.
 */
export function Navigation({ links = defaultLinks, ctaLabel = 'Contact', onCtaClick, logoHref = '#', defaultMenuOpen = false, className }: NavigationProps) {
  const [open, setOpen] = useState(defaultMenuOpen);
  return (
    <header className={cx('ds-root', className)}>
      <nav className={styles.nav} aria-label="Main">
        <Logo href={logoHref} />
        <div className={styles.items}>
          <ul className={styles.links}>
            {links.map((l) => (
              <li key={l.href}>
                <a className={cx('ds-font-navigation-md', styles.link)} href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Button onClick={onCtaClick}>{ctaLabel}</Button>
        </div>
        <MenuToggle className={styles.toggle} open={open} onClick={() => setOpen((o) => !o)} aria-controls="ds-mobile-menu" />
      </nav>
      {open && (
        <div id="ds-mobile-menu" className={styles.mobileMenu}>
          <ul className={styles.mobileLinks}>
            {links.map((l) => (
              <li key={l.href}>
                <a className={cx('ds-font-navigation-md', styles.link)} href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Button fullWidth onClick={onCtaClick}>
            {ctaLabel}
          </Button>
        </div>
      )}
    </header>
  );
}
