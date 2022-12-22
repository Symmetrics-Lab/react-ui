import React from 'react';

import { render, screen } from '@testing-library/react';
import { test, describe, expect } from 'vitest';
import '@testing-library/jest-dom/extend-expect';
import Loading from './Loading';

describe('Loading', () => {
  test('render Loading', () => {
    render(
      <Loading key="default" data-testid="loading">
       Loading
      </Loading>
    );

    const loading = screen.getByTestId('loading');
    expect(loading).toBeDefined();
  });
  test('the loading allows to change the background color', () => {
    render(
      <Loading
        key="secondary"
        data-testid="loading"
        className="bg-symlab-purple-500"
      >
        Loading
      </Loading>
    );
    const loading = screen.getByTestId('loading');
    expect(loading.className).contain('bg-symlab-purple-500');
  });
});
