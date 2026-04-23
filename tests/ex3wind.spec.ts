import { test, expect } from '@playwright/test';

test('Open new tab, verify, close and return to main page', async ({ page, context }) => {

  // 1. Navigate to main page
  await page.goto('https://the-internet.herokuapp.com/windows');

  // 2. Capture new tab
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.locator('text=Click Here').click()
  ]);

  // 3. Wait for new tab to load
  await newPage.waitForLoadState();

  // 4. Verify new tab title
  await expect(newPage).toHaveTitle('New Window');

  // 5. Close new tab
  await newPage.close();

  // 6. Bring focus back to main page
  await page.bringToFront();

  // 7. Verify main page
  await expect(page).toHaveTitle('The Internet');

});