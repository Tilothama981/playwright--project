import { test, expect } from '@playwright/test';

test('Add elements and soft assert delete buttons', async ({ page }) => {

  // 1. Navigate to page
  await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

  // 2. Click "Add Element" 3 times
  const addBtn = page.locator('text=Add Element');

  for (let i = 0; i < 3; i++) {
    await addBtn.click();
  }

  // 3. Locate all Delete buttons
   const deleteButtons = page.locator('button:has-text("Delete")');
 //const deleteButtons = page.locator('text=Delete);

  const count = await deleteButtons.count();
  console.log('Total Delete Buttons:', count); // should be 3

  // 4. Soft assert each existing button
  for (let i = 0; i < count; i++) {
    await expect.soft(deleteButtons.nth(i)).toBeVisible();
  }

  // 5. Soft assert 4th button (index 3 → should fail)
  await expect.soft(deleteButtons.nth(3)).toBeVisible();

});

// 6. Log soft assertion summary
test.afterEach(async ({}, testInfo) => {

  const errorCount = testInfo.errors.length;

  console.log('🔴 Total Soft Assertion Failures:', errorCount);

});