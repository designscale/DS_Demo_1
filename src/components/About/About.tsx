import type { ReactNode } from 'react';
import placeholder from '../../assets/placeholder.png';
import { Button } from '../Button/Button';
import { cx } from '../cx';
import styles from './About.module.css';

export type AboutProps = {
  headline?: string;
  description?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  /** Figma boolean "hadButton" */
  showButton?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  /** Custom content for the media slot (Figma slot "media"). */
  media?: ReactNode;
  className?: string;
};

/** Figma: ❖ Components / Section / About (breakpoint = desktop | tablet | mobile) */
export function About({
  headline = 'Headline',
  description = "Welcome to my portfolio! I'm Kim, a passionate graphic UI designer dedicated to crafting visual experiences that resonate with users. My goal is to design interfaces that not only grab attention but also facilitate smooth navigation. I carefully select colour palettes that evoke the right emotions and typography that enhances clarity. I believe that intuitive design is key to guiding users effortlessly on their journey.",
  ctaLabel = 'Contact',
  onCtaClick,
  showButton = true,
  imageSrc = placeholder,
  imageAlt = '',
  media,
  className,
}: AboutProps) {
  return (
    <section className={cx('ds-root', className)}>
      <div className={styles.about}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={cx('ds-font-headline-lg', styles.headline)}>{headline}</h2>
            <p className={cx('ds-font-body-md-default', styles.text)}>{description}</p>
            {showButton && (
              <Button variant="secondary" className={styles.button} onClick={onCtaClick}>
                {ctaLabel}
              </Button>
            )}
          </div>
          <div className={styles.media}>{media ?? <img src={imageSrc} alt={imageAlt} />}</div>
        </div>
      </div>
    </section>
  );
}
