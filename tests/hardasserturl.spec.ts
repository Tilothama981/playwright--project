import { test, expect } from '@playwright/test';

test('Login and verify URL contains /secure (Hard Assert)', async ({ page }) => {

  // 1. Navigate to login page
  await page.goto('https://the-internet.herokuapp.com/login');

  // 2. Enter valid credentials
  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').fill('SuperSecretPassword!');

  // 3. Click login
  await page.locator('button[type="submit"]').click();

  // 4. Hard assertion on URL
  await expect(page).toHaveURL(/.*\/secure/);

});