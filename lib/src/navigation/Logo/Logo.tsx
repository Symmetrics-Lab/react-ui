import clsx from 'clsx';
import { LogoProps } from './Logo.types';

export default function Logo(props: LogoProps) {
  const { className, src, alt, srcMobile, altMobile, classNameMobile, href, title } = props;
  const classesLg = clsx('sym-logo-lg', className);
  const classesSm = clsx('sym-logo-sm', classNameMobile);
  return (
    <>
      <a className={classesSm} href={href || '/'} title={title}>
        <img
          className="block h-8 w-auto lg:hidden"
          src={srcMobile || src}
          alt={altMobile || alt || 'Logo'}
        />
      </a>
      <a className={classesLg} href={href || '/'} title={title}>
        <img className="hidden h-8 w-auto lg:block" src={src} alt={alt ?? 'Logo'} />
      </a>
    </>
  );
}
