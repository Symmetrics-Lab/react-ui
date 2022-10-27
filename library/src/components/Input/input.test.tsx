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

  test('render email input', () => {
    render(<Input id="test" data-testid="email" type="email" />);
    const inputEl = screen.getByTestId('email');

    expect(inputEl.getAttribute('type')).equal('email');
  });
  test('input is disable', () => {
    render(<Input id="test" data-testid="disable" disabled />);
    expect(screen.getByTestId('disable').getAttribute('disable'));
  });
  test('input is hasError', () => {
    render(<Input id="test" data-testid="hasError" hasError />);
    screen.debug();
    expect(screen.getByTestId('hasError').getAttribute('hasError'));
  });
  test('input is isValid', () => {
    render(<Input id="test" data-testid="isValid" isValid />);
    screen.debug();
    expect(screen.getByTestId('isValid').getAttribute('isValid'));
  });
});
