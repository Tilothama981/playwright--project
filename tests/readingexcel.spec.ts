import { test, expect } from '@playwright/test';
import * as XLSX from 'xlsx';
import path from 'path';

// Function to read Excel data
function getEmployeeIds() {
  const filePath = path.join(__dirname, '../test-data/employees.xlsx');
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  const data: any[] = XLSX.utils.sheet_to_json(sheet);
  return data.map(row => row.EmployeeID);
}

test.describe('Timesheets - Open Project - Cancel by Exact ID Match (Excel)', () => {

  test('Login and cancel project by matching exact ID from Excel', async ({ page }) => {

    const employees = getEmployeeIds();

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

    await page.locator('.customSideBar > :nth-child(2) > .menu-link > .menu-title').click();
    await page.waitForTimeout(2000);

    // Loop through Excel employee IDs
    for (const employee of employees) {

      const searchBox = page.locator('#form1');
      await searchBox.fill('');
      await searchBox.fill(employee);

      // Required 5 sec wait
      await page.waitForTimeout(5000);

      const rows = page.locator('table.freezeTable2 tbody tr');
      const rowCount = await rows.count();

      for (let i = 0; i < rowCount; i++) {

        const row = rows.nth(i);
        const thirdColumn = row.locator('td').nth(2);
        const thirdColumnText = (await thirdColumn.textContent())?.trim();

        if (thirdColumnText === employee) {

          console.log(`Match found for ID: ${employee}`);

          await thirdColumn.click();

          await page.waitForTimeout(5000);

          await page.click('#add-project .btn');

          console.log('Pass: Cancel Button clicked');

          break;
        }
      }
    }
  });
});
