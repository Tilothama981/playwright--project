import { test, expect, Page, Locator } from '@playwright/test';
test('static web table', async ({ page }) => {
  // Navigate to URL
  await page.goto('https://testautomationpractice.blogspot.com/');
  // Locate table
  const table: Locator = page.locator('table[name="BookTable"]');
  // Locate rows
  const rows: Locator = table.locator('tbody tr');
  const rowCount = await rows.count();
  // Locate columns
  const columns: Locator = page.locator('table[name="BookTable"] tbody tr th');
  const columnCount = await columns.count();
  console.log('Row Count:', rowCount);
  console.log('Column Count:', columnCount);
  console.log("Printing all table data");
  console.log("BookName | Author | Subject | Price");
  // Get all rows
  const allRowsData1 = await rows.all();
  // Loop through rows (skip header row if needed)
  for (let row of allRowsData1.slice(1)) {
    // Get all column values
    const cols = await row.locator('td').allInnerTexts();
    console.log(cols);  }});