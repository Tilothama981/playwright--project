import { test, expect } from '@playwright/test';

test('Open 3 tabs, iterate and collect titles', async ({ page, context }) => {

  // 1. Open first page (main)
  await page.goto('https://the-internet.herokuapp.com/windows');

  // 2. Open 2 more tabs
  const page2 = await context.newPage();
  await page2.goto('https://the-internet.herokuapp.com/');

  const page3 = await context.newPage();
  await page3.goto('https://the-internet.herokuapp.com/drag_and_drop');

  // 3. Get all pages
  const allPages = context.pages();

  console.log('Total Pages:', allPages.length); // should be 3

  // 4. Array to store titles
  const titles = [];

  // 5. Iterate through pages
  for (const pg of allPages) {

    await pg.waitForLoadState();

    const title = await pg.title();
    titles.push(title);

    console.log('Page Title:', title);
  }

  // 6. Assertion
  await expect(allPages.length).toBe(3);
  await expect(titles.length).toBe(3);

  console.log('All Titles:', titles);

});