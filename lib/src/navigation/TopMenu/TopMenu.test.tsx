import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import TopMenu from './TopMenu';
import { TopMenuItemProps } from '../TopMenuMobileItem/TopMenuMobileItem.types';

const items = [
  {
    label: 'Home',
    link: '/',
    current: true,
  },
  {
    label: 'About',
    link: '/about',
    current: false,
  },
  {
    label: 'Contact',
    link: '/contact',
    current: false,
  },
];

const CustomElement = ({ label, link, current }: TopMenuItemProps) => {
  return (
    <a href={link} className={`custom-element ${current ? 'active' : ''}`}>
      {label}
    </a>
  );
};

describe('LogoNav', () => {
  test('it should render without crashing', () => {
    render(<TopMenu items={items} />);
    expect(screen.getByRole('menu')).toBeDefined();
  });
  test('it should render the correct number of items', () => {
    render(<TopMenu items={items} />);
    expect(screen.getAllByRole('menuitem')).toHaveLength(3);
  });
  test('it should have the sym top menu class', () => {
    render(<TopMenu items={items} />);
    const menu = screen.getByRole('menu');

    expect(menu.className).includes('sym-top-menu');
  });

  test('it should allow a custom class', () => {
    render(<TopMenu items={items} className="testMenu" />);
    const menu = screen.getByRole('menu');

    expect(menu.className).includes('testMenu');
  });

  test('it should allow a custom menu item element', () => {
    render(<TopMenu items={items} element={CustomElement} />);
    const menu = screen.getByRole('menu');

    expect(menu.children).toHaveLength(3);
    expect(menu.children[0].className).includes('custom-element');
  });
});
