import { test, expect } from '@playwright/test';

test('Remove checkbox and verify it is removed from DOM', async ({ page }) => {

  // 1. Navigate to page
  await page.goto('https://the-internet.herokuapp.com/dynamic_controls');

  // 2. Locator for checkbox
  const checkbox = page.locator('#checkbox input[type="checkbox"]');

  // 3. Click Remove button
  await page.locator('#checkbox-example button').click();

  // 4. Wait until checkbox is detached from DOM
  await checkbox.waitFor({ state: 'detached' });

  // 5. Hard assertion → count should be 0
  await expect(checkbox).toHaveCount(0);

});