import { test, expect, Page, Locator } from '@playwright/test';

test('Get first column (Book Names) from web table', async ({ page }) => {

  // Navigate to application
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Locate all rows
  const rows: Locator = page.locator('table[name="BookTable"] tbody tr');

  const rowCount = await rows.count();
  console.log('Total Rows:', rowCount);

  console.log('------ Book Names (First Column) ------');

  // Loop through rows (skip header row)
  for (let i = 1; i < rowCount; i++) {

    // Get first column (Book Name)
    const bookName = await rows.nth(i).locator('td').nth(0).innerText();

    console.log(bookName);
  }

});
import { test } from '@playwright/test';

test('Get first row BookName', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  // Get first data row (index 1) → first column (index 0)
  const bookName = await page
    .locator('table[name="BookTable"] tbody tr')
    .nth(1)
    .locator('td')
    .nth(0)
    .innerText();

  console.log('First Row Book Name:', bookName);

});