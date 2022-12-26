import { test, expect } from '@playwright/experimental-ct-react';
test.describe('App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });
  test('render', async ({ page }) => {
    const message = await page.locator('.mode-theme').textContent();
    expect(message).toContain('light ');
  });

  test('change theme', async ({ page }) => {
    await page.locator('#switch').click();
    await expect(page.locator('html')).toHaveAttribute('class', 'undefined dark')
 
    await page.locator('#switch').click();
    await expect(page.locator('html')).toHaveAttribute('class', 'undefined light')
  });
});
