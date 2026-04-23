import { test, expect } from '@playwright/test';
import testData from './fixtures/contactData.json';

// Loop through data
testData.forEach((data, index) => {

  test(`Contact Form Test - Data Set ${index + 1}`, async ({ page }) => {

    await page.goto('https://practice.sdetunicorns.com/');

    // Click Contact
   await page.locator('#menu-item-493').getByRole('link', { name: 'Contact' }).click();

    // Fill form
    await page.getByRole('textbox', { name: 'Name *' }).fill(data.name);
    await page.getByRole('textbox', { name: 'Email *' }).fill(data.email);
    await page.getByRole('textbox', { name: 'Phone *' }).fill(data.phone);
    await page.getByRole('textbox', { name: 'Message' }).fill(data.message);

    // Submit
    await page.getByRole('button', { name: 'Submit' }).click();

    // Validation
   // await expect(page.locator('.wpforms-confirmation-container'))
    //  .toBeVisible();

  });

});