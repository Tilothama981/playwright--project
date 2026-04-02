import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
     await page.goto('https://rahulshettyacademy.com/dropdownsPractise/');

  await expect(page.getByRole('row', { name: 'One Way Round Trip Multicity' })).toBeVisible();

  
  // await expect(page.getByRole('row', { name: 'India Adampur (AIP) Amritsar' })).toBeVisible();

  await page.locator('#ctl00_mainContent_ddl_originStation1_CTXT').click();
  await expect(page.getByRole('row', { name: 'India Adampur (AIP) Ahmedabad' })).toBeVisible();

  await page.getByRole('link', { name: 'Ahmedabad (AMD)' }).click();
  await expect(page.getByRole('row', { name: 'India Adampur (AIP) Amritsar' })).toBeVisible();

  await page.getByRole('link', { name: 'Hyderabad (HYD)' }).click();
  await expect(page.getByRole('row', { name: '6 7 8 9 10 11' })).toBeVisible();

  await page.getByRole('link', { name: '5' }).first().click();
  await page.getByRole('button', { name: 'Search' }).click();
});

//===============================================
// import { test, expect, Page } from '@playwright/test';

// // 🔹 Reusable function for custom dropdown
// async function selectCity(
//   page: Page,
//   dropdownSelector: string,
//   optionValue: string
// ): Promise<void> {

//   // Open dropdown
//   await page.click(dropdownSelector);

//   // Select option
//   const option = page.locator(`a[value='${optionValue}']`);
//   await option.waitFor({ state: 'visible' });
//   await option.click();
// }

// test('Select From and To cities', async ({ page }) => {
//   await page.goto('https://rahulshettyacademy.com/dropdownsPractise/');

//   // ✈️ Select FROM (Origin)
//   await selectCity(
//     page,
//     '#ctl00_mainContent_ddl_originStation1',
//     'HYD'   // Hyderabad
//   );

//   // ✈️ Select TO (Destination)
//   await selectCity(
//     page,
//     '#ctl00_mainContent_ddl_destinationStation1',
//     'DEL'   // Delhi
//   );

//   // ✅ Validation (optional but recommended)
//   await expect(page.locator('#ctl00_mainContent_ddl_originStation1'))
//     .toHaveValue('HYD');

//   await expect(page.locator('#ctl00_mainContent_ddl_destinationStation1'))
//     .toHaveValue('DEL');
// });