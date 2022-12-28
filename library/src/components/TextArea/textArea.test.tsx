import React from 'react';

import { render, screen } from '@testing-library/react';
import { test, describe, expect } from 'vitest';
import '@testing-library/jest-dom/extend-expect';

import Textarea from './TextArea';

describe('textarea', () => {
  test('render textarea', () => {
    render(<Textarea id="test" data-testid="name" rows={3} />);

    const textareaText = screen.getByTestId('name');
    expect(textareaText).toBeDefined();
  });
  test('textarea is disable', () => {
    render(<Textarea id="test" data-testid="disable" disabled />);
    expect(screen.getByTestId('disable').getAttribute('disable'));
  });
  test('textarea is hasError', () => {
    render(<Textarea id="test" data-testid="hasError" hasError />);

    expect(screen.getByTestId('hasError').getAttribute('hasError'));
  });
  test('textarea is isValid', () => {
    render(<Textarea id="test" data-testid="isValid" isValid />);

    expect(screen.getByTestId('isValid').getAttribute('isValid'));
  });
});
