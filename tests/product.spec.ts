import { test, expect } from '@playwright/test';

test.describe('Product Tests', () => {

  test('View Product Details', async ({ page }) => {
    await page.goto('https://www.demoblaze.com');

    await page.click('text=Samsung galaxy s6');
    await expect(page.locator('.name')).toBeVisible();
    await expect(page.locator('.price-container')).toBeVisible();
  });

});