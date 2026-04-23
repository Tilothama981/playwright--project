import { test, expect } from '@playwright/test';

test('google core smoke', async ({ page }) => {

  page.on('dialog', async (dialog) => {// Listen for dialog events
    console.log(dialog.message());// Log the dialog message
    await dialog.accept('anu');
    console.log(dialog.type());
    console.log('.................');
  });

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  await page.getByText('Click for JS Alert').click();
  await page.getByText('Click for JS Confirm').click();
  await page.getByText('Click for JS Prompt').click();

});