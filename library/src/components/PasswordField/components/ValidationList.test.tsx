import ValidationList from './ValidationList';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Validation', () => {
  test('render ValidationsList', () => {
    render(
      <ValidationList
        length={false}
        lowerCase={false}
        upperCase={false}
        number={false}
        specialCharacter={false}
        allValid={true}
      />
    );
    const content = screen.getByText(/Great password!/i);

    expect(content).toBeDefined();
  });
});
