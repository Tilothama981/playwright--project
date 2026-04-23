import { test, expect, Page, Locator } from '@playwright/test';

test('no of rows in static web table', async ({ page }) => {

  // Navigate to URL
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Locate table
  const table: Locator = page.locator('table[name="BookTable"]');

  // Locate rows
  const rows: Locator = table.locator('tbody tr');
   const rowCount = await rows.count(); 
  console.log('no of rows',rowCount)})    