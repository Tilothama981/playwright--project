import { test, expect } from '@playwright/test';

test('Verify number of pages using context.pages()', async ({ page, context }) => {

  // 1. Navigate to page
  await page.goto('https://the-internet.herokuapp.com/windows');

  // 2. Click link and wait for new tab
  await Promise.all([ context.waitForEvent('page'),
     page.locator('text=Click Here').click()]);

  // 3. Get all open pages
  const allPages = context.pages();

  console.log('Total Pages:', allPages.length);

  // 4. Assertion
  await expect(allPages.length).toBe(2);

});