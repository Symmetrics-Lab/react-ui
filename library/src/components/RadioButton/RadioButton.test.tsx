import React from 'react';

import { render, screen } from '@testing-library/react';
import { test, describe, expect } from 'vitest';
import '@testing-library/jest-dom/extend-expect';
import RadioButton from './RadioButton';

describe('RadioButton', () => {
  test('render radio button', () => {
    render(
      <RadioButton
        data-testid="radioButton"
        key={'radioButton'}
        name={'radioButton'}
        variant="primary"
        checked={true}
        onChange={() => console.log('')}
        value={'example'}
        label={'example'}
      ></RadioButton>
    );

    const radioButton = screen.getByTestId('radioButton');
    expect(radioButton).toBeDefined();
  });
  test('the radio button allows to change the color of the border', () => {
    render(
      <RadioButton
        data-testid="radioButton"
        key={'radioButton'}
        name={'radioButton'}
        variant="primary"
        checked={true}
        onChange={() => console.log('')}
        value={'example'}
        label={'example'}
        className="border-red-500"
      ></RadioButton>
    );
    const chip = screen.getByTestId('radioButton');
    expect(chip.className).contain('border-red-500');
  });
});
