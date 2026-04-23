import { test, expect } from '@playwright/test';

test.describe('Hard Assert Vs Soft Assert Demo', () => {

  test('Soft Assert Example', async ({ page }) => {

    // Navigate to website
    await page.goto('https://www.saucedemo.com/', {
      waitUntil: 'domcontentloaded',
    });

    // ❌ Soft Assert (will fail but continue)
    await expect.soft(page).toHaveTitle('Wrong Title');

    console.log('Soft assert 1 executed');

    // ❌ Another soft assert
    await expect.soft(page.locator('[data-test="username"]')).toBeVisible();

    console.log('Soft assert 2 executed');

    // ✅ Hard Assert (will stop if fails)
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();

    console.log('Hard assert executed');
  });

});