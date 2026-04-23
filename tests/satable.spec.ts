import { test, expect } from '@playwright/test';

test('Soft assert table headers', async ({ page }) => {
//Task: Soft assert that the first table's column headers include Last Name, First Name, and Email.
  await page.goto('https://the-internet.herokuapp.com/tables');

  // Locate first table headers
  const headers = await page.locator('#table1 thead th').allTextContents();

  // Soft assertions
  await expect.soft(headers).toContain('Last Name');
  await expect.soft(headers).toContain('First Name');
  await expect.soft(headers).toContain('Email');

});