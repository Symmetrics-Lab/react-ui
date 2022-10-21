import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  test('it should render with an id in string', () => {
    render(<Input id={''} />);
    expect(screen.queryByTestId('1')).toBeDefined();
  });
  test('it should render with type text', () => {
    render(<Input type="text" id={''} />);
    expect(screen.getAllByText('')).toBeDefined();
  });
  test('it should render with type password', () => {
    render(<Input type="password" id={''} />);
    expect(screen.getByDisplayValue('')).toBeDefined();
  });
  test('it should render with type email', () => {
    render(<Input type="email" id={''} />);
    expect(screen.getAllByDisplayValue('')).toBeDefined();
  });
  test('it should render with type number', () => {
    render(<Input type="number" id={''} />);
    expect(screen.getAllByDisplayValue('')).toBeDefined();
  });
  test('it should render with type tel', () => {
    render(<Input type="tel" id={''} />);
    expect(screen.getAllByDisplayValue('')).toBeDefined();
  });
  test('it should render with type url', () => {
    render(<Input type="url" id={''} />);
    expect(screen.getAllByDisplayValue('')).toBeDefined();
  });
});
