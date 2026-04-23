import { test, expect } from '@playwright/test';

test('Scroll to last paragraph and verify visibility', async ({ page }) => {

  // 1. Navigate to page
  await page.goto('https://the-internet.herokuapp.com/large');

  // 2. Locate all paragraphs
  const paragraphs = page.locator('.row .column p');

  // 3. Get last paragraph
  const lastParagraph = paragraphs.last();

  // 4. Scroll into view
  await lastParagraph.scrollIntoViewIfNeeded();

  // 5. Assert visible
  await expect(lastParagraph).toBeVisible();

});