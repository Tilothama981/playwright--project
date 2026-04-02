import { test, Page } from '@playwright/test';

test('dropdown core smoke', async ({ page }) => {

  await page.goto('https://naveenautomationlabs.com/opencart/ui/dropdowns.html');

  await selectvalue(page, 'Choose your preferred web framework', 'Angular');
  await selectvalue(page, 'Choose your preferred programming language', 'Java');

});

// Reusable function
async function selectvalue(page: Page, dropdownLabel: string, value: string) {

  // Click on dropdown based on label
  await page.locator(`//div[@class="select-trigger"]//span[text()="${dropdownLabel}"]`).click();

  // Select value
  await page.getByText(value, { exact: true }).click();
}