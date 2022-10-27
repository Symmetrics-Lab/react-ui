import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import Label from './Label';

describe('Label', () => {
  test('render Label', () => {
    render(<Label text={'test'} id={'test'}></Label>);
    render(<input type="text" id="test" />);

    expect(screen.getAllByLabelText('test')).toBeDefined();
  });
  test('it should have the base class', () => {
    const baseClass = 'sym-textfield__label block text-sm font-medium text-gray-700';
    render(
      <Label text={'test'} data-testid="test" id={'test'}>
        test
      </Label>
    );

    expect(screen.getByTestId('test').getAttribute('class')).includes(baseClass);
  });
  test('it should have be disable', () => {
    render(
      <Label text={'test'} data-testid="test" id={'test'} disabled>
        test
      </Label>
    );
    expect(screen.getByTestId('test').getAttribute('disable'));
  });
  test('it should have be require', () => {
    render(
      <Label text={'test'} data-testid="test" id={'test'} required>
        test
      </Label>
    );
    expect(screen.getByTestId('test').getAttribute('require'));
  });
  test('it should have be hidden', () => {
    render(<Label text={'test'} data-testid="test" id={'test'} hidden />);
    expect(screen.getByTestId('test').getAttribute('hidden'));
  });
});
