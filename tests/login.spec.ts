import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login using POM', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('pavanol', 'test@123');

  // assertion example
  //await expect(page).toHaveURL(/demoblaze/);
});
