import { test, expect } from '@playwright/test';

// 1. Define Type
type LoginData = {
  username: string;
  password: string;
};

// 2. Test Data Array
const loginData: LoginData[] = [
  { username: 'standard_user', password: 'secret_sauce' },
  { username: 'locked_out_user', password: 'secret_sauce' },
  { username: 'problem_user', password: 'secret_sauce' }
];

// 3. Loop through test data
for (const data of loginData) {

  test(`Login test for ${data.username}`, async ({ page }) => {

    // 4. Navigate to application
    await page.goto('https://www.saucedemo.com/');

    // 5. Enter username
    await page.locator('#user-name').fill(data.username);

    // 6. Enter password
    await page.locator('#password').fill(data.password);

    // 7. Click login button
    await page.locator('#login-button').click();

    // 8. Validation (example)
    if (data.username === 'standard_user') {
      await expect(page).toHaveURL(/inventory/);
    } else {
      await expect(page.locator('[data-test="error"]')).toBeVisible();
    }

  });

}