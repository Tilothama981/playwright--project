import { test, Page } from '@playwright/test';

test('reusable func', async ({ page }) => {

  await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');

  await selectDropdown(page, 'state', 'Uttar Pradesh');
  await selectDropdown(page, 'city', 'Agra');

});
//. Write a reusable function called selectDropdown(page, dropdownText, optionLabel) 
// and use it to select State and City.

// Reusable function
async function selectDropdown(page: Page, dropdownText: string, optionLabel: string) {

  const dropdown = page.locator(`select[name='${dropdownText}']`);

  await dropdown.selectOption({ label: optionLabel });
}