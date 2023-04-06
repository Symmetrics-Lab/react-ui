import React from 'react';

import { render, screen } from '@testing-library/react';
import { test, describe, expect } from 'vitest';
import '@testing-library/jest-dom/extend-expect';
import Notification from './Notification';

describe('Notification', () => {
  test('render card of notification', () => {
    render(<Notification data-testid="notification" to={null} />);
    const notification = screen.getByTestId('notification');
    expect(notification).toBeDefined();
  });
  test('Notification card component can change background color', () => {
    render(
      <Notification
        data-testid="notification"
        data={{
          title: 'Test',
          description: 'Notification',
        }}
        to={null}
        className="bg-red-500"
      />
    );
    const notification = screen.getByTestId('notification');
    expect(notification.className).contain('bg-red-500');
  });
  test('The notification card component, allows you to see the time that the notification has passed to the current day', () => {
    const { container } = render(
      <Notification
        data-testid="notification"
        data={{
          title: 'Test',
          description: 'Notification',
        }}
        to={null}
      />
    );
    expect(container.innerHTML).toMatch('Test');
  });
  test('The notification card component allows you to display the basic information', () => {
    render(
      <Notification
        data-testid="notification"
        data={{
          title: 'Test',
          description: 'Notification',
          time:  new Date().toISOString(),
        }}
        to={null}
      />
    );
    expect(screen.getByText('en este momento')).toBeInTheDocument();
  });
});
