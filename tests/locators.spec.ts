import { test, expect } from '@playwright/test';

test('Home Page', async({ page }) => {

  await page.goto('https://www.demoblaze.com/index.html');

  const pageTitle = await page.title();
  console.log('Page title is:', pageTitle);
  await expect(page).toHaveTitle('STORE');

  const pageURL = page.url();
  console.log('Page URL is:', pageURL);
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

  await page.click('id=login2');
  await page.fill('#loginusername', 'pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.locator("//button[text()='Log in']").click();

  const logout = await page.locator("//a[text()='Log out']");
  await expect(logout).toBeVisible();
});
