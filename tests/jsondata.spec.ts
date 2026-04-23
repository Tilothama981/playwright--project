import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import path from 'path/win32';

// Define Type
type RegData = {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  password: string;
  subscribeNewsletter: 'Yes' | 'No';
};

// Read JSON file
const filePath = path.join(__dirname, 'data', 'register.json');
const registrationData: RegData[] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

// Loop through test data
for (const user of registrationData) {

  test(`Registration test - ${user.firstName} ${user.lastName}`, async ({ page }) => {

    // Navigate to registration page
    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/register');

    // Fill form
    await page.getByRole('textbox', { name: 'First Name' }).fill(user.firstName);
    await page.getByRole('textbox', { name: 'Last Name' }).fill(user.lastName);
    await page.getByRole('textbox', { name: 'E-Mail' }).fill(user.email);
    await page.getByRole('textbox', { name: 'Telephone' }).fill(user.telephone);
    await page.locator('#input-password').fill(user.password);
    await page.locator('#input-confirm').fill(user.password);

    // Newsletter subscription
    if (user.subscribeNewsletter === 'Yes') {
      await page.getByLabel('Yes').check();
    } else {
      await page.getByLabel('No').check();
    }

    // Agree to policy
    await page.locator('input[name="agree"]').check();

    // Submit form
    await page.getByRole('button', { name: 'Continue' }).click();

    // Assertion
    //await expect(page.locator('#content h1')).toHaveText('Your Account Has Been Created!');

  });

}