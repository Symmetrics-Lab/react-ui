import { describe, expect, test } from 'vitest';

import { getSizeClass, getVarianTheme, getIconClass } from './utils';

const xsClass = 'px-2.5 py-1.5 text-xs font-medium rounded';
const smClass = 'px-3 py-2 text-sm leading-4 font-medium rounded';
const mdClass = 'px-4 py-2 text-sm font-medium rounded-md';
const lgClass = 'px-4 py-2 text-base font-medium rounded-md';
const xlClass = 'px-6 py-3 border text-base rounded-md';
const primaryColor = 'text-primaryText bg-primary-600 hover:bg-primary-700  focus:ring-primary-500';
const secondaryColor =
  'text-primary-700 bg-primary-100 hover:bg-primary-200 focus:ring-primary-500';
const outlineColor = 'text-gray-700 bg-white hover:bg-gray-50 focus:ring-primary-500';

// Test the utils.ts file
describe('getSizeClass', () => {
  test('should return the correct class for xs', () => {
    expect(getSizeClass('xs')).toEqual(xsClass);
  });
  test('should return the correct class for sm', () => {
    expect(getSizeClass('sm')).toEqual(smClass);
  });
  test('should return the correct class for md', () => {
    expect(getSizeClass('md')).toEqual(mdClass);
  });
  test('should return the correct class for lg', () => {
    expect(getSizeClass('lg')).toEqual(lgClass);
  });
  test('should return the correct class for xl', () => {
    expect(getSizeClass('xl')).toEqual(xlClass);
  });
});

// Test getVarianTheme function
describe('getVarianTheme', () => {
  test('should return the correct class for primary', () => {
    expect(getVarianTheme('primary')).toEqual(primaryColor);
  });
  test('should return the correct class for secondary', () => {
    expect(getVarianTheme('secondary')).toEqual(secondaryColor);
  });
  test('should return the correct class for outline', () => {
    expect(getVarianTheme('outline')).toEqual(outlineColor);
  });
});

// Test getIconClass function
describe('getIconClass', () => {
  test('should return the correct class for left icon', () => {
    expect(getIconClass('xs', 'left')).includes('sym-btn-icon-left');
  });
  test('should return the correct class for left icon size xs', () => {
    expect(getIconClass('xs', 'left')).toEqual('sym-btn-icon-left -ml-0.5 mr-2 h-4 w-4');
  });
  test('should return the correct class for right icon size xs', () => {
    expect(getIconClass('xs', 'right')).toEqual('sym-btn-icon-right ml-2 -mr-0.5 h-4 w-4');
  });
  test('should return the correct class for left icon size sm', () => {
    expect(getIconClass('sm', 'left')).toEqual('sym-btn-icon-left -ml-0.5 mr-2 h-4 w-4');
  });
  test('should return the correct class for right icon size sm', () => {
    expect(getIconClass('sm', 'right')).toEqual('sym-btn-icon-right ml-2 -mr-0.5 h-4 w-4');
  });
  test('should return the correct class for left icon size md', () => {
    expect(getIconClass('md', 'left')).toEqual('sym-btn-icon-left -ml-1 mr-2 h-5 w-5');
  });
  test('should return the correct class for right icon size md', () => {
    expect(getIconClass('md', 'right')).toEqual('sym-btn-icon-right ml-2 -mr-1 h-5 w-5');
  });
  test('should return the correct class for left icon size lg', () => {
    expect(getIconClass('lg', 'left')).toEqual('sym-btn-icon-left -ml-1 mr-3 h-5 w-5');
  });
  test('should return the correct class for right icon size lg', () => {
    expect(getIconClass('lg', 'right')).toEqual('sym-btn-icon-right ml-3 -mr-1 h-5 w-5');
  });
  test('should return the correct class for left icon size xl', () => {
    expect(getIconClass('xl', 'left')).toEqual('sym-btn-icon-left -ml-1 mr-3 h-5 w-5');
  });
  test('should return the correct class for right icon size xl', () => {
    expect(getIconClass('xl', 'right')).toEqual('sym-btn-icon-right ml-3 -mr-1 h-5 w-5');
  });
});
