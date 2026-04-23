import { test, expect } from '@playwright/test';

test('Select Option 2 and verify selectedIndex', async ({ page }) => {

  // 1. Navigate to page
  await page.goto('https://the-internet.herokuapp.com/dropdown');

  // 2. Select Option 2
  const dropdown = page.locator('#dropdown');
  await dropdown.selectOption('2'); // value = "2"

  // 3. Get selectedIndex using evaluate()
  const selectedIndex = await dropdown.evaluate((el) => (el as HTMLSelectElement).selectedIndex);

  console.log('Selected Index:', selectedIndex);

  // 4. Hard assertion
  await expect(selectedIndex).toBe(2);

});