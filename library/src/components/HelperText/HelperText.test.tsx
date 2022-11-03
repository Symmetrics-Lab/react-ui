import React, { Children } from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import HelperText from './HelperText';

describe('HelperText', () => {
  test('render HelperText', () => {
    render(
      <HelperText id="test" data-testid="test">
        Test
      </HelperText>
    );

    expect(screen.getByTestId('test')).toBeDefined;
  });
  test('it should have the base class', () => {
    const baseClass = 'sym-textfield__helper-text mt-2 text-sm text-gray-500';
    render(
      <HelperText id="test" data-testid="test">
        Test
      </HelperText>
    );

    expect(screen.getByTestId('test').getAttribute('class')).includes(baseClass);
  });
});
