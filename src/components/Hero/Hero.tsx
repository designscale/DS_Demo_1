import { cx } from '../cx';
import styles from './Hero.module.css';

export type HeroProps = {
  /** Small caption above the headline */
  name?: string;
  /** Use \n for line breaks */
  headline?: string;
  className?: string;
};

/** Figma: ❖ Components / Section / Hero (breakpoint = desktop | tablet | mobile) */
export function Hero({ name = 'James Jones', headline = 'UX. UI.\nAgentic AI.', className }: HeroProps) {
  return (
    <section className={cx('ds-root', className)}>
      <div className={styles.hero}>
        <div className={styles.container}>
          <p className={cx('ds-font-caption-md', styles.name)}>{name}</p>
          <h1 className={cx('ds-font-display-md', styles.headline)}>{headline}</h1>
        </div>
      </div>
    </section>
  );
}
