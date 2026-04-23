// I implemented a data-driven test using fixture data where I iterate through multiple employee IDs.
// For each employee, I perform a search, then dynamically traverse table rows to find an exact match in a specific column.
// Once matched, I perform actions like clicking and validating UI behavior.

// In Playwright, I used locators and loops to achieve the same functionality as Cypress .each().”
// tests/employee.spec.ts
// tests/employee.spec.ts
import { test, expect } from '@playwright/test';
import employeesData from './fixtures/employees.json';

test('Employee search and action', async ({ page }) => {

  const employees = employeesData.employees;

  for (const employee of employees) {

    // 🔹 Search employee
    const searchBox = page.locator('#form1');

    await searchBox.click();
    await searchBox.fill(employee);

    // ✅ Better wait instead of hard wait
    await expect(page.locator('table.freezeTable2')).toBeVisible();

    // 🔹 Get all table rows
    const rows = page.locator('table.freezeTable2 tr');
    const rowCount = await rows.count();

    for (let i = 0; i < rowCount; i++) {

      const row = rows.nth(i);

      // 🔹 Get 3rd column text
      const thirdColumnText = await row.locator('td').nth(2).innerText();

      // 🔹 Match exact value
      if (thirdColumnText.trim() === employee) {

        // Click 3rd column
        await row.locator('td').nth(2).click();

        // Wait for popup/modal instead of timeout
        await expect(page.locator('#add-project')).toBeVisible();

        // Click Cancel button
        await page.locator('#add-project .btn').click();

        console.log(`✅ Pass: Cancel Button clicked for ${employee}`);

        break; // stop loop once found
      }
    }
  }
});