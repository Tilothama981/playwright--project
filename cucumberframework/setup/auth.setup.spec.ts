import { test as setup } from '@playwright/test';

const users = [
  {
    role: 'standard',
    username: 'standard_user',
    password: 'secret_sauce',
    file: 'auth/standard-session.json'
  },
  {
    role: 'admin',
    username: 'problem_user',   // SauceDemo doesn't have real admin, using another user
    password: 'secret_sauce',
    file: 'auth/admin-session.json'
  },
  {
    role: 'manager',
    username: 'performance_glitch_user',
    password: 'secret_sauce',
    file: 'auth/manager-session.json'
  }
];

for (const user of users) {

  setup(`Login & save session for ${user.role}`, async ({ page }) => {

    // Step 1: Navigate
    await page.goto('https://www.saucedemo.com/');

    // Step 2: Login
    await page.locator('#user-name').fill(user.username);
    await page.locator('#password').fill(user.password);
    await page.locator('#login-button').click();

    // Step 3: Wait for login success
    await page.waitForURL('**/inventory.html');

    // Step 4: Save session
    await page.context().storageState({ path: user.file });

  });
}