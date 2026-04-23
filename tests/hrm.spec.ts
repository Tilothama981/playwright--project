import { test, expect } from '@playwright/test';

test('hrm attach file', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/221');

 
  await page.getByRole('button', { name: 'Add' }).click();
});
