import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { EnvelopeIcon } from '@heroicons/react/20/solid';
import Button from './Button';

describe('Button', () => {
  test('it should render without crashing', () => {
    render(<Button>Hello there</Button>);
    expect(screen.getByRole('button')).toBeDefined();
  });
  test('it should render with the correct text', () => {
    render(<Button>Hello there</Button>);
    expect(screen.getByRole('button').innerHTML).equal('Hello there');
  });
  test('it should have the button type by default', () => {
    render(<Button>Hello there</Button>);
    expect(screen.getByRole('button').getAttribute('type')).equal('button');
  });
  test('it should have the submit type', () => {
    render(<Button type="submit">Hello there</Button>);
    expect(screen.getByRole('button').getAttribute('type')).equal('submit');
  });
  test('it should have the reset type', () => {
    render(<Button type="reset">Hello there</Button>);
    expect(screen.getByRole('button').getAttribute('type')).equal('reset');
  });
  test('it should have be disabled', () => {
    render(<Button disabled>Hello there</Button>);
    screen.getByRole('button');
    expect(screen.getByRole('button').getAttribute('disabled')).equal('');
  });
  test('it should have be disabled with isDisable', () => {
    render(<Button isDisabled>Hello there</Button>);
    screen.debug();
    screen.getByRole('button');

    expect(screen.getByRole('button').getAttribute('disabled')).equal('');
  });
  test('it should have a different opacity and hover icon if disabled', () => {
    render(<Button disabled>Hello there</Button>);
    expect(screen.getByRole('button').getAttribute('class')).includes(
      'opacity-50 cursor-not-allowed'
    );
  });
  test('it should have a different class if rounded is passed', () => {
    render(<Button rounded>Hello there</Button>);
    expect(screen.getByRole('button').getAttribute('class')).includes('rounded-full');
  });
  test('it should have the base class', () => {
    const baseClass =
      'inline-flex items-center  border border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2';
    render(<Button>Hello there</Button>);
    expect(screen.getByRole('button').getAttribute('class')).includes(baseClass);
  });
  test('it should have be disabled with isLoading', () => {
    render(
      <Button isLoading loadingContent="Loading">
        Hello there
      </Button>
    );
    screen.getByRole('button');
    expect(screen.getByRole('button').getAttribute('disabled')).equal('');
  });
  test('it should show loading content with isLoading', () => {
    render(
      <Button isLoading loadingContent="Loading">
        Hello there
      </Button>
    );
    screen.getByRole('button');
    expect(screen.getByRole('button').innerHTML).equal('Loading');
  });
});

describe('Icon', () => {
  test('it should render an icon to the left', () => {
    render(
      <Button icon={EnvelopeIcon} iconPosition="left">
        Hello there
      </Button>
    );
    expect(screen.getByRole('button').innerHTML).includes('<svg');
    expect(screen.getByRole('button').innerHTML).includes('sym-btn-icon-left');
  });
  test('it should render an icon to the right', () => {
    render(
      <Button icon={EnvelopeIcon} iconPosition="right">
        Hello there
      </Button>
    );
    expect(screen.getByRole('button').innerHTML).includes('<svg');

    expect(screen.getByRole('button').innerHTML).includes('sym-btn-icon-right');
  });
});
