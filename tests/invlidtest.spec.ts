import { test, expect, Page } from '@playwright/test';

test('Select dropdown with invalid option handling', async ({ page }) => {

  await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');

  const dropdown = page.locator("select[name='state']");

  // ✅ Case 1: Valid selection
  await dropdown.selectOption({ label: 'NCR' });
  console.log('Selected valid option: NCR');

  // ❌ Case 2: Invalid selection (will throw error)
  try {
    await dropdown.selectOption({ label: 'InvalidState' });
  } catch (error) {
    console.log('❌ Error occurred: Option does not exist in dropdown');
  }

  // ✅ Case 3: Safe selection using validation
  const options = await dropdown.locator('option').allTextContents();

  const valueToSelect = 'Uttar Pradesh';

  if (options.includes(valueToSelect)) {
    await dropdown.selectOption({ label: valueToSelect });
    console.log(`✅ Safely selected: ${valueToSelect}`);
  } else {
    console.log(`⚠️ Option "${valueToSelect}" not found in dropdown`);
  }

});