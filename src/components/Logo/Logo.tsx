import logoUrl from '../../assets/logo.svg';
import { cx } from '../cx';
import styles from './Logo.module.css';

export type LogoProps = {
  /** Accessible name. Pass an empty string if the logo is decorative. */
  label?: string;
  href?: string;
  className?: string;
};

/** Figma: ❖ Components / Primitives / Logo */
export function Logo({ label = 'Home', href, className }: LogoProps) {
  const img = <img src={logoUrl} width={48} height={48} alt={href ? '' : label} className={styles.img} />;
  return href ? (
    <a href={href} aria-label={label} className={cx(styles.logo, className)}>
      {img}
    </a>
  ) : (
    <span className={cx(styles.logo, className)}>{img}</span>
  );
}
