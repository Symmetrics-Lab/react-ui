import clsx from 'clsx';
import { LoadingProps } from './Loading.types';
const baseLoadingClass =
  'w-full h-full fixed block top-0 left-0 bg-sym-layout opacity-75 dark:bg-sym-layout-dark dark:opacity-90 z-50 flex items-center justify-center';

const Loading: React.FC<LoadingProps> = (props: LoadingProps) => {
  const { className, children, ...rest } = props;
  const classes = clsx(baseLoadingClass, className);
  return (
    <>
      <div id="loading-screen" className={classes} {...rest}>
        {children}
      </div>
    </>
  );
};
export default Loading;
