import { test, expect } from '@playwright/test';

test.describe('Checkout Tests', () => {

  test('Place Order', async ({ page }) => {
    await page.goto('https://www.demoblaze.com');

    await page.click('text=Samsung galaxy s6');
    await page.click('text=Add to cart');

    page.on('dialog', async dialog => await dialog.accept());

     await page.click('#cartur');
    await page.locator('text=Place Order').nth(1).click();

     await page.fill('#name', 'Test User');
     await page.fill('#country', 'India');
    await page.fill('#city', 'Hyderabad');
    await page.fill('#card', '123456789');
    await page.fill('#month', '03');
    await page.fill('#year', '2026');

    await page.click('button[onclick="purchaseOrder()"]');

    await expect(page.locator('.sweet-alert')).toBeVisible();
  });

});