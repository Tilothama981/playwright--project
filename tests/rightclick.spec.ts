import { test, expect } from '@playwright/test';

test('right click and verify alert', async ({ page }) => {
  // Step 1: Navigate to the page
  await page.goto('https://the-internet.herokuapp.com/context_menu');

  // Step 2: Listen for alert BEFORE triggering it
  page.on('dialog', async (dialog) => {
    // Step 3: Verify alert message
    expect(dialog.message()).toBe('You selected a context menu');

    // Step 4: Accept the alert
    await dialog.accept();
  });

  // Step 5: Perform right-click on the box
  await page.click('#hot-spot', { button: 'right' });
});