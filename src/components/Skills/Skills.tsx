import { SkillItem, type SkillItemProps } from '../SkillItem/SkillItem';
import { cx } from '../cx';
import styles from './Skills.module.css';

export type SkillsProps = {
  title?: string;
  items?: Pick<SkillItemProps, 'headline' | 'content'>[];
  className?: string;
};

const defaultItems = [{}, {}, {}];

/** Figma: ❖ Components / Section / Skills (breakpoint = desktop | tablet | mobile) */
export function Skills({ title = 'Skills', items = defaultItems, className }: SkillsProps) {
  return (
    <section className={cx('ds-root', className)}>
      <div className={styles.skills}>
        <div className={styles.container}>
          <h2 className={cx('ds-font-headline-lg', styles.title)}>{title}</h2>
          <div className={styles.group}>
            {items.map((item, i) => (
              <SkillItem key={i} className={styles.item} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
