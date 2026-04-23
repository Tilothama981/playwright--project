// import { test, expect, chromium } from '@playwright/test';

// test('Handle new tab - LinkedIn link', async () => {

//   // 1. Launch browser
//   const browser = await chromium.launch({
//     channel: 'chrome',
//     headless: false
//   });

//   // 2. Create context & page
//   const context = await browser.newContext();
//   const page = await context.newPage();

//   // 3. Navigate to OrangeHRM page
//   await page.goto('https://www.orangehrm.com/contact-sales/');

//   // 4. Handle new tab (popup)
//   const [newTab] = await Promise.all([
//     page.waitForEvent('popup'),
//     page.locator('//a[contains(@href,"linkedin")]').click()
//   ]);

//   // 5. Wait for new tab to load
//   await newTab.waitForLoadState();

//   // 6. Get new tab details
//   const newTabTitle = await newTab.title();
//   const newTabURL = await newTab.url();

//   console.log('New Tab Title:', newTabTitle);
//   console.log('New Tab URL:', newTabURL);

//   // 7. Assertion (optional but recommended)
//   await expect(newTabURL).toContain('linkedin');

//   // 8. Close new tab
//   await newTab.close();

//   // 9. Switch back to parent page
//   await page.bringToFront();

//   // 10. Verify parent page
//   const parentTitle = await page.title();
//   console.log('Parent Page Title:', parentTitle);

//   // 11. Close browser
//   await browser.close();
// });

//--------------------------------------------------------------------
import { test, expect, chromium } from '@playwright/test';

test('Handle new tab - LinkedIn link', async () => {

  // 1. Launch browser
  const browser = await chromium.launch({
    channel: 'chrome',
    headless: false
  });

  // 2. Create context & page
  const context = await browser.newContext();
  const page = await context.newPage();

  // 3. Navigate to OrangeHRM page
  await page.goto('https://www.orangehrm.com/contact-sales/');

  // 4. Capture new tab safely
  const [newTab] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('//a[contains(@href,"linkedin")]').click()
  ]);

  // 5. ✅ FIX: Wait for new tab to fully load
  await newTab.waitForLoadState('domcontentloaded');

  // 6. Extra safety for redirect (LinkedIn redirects)
  await newTab.waitForURL(/linkedin/);

  // 7. Get new tab details
  const newTabTitle = await newTab.title();
  const newTabURL = newTab.url();

  console.log('New Tab Title:', newTabTitle);
  console.log('New Tab URL:', newTabURL);

  // 8. Assertion (optional)
  await expect(newTabURL).toContain('linkedin');

  // 9. Close new tab
  await newTab.close();

  // 10. Switch back to parent page
  await page.bringToFront();

  // 11. Verify parent page
  const parentTitle = await page.title();
  console.log('Parent Page Title:', parentTitle);

  // 12. Close browser
  await browser.close();
});