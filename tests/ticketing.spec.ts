import { test, expect } from '@playwright/test';
import employeesData from '../fixtures/employees.json';

test.describe('Timesheets - Open Project - Cancel by Exact ID Match', () => {

  test('Login and cancel project by matching exact ID', async ({ page }) => {

    // Navigate to login page
    await page.goto('https://timesheets-uat.msrcosmos.com/timetracker/login');

    // Login
    await page.fill('#floatingInput', 'dhanaadmin@yopmail.com');
    await page.fill('#floatingPassword', 'Cosmos12#');
    await page.click('button[type="submit"].btn-primary');

    // Wait for modal and click Continue
    const modal = page.locator('.modal');
    await expect(modal).toBeVisible();
    await modal.getByRole('button', { name: 'Continue' }).click();
    await expect(modal).toBeHidden();

    console.log('Pass: Logged In Successfully');

    // Navigate to Masters
    await page.getByText('Masters').click();
    await page.waitForTimeout(1000);

    // Click submenu
    await page.locator('.customSideBar > :nth-child(2) > .menu-link > .menu-title').click();

    await page.waitForTimeout(2000);

    // Loop through employees from JSON
    for (const employee of employeesData.employees) {

      // Search employee
      const searchBox = page.locator('#form1');
      await searchBox.fill('');
      await searchBox.fill(employee);

      // Wait 5 seconds (as per requirement)
      await page.waitForTimeout(5000);

      // Get all table rows
      const rows = page.locator('table.freezeTable2 tbody tr');
      const rowCount = await rows.count();

      for (let i = 0; i < rowCount; i++) {

        const row = rows.nth(i);
        const thirdColumn = row.locator('td').nth(2);

        const thirdColumnText = (await thirdColumn.textContent())?.trim();

        // Exact match check
        if (thirdColumnText === employee) {

          console.log(`Match found for ID: ${employee}`);

          // Click the exact matched cell
          await thirdColumn.click();

          // Wait 5 seconds before cancel
          await page.waitForTimeout(5000);

          // Click Cancel button
          await page.click('#add-project .btn');

          console.log('Pass: Cancel Button clicked');

          break; // Stop loop once matched
        }
      }
    }
  });
});
