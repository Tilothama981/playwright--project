import { test, expect } from '@playwright/test';

test('Dynamic loading - verify Hello World text', async ({ page }) => {

  // 1. Navigate to page
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

  // 2. Click Start button
  await page.click('#start button');

  // 3. Wait for element to be visible
  const textElement = page.locator('#finish h4');
  await textElement.waitFor({ state: 'visible' });

  // 4. Hard assertion
  await expect(textElement).toHaveText('Hello World!');

});