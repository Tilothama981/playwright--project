import { test, expect } from '@playwright/test';
import employeesData from '../fixtures/employees.json';

test.describe('Timesheets - Open Project - Search employee and cancel project using intercept', () => {

  test('Login, search employee, match exact ID, open project and cancel', async ({ page }) => {

    // =========================
    // 1️⃣ Visit & Login
    // =========================
    await page.goto('https://timesheets-uat.msrcosmos.com/timetracker/login');

    await page.fill('#floatingInput', 'dhanaadmin@yopmail.com');
    await page.fill('#floatingPassword', 'Cosmos12#');

    // Wait for login API response
    const loginResponsePromise = page.waitForResponse(response =>
      response.url().includes('/login') &&
      response.request().method() === 'POST'
    );

    await page.click('button[type="submit"].btn-primary');

    const loginResponse = await loginResponsePromise;
    expect(loginResponse.status()).toBe(200);

    // =========================
    // 2️⃣ Handle Continue Modal
    // =========================
    const modal = page.locator('.modal');
    await expect(modal).toBeVisible();

    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(modal).toBeHidden();

    console.log('Pass: Logged in successfully');

    // =========================
    // 3️⃣ Navigate to Masters → Projects
    // =========================
    await page.getByText('Masters').click();
    await page.locator('.customSideBar > :nth-child(2) > .menu-link > .menu-title').click();

    // =========================
    // 4️⃣ Loop Employees
    // =========================
    for (const employee of employeesData.employees) {

      // =========================
      // 5️⃣ Search Employee (Wait for API)
      // =========================
      const searchResponsePromise = page.waitForResponse(response =>
        response.url().includes('/employees') &&
        response.request().method() === 'GET'
      );

      await page.fill('#form1', employee);

      const searchResponse = await searchResponsePromise;
      expect(searchResponse.status()).toBe(200);

      // =========================
      // 6️⃣ Validate Table & Exact Match
      // =========================
      const rows = page.locator('table.freezeTable2 tbody tr');
      const rowCount = await rows.count();

      for (let i = 0; i < rowCount; i++) {

        const row = rows.nth(i);
        const thirdColumn = row.locator('td').nth(2);
        const thirdColumnText = (await thirdColumn.textContent())?.trim();

        if (thirdColumnText === employee) {

          await thirdColumn.click();

          // =========================
          // 7️⃣ Wait for Projects API
          // =========================
          const projectResponse = await page.waitForResponse(response =>
            response.url().includes('/projects') &&
            response.request().method() === 'GET'
          );

          expect(projectResponse.status()).toBe(200);

          // =========================
          // 8️⃣ Cancel Project
          // =========================
          const cancelResponsePromise = page.waitForResponse(response =>
            response.url().includes('/cancel') &&
            response.request().method() === 'POST'
          );

          await page.locator('#add-project .btn', { hasText: 'Cancel' }).click();

          const cancelResponse = await cancelResponsePromise;
          expect(cancelResponse.status()).toBe(200);

          console.log(`Pass: Project cancelled for ${employee}`);

          break; // stop loop after match
        }
      }
    }
  });
});
