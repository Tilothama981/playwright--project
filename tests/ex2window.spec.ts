import { test, expect } from '@playwright/test';

test('Handle new tab using context.waitForEvent', async ({ page, context }) => {

  // 1. Navigate to page
  await page.goto('https://the-internet.herokuapp.com/windows');

  // 2. Capture new tab
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),   // wait for new tab
    page.locator('text=Click Here').click()
  ]);

  // 3. Wait for new tab to load
  await newPage.waitForLoadState();

  // 4. Get title
  const title = await newPage.title();
  console.log('New Tab Title:', title);

  // 5. Assertion
  await expect(newPage).toHaveTitle('New Window');

});