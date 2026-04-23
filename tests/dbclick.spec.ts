import { test, expect } from '@playwright/test';

test('double click inside iframe', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://api.jquery.com/dblclick/');

  // Switch to iframe
  const frame = page.frameLocator('iframe');

  // Locate the box element
  const box = frame.locator('div');

  // Perform double click
  await box.dblclick();

  // Verify the effect (text changes after double click)
  await expect(box).toHaveClass(/dbl/);
});