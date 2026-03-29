import { test, expect } from '@playwright/test';

test('Add to cart test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');

  await expect(page.locator('.title')).toHaveText('Products');
});
