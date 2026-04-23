import { test } from '@playwright/test';

test('Find book with highest price', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  const rows = page.locator('table[name="BookTable"] tbody tr');
  const rowCount = await rows.count();

  let maxPrice = 0;
  let maxBookName = '';

  for (let i = 1; i < rowCount; i++) {

    const priceText = await rows.nth(i).locator('td').nth(3).innerText();
    const price = parseInt(priceText); // convert to number

    if (price > maxPrice) {
      maxPrice = price;
      maxBookName = await rows.nth(i).locator('td').nth(0).innerText();
    }
  }

  console.log('Highest Price Book:', maxBookName);
  console.log('Price:', maxPrice);

});