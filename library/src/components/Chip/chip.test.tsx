import React from 'react';

import { render, screen } from '@testing-library/react';
import { test, describe, expect } from 'vitest';
import '@testing-library/jest-dom/extend-expect';
import Chip from './Chip';

describe('Chip', () => {
  test('render Chip', () => {
    render(
      <Chip key="default" data-testid="size" variant="default">
        Entre 8 y 15 caracteres
      </Chip>
    );

    const chip = screen.getByTestId('size');
    expect(chip).toBeDefined();
  });
  test('the chip allows to change the background color', () => {
    render(
      <Chip
        key="secondary"
        variant="default"
        data-testid="size"
        className="sym-bg-symlab-purple-500 sym-text-white"
      >
        Entre 8 y 15 caracteres
      </Chip>
    );
    const chip = screen.getByTestId('size');
    expect(chip.className).contain('bg-symlab-purple-500');
  });
});
