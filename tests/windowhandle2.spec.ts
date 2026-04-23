import { test, expect, chromium } from '@playwright/test';

test('windowhandles', async () => {

  // Launch browser
  const browser = await chromium.launch({
    channel: 'chrome',
    headless: false
  });

  // Create context & page
  const brtxt = await browser.newContext(); // window
  const page = await brtxt.newPage();       // page

  // Navigate to URL
  await page.goto('https://orangehrm.com/contact-sales/');

  // Click links (open multiple tabs)
  await page.locator('//a[contains(@href,"linkedin")]').click();
  await page.locator('//a[contains(@href,"facebook")]').click();
  await page.locator('//a[contains(@href,"youtube")]').click();

  // Wait (as in your image)
  await page.waitForTimeout(60000);

  // Get all pages
  const allpages = brtxt.pages(); // page1, page2, page3, page4

  console.log(allpages.length); // 4

  // Loop through all pages
  for (let pg of allpages) {

    console.log(await pg.title()); // child titles

    await pg.close(); // close each tab
  }

});