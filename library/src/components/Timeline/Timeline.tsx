import clsx from 'clsx';
import { TimelineProps } from './Timeline.types';
const baseClass = 'relative border-l border-sym-timeline-line dark:border-sym-timeline-line-dark my-10 mx-5';

export default function Timeline(props: TimelineProps) {
  const { id, className, items, icon } = props;

  return (
    <ol id={id} className={clsx(baseClass, className)}>
      {items &&
        items.map((item, index) => (
          <li key={index} className="mb-10 ml-4">
            {(!item.icon && !icon) ? (
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-sym-timeline-icon dark:border-sym-timeline-icon-dark dark:bg-sym-timeline-icon-bg-dark bg-sym-timeline-icon-bg"></div>
            ):(item.icon || icon)}
            <section className="flex flex-row">
              <label className="mb-1 flex-1 justify-end text-base font-normal leading-none text-sym-timeline-title dark:text-sym-timeline-title-dark text-start">
                {item.title}
              </label>
              <label className="mb-1 flex justify-end text-xs font-normal leading-none text-sym-timeline-date dark:text-sym-timeline-date-dark text-end">
                {item.date}
              </label>
            </section>
            <p className="mb-4 text-sm font-normal text-sym-timeline-desc dark:text-sym-timeline-desc-dark">
              {item.description}
            </p>
          </li>
        ))}
    </ol>
  );
}
