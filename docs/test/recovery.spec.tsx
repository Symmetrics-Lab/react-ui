import { test, expect } from '@playwright/test';
test.describe('Recovery', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/recovery-page');
  });

  test('Enter values for recovery', async ({ page }) => {
    await expect(page.getByText('Forgot your password?')).toBeVisible();
    // await page.getByRole('heading', { name: 'Forgot your password?' }).click();
    await page.getByPlaceholder('name@company.com').fill('joselyne.nievesr@gmail.com');
    await page.getByRole('button', { name: 'Recover' }).click();
    //await page.getByText('We have sent a code to your email joselyne.nievesr@gmail.com, write it here') .click();
    await expect(
      page.getByText('We have sent a code to your email joselyne.nievesr@gmail.com, write it here')
    ).toBeVisible();
    //await page.getByRole('heading', { name: 'OTP Verification' }).click();
    await expect(page.getByText('OTP Verification')).toBeVisible();

    await page.locator('#first').click();
    await page.locator('#first').press('CapsLock');
    await page.locator('#first').click();
    await page.locator('#first').fill('S');
    await page.locator('#second').fill('S');
    await page.locator('#third').fill('S');
    await page.locator('#fourth').fill('S');
    await page.getByLabel('Password').fill('DFDSFDSVDSVDS4S4!v');
    await page.getByText('Great password!').click();
    await page.getByRole('button', { name: 'Finish' }).click();
  });

  test('Required', async ({ page }) => {
    await page.getByRole('button', { name: 'Recover' }).click();
    await expect(page.getByText('email is a required field')).toBeVisible();
  });

  test('Return to login', async ({ page }) => {
    await page.getByRole('link', { name: 'Return to login' }).click();
  });
});
