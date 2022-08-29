import { ButtonProps } from './Button.types';

const xsClass = 'px-2.5 py-1.5 text-xs font-medium rounded';
const smClass = 'px-3 py-2 text-sm leading-4 font-medium rounded';
const mdClass = 'px-4 py-2 text-sm font-medium rounded-md';
const lgClass = 'px-4 py-2 text-base font-medium rounded-md';
const xlClass = 'px-6 py-3 border text-base rounded-md';
const primaryColor = 'text-primaryText bg-primary-600 hover:bg-primary-700  focus:ring-primary-500';
const secondaryColor =
  'text-primary-700 bg-primary-100 hover:bg-primary-200 focus:ring-primary-500';
const outlineColor = 'text-gray-700 bg-white hover:bg-gray-50 focus:ring-primary-500';

export const getSizeClass = (size: ButtonProps['size']) => {
  switch (size) {
    case 'xs':
      return xsClass;
    case 'sm':
      return smClass;
    case 'md':
      return mdClass;
    case 'lg':
      return lgClass;
    case 'xl':
      return xlClass;
    default:
      return mdClass;
  }
};

export const getVarianTheme = (variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'primary':
      return primaryColor;
    case 'secondary':
      return secondaryColor;
    case 'outline':
      return outlineColor;
    default:
      return primaryColor;
  }
};

export const getIconClass = (
  size: ButtonProps['size'],
  iconPosition: ButtonProps['iconPosition']
) => {
  if (iconPosition === 'left') {
    switch (size) {
      case 'xs':
      case 'sm':
        return 'sym-btn-icon-left -ml-0.5 mr-2 h-4 w-4';
      case 'md':
        return 'sym-btn-icon-left -ml-1 mr-2 h-5 w-5';
      case 'lg':
        return 'sym-btn-icon-left -ml-1 mr-3 h-5 w-5';
      case 'xl':
        return 'sym-btn-icon-left -ml-1 mr-3 h-5 w-5';
      default:
        return 'sym-btn-icon-left -ml-1 mr-2 h-5 w-5';
    }
  }
  switch (size) {
    case 'xs':
    case 'sm':
      return 'sym-btn-icon-right ml-2 -mr-0.5 h-4 w-4';
    case 'md':
      return 'sym-btn-icon-right ml-2 -mr-1 h-5 w-5';
    case 'lg':
      return 'sym-btn-icon-right ml-3 -mr-1 h-5 w-5';
    case 'xl':
      return 'sym-btn-icon-right ml-3 -mr-1 h-5 w-5';
    default:
      return 'sym-btn-icon-right ml-2 -mr-1 h-5 w-5';
  }
};
