import { test, expect } from '@playwright/test';

test.describe('Login Tests', () => {

  test('Valid Login', async ({ page }) => {
    await page.goto('https://www.demoblaze.com');

    await page.click('#login2');
    await page.fill('#loginusername', 'testuser');
    await page.fill('#loginpassword', 'test123');
    await page.click('button[onclick="logIn()"]');

    await expect(page.locator('#nameofuser')).toBeVisible();
  });

  test('Invalid Login', async ({ page }) => {
    await page.goto('https://www.demoblaze.com');

    await page.click('#login2');
    await page.fill('#loginusername', 'wrong');
    await page.fill('#loginpassword', 'wrong');
    await page.click('button[onclick="logIn()"]');

    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('Wrong password');
      await dialog.accept();
    });
  });

});