import { test, expect } from '@playwright/test';

test('Soft assert checkbox states and log error summary', async ({ page }) => {

  // 1. Navigate to page
  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  // 2. Locate all checkboxes
  const checkboxes = page.locator('input[type="checkbox"]');

  const count = await checkboxes.count();
  console.log('Total Checkboxes:', count);

  // 3. Loop through each checkbox
  for (let i = 0; i < count; i++) {

    const checkbox = checkboxes.nth(i);

    const isChecked = await checkbox.isChecked();
    console.log(`Checkbox ${i + 1} checked state:`, isChecked);

    // 4. Soft assertion (example expectation)
    // Assume we expect ALL checkboxes to be checked
    await expect.soft(checkbox).toBeChecked();
  }

});

// 5. AfterEach to log soft assertion errors
test.afterEach(async ({}, testInfo) => {

  const errorCount = testInfo.errors.length;

  console.log('🔴 Total Soft Assertion Failures:', errorCount);

});