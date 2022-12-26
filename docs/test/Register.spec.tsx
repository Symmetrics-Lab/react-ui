import { test, expect } from '@playwright/test';
test.describe('Register', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/register');
  });

  test('Enter values for register', async ({ page }) => {
    await expect(page.getByText('Sign up')).toBeVisible();
   // await page.getByLabel('Lastname').click();
    await page.getByLabel('Lastname').fill('Symlab');
    await page.getByLabel('Email').fill('joselyne.nievesr@gmail.com');
    await page.getByLabel('Phone').fill('915151515151');
    await page.getByLabel('Password').fill('asdad45!V');
    await expect(page.getByText('Excellent')).toBeVisible();
    await page.getByRole('button', { name: 'Register' }).click();
    await expect(page.getByText('Already have an account?')).toBeVisible();
  });

  test('required', async ({ page }) => {
    await page.getByRole('button', { name: 'Register' }).click();
    await expect(page.getByText('The lastname field is required')).toBeVisible()
    await expect(page.getByText('The email field is required')).toBeVisible();
    await expect(page.getByText('The password field is required')).toBeVisible();
  });

  test('go to login', async ({ page }) => {
    await page.getByRole('link', { name: 'Login here' }).click();
  });
});
