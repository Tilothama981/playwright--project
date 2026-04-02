import { test, expect, Locator } from '@playwright/test';

test('google core smoke', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  await page.waitForTimeout(5000);  // wait for page load
  const dropdown: Locator = page.locator('#dropdown-class-example');
  await selectDropDownByValue(dropdown, 'option1');          // select by value
  await selectDropDownByVisibleText(dropdown, 'Option2');    // select by label
  await selectDropDownByIndex(dropdown, 3);                  // select by index
});
// ─── Helper Functions ───────────────────────────────────────
async function selectDropDownByValue(
  element: Locator,
  labelvalue: string
): Promise<void> {
  await element.selectOption({ value: labelvalue });
  await expect(element).toHaveValue(labelvalue);
}


async function selectDropDownByVisibleText(
  element: Locator,
  labelvisbletext: string
): Promise<void> {
  await element.selectOption({ label: labelvisbletext });
}


async function selectDropDownByIndex(
  element: Locator,
  indexval: number
): Promise<void> {
  await element.selectOption({ index: indexval });
}

