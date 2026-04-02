import { test, Page } from '@playwright/test';

test('dropdown core smoke', async ({ page }) => {

  await page.goto('https://ui.vision/demo/webtest/frames/');

  // ✅ Approach 1: Using page.frame()
  const frame = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' });

  await frame?.locator('//input[@name="mytext1"]').fill('priyanka');

  // ✅ Approach 2: Using frameLocator (Recommended)
  const inputbox = page
    .frameLocator("frame[src='frame_1.html']")
    .locator('//input[@name="mytext1"]');

  await inputbox.fill('priyanka');

});