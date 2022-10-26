import React from 'react';

import { render, screen } from '@testing-library/react';
import { test, describe, expect } from 'vitest';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import Input from './Input';
import { type } from 'os';

describe('input', () => {
  test('render text input', () => {
    render(<Input id="test" data-testid="name" type="text" />);
    screen.debug();
    const inputText = screen.getByTestId('name');
    expect(inputText).toBeDefined();
  });
  test('text must be the default value', () => {
    render(<Input id="test" data-testid="name" />);
    const inputName = screen.getByTestId('name');

    expect(inputName.getAttribute('type')).equal('text');
  });
  test('pass valid name to test name input field', () => {
    render(<Input id="test" data-testid="name" type="text" />);
    const inputName = screen.getByTestId('name');
    userEvent.type(inputName, 'Eliezer');

    expect(screen.getByTestId('name')).toHaveValue('Eliezer');
  });
  test('pass invalid name to test name input field', () => {
    render(
      <Input id="test" data-testid="name" type="text" className="sym-textfield__wrapper--error" />
    );
    const inputName = screen.getByTestId('name');
    userEvent.type(inputName, ' ');

    expect(screen.getByTestId('name')).toHaveValue(' ');
    expect(inputName.getElementsByClassName('sym-textfield__wrapper--error')).exist;
  });
  test('render lastname text input', () => {
    render(<Input id="test" data-testid="lastname" type="text" />);
    const inputLastName = screen.getByTestId('lastname');

    expect(inputLastName.getAttribute('type')).equal('text');
  });
  test('pass valid lastname to test lastname input field', () => {
    render(<Input id="test" data-testid="lastname" type="text" />);
    const inputLastName = screen.getByTestId('lastname');
    userEvent.type(inputLastName, 'Rodriguez');

    expect(screen.getByTestId('lastname')).toHaveValue('Rodriguez');
  });
  test('pass invalid lastname to test lastname input field', () => {
    render(
      <Input
        id="test"
        data-testid="lastname"
        type="text"
        className="sym-textfield__wrapper--error"
      />
    );
    const inputLastName = screen.getByTestId('lastname');
    userEvent.type(inputLastName, ' ');

    expect(screen.getByTestId('lastname')).toHaveValue(' ');
    expect(inputLastName.getElementsByClassName('sym-textfield__wrapper--error')).exist;
  });
  test('render email input', () => {
    render(<Input id="test" data-testid="email" type="email" />);
    const inputEl = screen.getByTestId('email');

    expect(inputEl.getAttribute('type')).equal('email');
  });
  test('pass valid email to test email input field', () => {
    render(<Input id="test" data-testid="email" type="email" />);
    const inputEl = screen.getByTestId('email');
    userEvent.type(inputEl, 'eli@eli.com');

    expect(screen.getByTestId('email')).toHaveValue('eli@eli.com');
  });
  test('pass valid email to test email input field', () => {
    render(
      <Input id="test" data-testid="email" type="email" className="sym-textfield__wrapper--error" />
    );
    const inputEl = screen.getByTestId('email');
    userEvent.type(inputEl, 'elicom');

    expect(screen.getByTestId('email')).toHaveValue('elicom');
    expect(inputEl.getElementsByClassName('sym-textfield__wrapper--error')).exist;
  });
});
