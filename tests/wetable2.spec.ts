import { test, expect } from '@playwright/test';

test('Handle Web Table', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.waitForLoadState('domcontentloaded');

  // Count rows
  const rows = await page.locator("//table[@name='BookTable']/tbody/tr").count();
  console.log("Number of rows:", rows);

  // Count columns
  const columns = await page.locator("//table[@name='BookTable']/tbody/tr[1]/th").count();
  console.log("Number of columns:", columns);

  // Get specific cell value (row 5, column 2)
  const data = await page.locator("//table[@name='BookTable']/tbody/tr[5]/td[2]").textContent();
  console.log("Cell value (row 5, col 2):", data);

  // Print header row
  for (let j = 1; j <= columns; j++) {
    const header = await page.locator(`//table[@name='BookTable']/tbody/tr[1]/th[${j}]`).textContent();
    process.stdout.write(header + " ");
  }
  console.log();

  // Print all table data
  for (let r = 2; r <= rows; r++) {
    for (let c = 1; c <= columns; c++) {

      const value = await page.locator(`//table[@name='BookTable']/tbody/tr[${r}]/td[${c}]`).textContent();

      process.stdout.write(value + " ");
    }
    console.log();
  }

});