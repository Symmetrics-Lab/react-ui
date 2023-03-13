import { render, screen } from '@testing-library/react';
import { test, describe, expect } from 'vitest';
import '@testing-library/jest-dom/extend-expect';
import Switch from './Switch';

describe('Switch', () => {
  test('render Switch', () => {
    render(
      <Switch
        id="primary"
        variant="primary"
        size="sm"
        toggle={true}
        data-testid="switch"
        onClick={() => false}
      ></Switch>
    );
    const switchs = screen.getByTestId('switch');
    expect(switchs).toBeDefined();
  });
  test('Switch is disable', () => {
    render(
      <Switch
        id="disabled"
        variant="primary"
        size="sm"
        toggle={true}
        disabled
        data-testid="switch"
        onClick={() => false}
      ></Switch>
    );
    const switchs = screen.getByTestId('switch');
    expect(switchs.getAttribute('disabled'));
  });
  test('the switch allows to change the background color', () => {
    render(
      <Switch
      id="customized"
      variant="primary"
      size="sm"
      toggle={true}
      data-testid="switch"
      onClick={() => false}
        className={'bg-error text-red-600 '}
      >
        Entre 8 y 15 caracteres
      </Switch>
    );
    const switchs = screen.getByTestId('switch');
    expect(switchs.className).contain('bg-error');
  });
});
