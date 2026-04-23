
import { test, expect } from '@playwright/test';

test('Check first checkbox and validate count', async ({ page }) => {

  // 1. Navigate to page
  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  // 2. Locate all checkboxes
  const checkboxes = page.locator('input[type="checkbox"]');

  // 3. Select first checkbox
  const firstCheckbox = checkboxes.first();

  await firstCheckbox.check();

  // 4. Hard assert - verify it is checked
  await expect(firstCheckbox).toBeChecked();

  // 5. Assert total checkbox count
  const count = await checkboxes.count();
  await expect(count).toBe(2);

});