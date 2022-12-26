import { test, expect } from '@playwright/test';
test.describe('Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
  });

  test('Enter values for login', async ({ page }) => {
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill('joselyne.nievesr@gmail.com');
    await page.getByPlaceholder('Email').press('Tab');
    await page.getByPlaceholder('Password').fill('12345678');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('button', { name: 'Close' }).click();
  });

  test('required', async ({ page }) => {
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('The email field is required')).toBeVisible();
    await expect(page.getByText('The password field is required')).toBeVisible();
  });

  test('go to Sign up', async ({ page }) => {
    await page.getByRole('link', { name: 'Sign up' }).click();
  });
});
