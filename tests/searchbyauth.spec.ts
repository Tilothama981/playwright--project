import { test } from '@playwright/test';

test('Print author of "Master In Selenium"', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  const rows = page.locator('table[name="BookTable"] tbody tr');
  const rowCount = await rows.count();

  for (let i = 1; i < rowCount; i++) {

    const bookName = await rows.nth(i).locator('td').nth(0).innerText();

    if (bookName === 'Master In JS') {

      const author = await rows.nth(i).locator('td').nth(1).innerText();
      console.log('Author:', author);

      break; // stop once found
    }
  }

});