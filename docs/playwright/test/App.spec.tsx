import { test, expect } from '@playwright/experimental-ct-react';
import App from '../../src/App';

//test.use({ viewport: { width: 500, height: 500 } });

// Let's test component in a dark scheme!
test.use({ colorScheme: 'dark' });

test('renders', async ({ mount }) => {
  setTimeout(async() => {
    const component = await mount(<App />);
    await expect(component).toContainText('Por favor Espere...');
  }, 10000);
 
});