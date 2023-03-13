import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import Label from './Label';

describe('Label', () => {
  test('render Label', () => {
    render(<Label text={'test'} id={'test'} />);
    render(<input type="text" id="test" />);

    expect(screen.getAllByLabelText('test')).toBeDefined();
  });
  test('it should have the base class', () => {
    const baseClass = 'textfield__label block text-sm font-medium text-sym-secondary-gray dark:text-sym-secondary-gray-dark';
    render(<Label text="etiqueta" data-testid="test" id="test" />);

    expect(screen.getByTestId('test').getAttribute('class')).includes(baseClass);
  });
  test('test correct text', () => {
    render(<Label text="etiqueta" data-testid="test" id="test" />);
    const etiquetas = screen.getByTestId('test').innerHTML;

    expect(etiquetas).equal('<span>etiqueta</span>');
  });

  test('it should have be require', async () => {
    render(<Label text="etiqueta" id="test" data-testid="test" required />);

    expect(await screen.findByText('*')).toBeDefined();
  });
  test('it should have a be hint', () => {
    render(<Label text={'test'} data-testid="test" id={'test'} hint="prueba" />);
    expect(screen.findByText('prueba')).toBeDefined();
  });
});
