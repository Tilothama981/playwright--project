import { test, expect } from '@playwright/test';

test('Login and verify success message (Hard Assert)', async ({ page }) => {

  // 1. Navigate to login page
  await page.goto('https://the-internet.herokuapp.com/login');

  // 2. Enter credentials
  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').fill('SuperSecretPassword!');

  // 3. Click login
  await page.locator('button[type="submit"]').click();

  // 4. Locate flash message
  const flashMsg = page.locator('#flash');

  // 5. Hard assertion
  await expect(flashMsg).toBeVisible();
  await expect(flashMsg).toContainText('You logged into a secure area!');

});