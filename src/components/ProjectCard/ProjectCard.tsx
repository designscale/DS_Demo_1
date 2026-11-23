import type { ReactNode } from 'react';
import placeholder from '../../assets/placeholder.png';
import { cx } from '../cx';
import styles from './ProjectCard.module.css';

export type ProjectCardProps = {
  headline?: string;
  description?: string;
  linkLabel?: string;
  href?: string;
  /** Image for the media slot. Ignored when `media` is passed. */
  imageSrc?: string;
  imageAlt?: string;
  /** Custom content for the media slot (Figma slot "media"). */
  media?: ReactNode;
  /** Figma boolean "hasBg": raised grey background. */
  hasBg?: boolean;
  className?: string;
};

/** Figma: ❖ Components / Section / ProjectCard (breakpoint = desktop | tablet | mobile) */
export function ProjectCard({
  headline = 'Headline',
  description = 'I run moonlearning.io, a hands-on learning platform for UI design, Figma, and AI-powered product building. I cut through the noise and help people move from overthinking to designing and building.',
  linkLabel = 'find out more →',
  href = '#',
  imageSrc = placeholder,
  imageAlt = '',
  media,
  hasBg = true,
  className,
}: ProjectCardProps) {
  return (
    <article className={cx('ds-root', className)}>
      <div className={cx(styles.card, hasBg && styles.raised)}>
        <div className={styles.container}>
          <div className={styles.media}>{media ?? <img src={imageSrc} alt={imageAlt} />}</div>
          <div className={styles.content}>
            <h2 className={cx('ds-font-headline-md', styles.headline)}>{headline}</h2>
            <p className={cx('ds-font-body-md-default', styles.text)}>{description}</p>
            <a className={cx('ds-font-link-md', styles.link)} href={href}>
              {linkLabel}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
