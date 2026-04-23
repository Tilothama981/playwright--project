import { test } from '@playwright/test';

test('mouse hover example', async ({ page }) => {

  await page.goto('https://www.flipkart.com/');

  // Close login popup
  const closeBtn = page.locator('button:has-text("✕")');
  if (await closeBtn.isVisible()) {
    await closeBtn.click();
  }

  const loginButton = page.locator('text=Login');

  // Hover
  await loginButton.hover();

  // Better locator for dropdown
  const dropdownItems = page.locator('a[href*="account"], div[role="menu"] a');

  await dropdownItems.first().waitFor({ state: 'visible' });

  const allTexts = await dropdownItems.allTextContents();

  console.log('Dropdown Items:', allTexts);
});