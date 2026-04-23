import { test, Page } from '@playwright/test';
test('dropdown core smoke', async ({ page }) => {
    await page.goto('https://www.spicejet.com/');
    // Hover over the parent 'Add-ons' menu to reveal children
    // await page.getByText('Add-ons', { exact: true }).hover();
    // // Click the first matching child item
    // await page.getByText('Extra Seat', { exact: true }).first().click();
     await page.getByText('Travel Policies', { exact: true }).hover();
    // Click the first matching child item
    await page.getByText('Tariffs', { exact: true }).first().click();
});
