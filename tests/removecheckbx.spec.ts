import { test, expect } from '@playwright/test';

test('Remove checkbox and verify it is not in DOM', async ({ page }) => {

  // 1. Navigate to page
  await page.goto('https://the-internet.herokuapp.com/dynamic_controls');

  // 2. Locate checkbox
  const checkbox = page.locator('#checkbox input[type="checkbox"]');

  // 3. Click Remove button
  await page.click('#checkbox-example button');

  // 4. Wait for checkbox to be detached (removed from DOM)
  await checkbox.waitFor({ state: 'detached' });

  // 5. Hard assert - verify count is 0
  const count = await checkbox.count();
  await expect(count).toBe(0);

});