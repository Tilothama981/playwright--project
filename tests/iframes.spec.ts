import { test, expect } from '@playwright/test';

test('handle nested frames checkbox', async ({ page }) => {

  await page.goto('https://ui.vision/demo/webtest/frames/');

  // Switch to Frame 3
  const frame3 = page.frameLocator('frame[src="frame_3.html"]');

  // Switch to child iframe inside frame 3
  const childFrame = frame3.frameLocator('iframe');

  // Click checkbox
  await childFrame.locator('//*[@id="i6"]/div[3]/div').click();

});