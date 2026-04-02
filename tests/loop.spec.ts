import { test, Page } from '@playwright/test';

test('Select all states one by one', async ({ page }) => {

  await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');

  const dropdown = page.locator("select[name='state']");

  // Get all options
  const options = await dropdown.locator('option').all();

  for (let i = 1; i < options.length; i++) {  // skip first "Choose State"

    const value = await options[i].textContent();

    // Select each option
    await dropdown.selectOption({ index: i });

    // Print selected value
    console.log('Selected State:', value);

    await page.waitForTimeout(1000); // just to see execution (optional)
  }

});