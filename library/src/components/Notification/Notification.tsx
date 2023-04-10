import clsx from 'clsx';
import { NotificationProps } from './Notification.types';
import { forwardRef } from 'react';
import NotificationOther from './Notification-other';
import { InformationCircleIcon } from '@heroicons/react/20/solid';
import { prettydate } from './prettydate';
/* eslint-disable @typescript-eslint/no-unused-vars */
const Notification = forwardRef<HTMLAnchorElement, NotificationProps>(function Notification(
  props: NotificationProps,
  ref
) {
  const {
    className,
    data,
    rounded = 'rounded-2xl',
    shadow = false,
    as,
    to,
    onClick,
    ...rest
  } = props;

  const classes = clsx(
    'flex flex-col p-4 bg-sym-layout dark:bg-sym-layout-dark hover:shodow-lg  border-2 border-gray-100 dark:border-sym-border-dark',
    rounded,
    shadow && 'transition-shadow ease-in-out duration-300 hover:shadow-xl',
    className
  );
  const Element = as || NotificationOther;

  const children = (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="rounded-full border flex items-center justify-center w-10 h-10 flex-shrink-0 mx-auto">
          {data?.icon ? (
            data.icon
          ) : (
            <InformationCircleIcon className="text-sym-blue-100 dark:text-sym-blue-10 w-8" />
          )}
        </div>
        <div className="flex flex-col ml-3">
          <div className="font-medium leading-none dark:text-sym-txt-primary-dark text-sym-txt-primary text-sm">
            {data?.title}
          </div>
          <p className="text-sm text-sym-secondary-gray dark:text-sym-secondary-gray-dark leading-none mt-1">
            {data?.description}
          </p>
          <p className="text-xs text-sym-secondary-gray dark:text-sym-secondary-gray-dark leading-none mt-1 flex justify-end">
            {prettydate().format(data?.time || new Date().toISOString())}
          </p>
        </div>
      </div>
    </div>
  );
  return (
    <>
      {to ? (
        <Element
          //style={{ backgroundImage: background }}
          className={classes}
          to={to}
          {...rest}
          onClick={onClick}
        >
          {children}
        </Element>
      ) : (
        <div className={classes} {...rest} onClick={onClick}>
          {children}
        </div>
      )}
    </>
  );
});
export default Notification;
