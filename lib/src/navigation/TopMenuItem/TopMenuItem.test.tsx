import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import TopMenuItem from './TopMenuItem';

describe('TopMenuItem', () => {
  test('it should render without crashing', () => {
    render(<TopMenuItem label="Testing" link="/testing" current />);
    expect(screen.getByRole('menuitem')).toBeDefined();
  });

  test('it should have a href attribute', () => {
    render(<TopMenuItem label="Testing" link="/testing" current />);
    expect(screen.getByRole('menuitem').getAttribute('href')).toBe('/testing');
  });

  test('it should have a label', () => {
    render(<TopMenuItem label="Testing" link="/testing" current />);
    expect(screen.getByRole('menuitem').innerHTML).toBe('Testing');
  });

  test('it should have a have a current class', () => {
    render(<TopMenuItem label="Testing" link="/testing" current />);
    expect(screen.getByRole('menuitem').className).includes('sym-top-menu-item__current');
  });
});
