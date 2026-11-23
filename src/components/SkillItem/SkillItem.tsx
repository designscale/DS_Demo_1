import { cx } from '../cx';
import styles from './SkillItem.module.css';

export type SkillItemProps = {
  headline?: string;
  content?: string;
  className?: string;
};

/** Figma: ❖ Components / Section / SkillItem */
export function SkillItem({
  headline = 'Headline',
  content = 'A basic understanding of HTML and CSS helps me align design with the code effectively throughout the handoff.',
  className,
}: SkillItemProps) {
  return (
    <div className={cx(styles.item, className)}>
      <h3 className={cx('ds-font-headline-sm', styles.headline)}>{headline}</h3>
      <p className={cx('ds-font-body-md-default', styles.content)}>{content}</p>
    </div>
  );
}
