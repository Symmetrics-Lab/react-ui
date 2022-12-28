import clsx from 'clsx';
import { TimelineProps } from './Timeline.types';
const baseClass = 'relative border-l border-gray-200 dark:border-gray-700 my-10 mx-5';

export default function Timeline(props: TimelineProps) {
  const { id, className, items, icon } = props;

  return (
    <ol id={id} className={clsx(baseClass, className)}>
      {items &&
        items.map((item, index) => (
          <li key={index} className="mb-10 ml-4">
            {(!item.icon && !icon) ? (
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            ):(item.icon || icon)}
            <section className="flex flex-row">
              <label className="mb-1 flex-1 justify-end text-base font-normal leading-none text-gray-600 dark:text-gray-300 text-start">
                {item.title}
              </label>
              <label className="mb-1 flex justify-end text-xs font-normal leading-none text-gray-600 dark:text-gray-300 text-end">
                {item.date}
              </label>
            </section>
            <p className="mb-4 text-sm font-normal text-gray-400 dark:text-gray-400">
              {item.description}
            </p>
          </li>
        ))}
    </ol>
  );
}
