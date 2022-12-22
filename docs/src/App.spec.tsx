import { test, expect } from '@playwright/experimental-ct-react';
import App from './App';

//test.use({ viewport: { width: 500, height: 500 } });

// Let's test component in a dark scheme!
test.use({ colorScheme: 'dark' });

test('renders', async ({ mount }) => {
  const component = await mount(<App />);
  await expect(component).toContainText('Por favor Espere...');
});