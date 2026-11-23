import { cx } from '../cx';
import styles from './Footer.module.css';

export type FooterLink = { label: string; href: string };

export type FooterProps = {
  copyright?: string;
  links?: FooterLink[];
  className?: string;
};

/** Figma: ❖ Components / Layout / Footer (breakpoint = desktop | tablet | mobile) */
export function Footer({
  copyright = '© 2026 Your Name',
  links = [
    { label: 'Imprint', href: '#imprint' },
    { label: 'Contact', href: '#contact' },
  ],
  className,
}: FooterProps) {
  return (
    <footer className={cx('ds-root', className)}>
      <div className={cx('ds-font-body-md-default', styles.content)}>
        <p className={styles.item}>{copyright}</p>
        {links.map((l) => (
          <a key={l.href} className={cx(styles.item, styles.link)} href={l.href}>
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
