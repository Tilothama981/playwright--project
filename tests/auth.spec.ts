import { test } from '@playwright/test';

test('Create auth session', async ({ page }) => {

    // Step 1 — Navigate to login page
    await page.goto('https://www.saucedemo.com/');

    
    // Step 2 — Fill in credentials
    await page.locator('id=user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');

    // Step 3 — Click login button
    await page.locator('#login-button').click();

    // Step 4 — Wait for successful redirect
    await page.waitForURL('https://www.saucedemo.com/inventory.html');

    // Step 5 — Save the session to JSON file
    await page.context().storageState({ path: 'auth/sauce-session.json' });

});



