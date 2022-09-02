import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { EnvelopeIcon } from '@heroicons/react/20/solid';
import Button from './Button';

describe('Button', () => {
  test('it should render without crashing', () => {
    render(<Button text="Hello there" />);
    expect(screen.getByRole('button')).toBeDefined();
  });
  test('it should render with the correct text', () => {
    render(<Button text="Hello there" />);
    expect(screen.getByRole('button').innerHTML).equal('Hello there');
  });
  test('it should have the button type by default', () => {
    render(<Button text="Hello there" />);
    expect(screen.getByRole('button').getAttribute('type')).equal('button');
  });
  test('it should have the submit type', () => {
    render(<Button text="Hello there" type="submit" />);
    expect(screen.getByRole('button').getAttribute('type')).equal('submit');
  });
  test('it should have the reset type', () => {
    render(<Button text="Hello there" type="reset" />);
    expect(screen.getByRole('button').getAttribute('type')).equal('reset');
  });
  test('it should have be disabled', () => {
    render(<Button text="Hello there" disabled />);
    console.log(screen.getByRole('button'));
    expect(screen.getByRole('button').getAttribute('disabled')).equal('');
  });
  test('it should have be disabled with isDisable', () => {
    render(<Button text="Hello there" isDisabled />);
    console.log(screen.getByRole('button'));
    expect(screen.getByRole('button').getAttribute('disabled')).equal('');
  });
  test('it should have a different opacity and hover icon if disabled', () => {
    render(<Button text="Hello there" disabled />);
    expect(screen.getByRole('button').getAttribute('class')).includes(
      'opacity-50 cursor-not-allowed'
    );
  });
  test('it should have a different class if rounded is passed', () => {
    render(<Button text="Hello there" rounded />);
    expect(screen.getByRole('button').getAttribute('class')).includes('rounded-full');
  });
  test('it should have the base class', () => {
    const baseClass =
      'inline-flex items-center  border border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2';
    render(<Button text="Hello there" />);
    expect(screen.getByRole('button').getAttribute('class')).includes(baseClass);
  });
});

describe('Icon', () => {
  test('it should render an icon to the left', () => {
    render(<Button text="Hello there" icon={EnvelopeIcon} iconPosition="left" />);
    expect(screen.getByRole('button').innerHTML).includes('<svg');
    expect(screen.getByRole('button').innerHTML).includes('sym-btn-icon-left');
  });
  test('it should render an icon to the right', () => {
    render(<Button text="Hello there" icon={EnvelopeIcon} iconPosition="right" />);
    expect(screen.getByRole('button').innerHTML).includes('<svg');

    expect(screen.getByRole('button').innerHTML).includes('sym-btn-icon-right');
  });
});
