import { test, expect } from '@playwright/test';

test('Infinite scroll - load new content on scroll', async ({ page }) => {

  // 1. Navigate to page
  await page.goto('https://the-internet.herokuapp.com/infinite_scroll');

  // 2. Locate items (paragraphs)
  const items = page.locator('.jscroll-added');

  // 3. Get initial count
  const initialCount = await items.count();
  console.log('Initial count:', initialCount);

  // 4. Scroll to bottom using evaluate
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  // 5. Wait for new items to load
  await page.waitForTimeout(2000); // simple wait for demo

  // 6. Get new count
  const newCount = await items.count();
  console.log('New count:', newCount);

  // 7. Hard assertion - new items should be added
  await expect(newCount).toBeGreaterThan(initialCount);

});