import { test, expect } from '@playwright/test';

test('Move slider using mouse actions', async ({ page }) => {

  // 1. Open URL
  await page.goto('https://jqueryui.com/slider/');

  // 2. Switch to iframe
  const frame = page.frameLocator('.demo-frame');

  // 3. Locate slider handle
  const slider = frame.locator('#slider span');

  // 4. Get current position (bounding box)
  const box = await slider.boundingBox();
  if (!box) {
    throw new Error('Slider handle not found or not visible');
  }

  // 5. Calculate start position (center of handle)
  const startX = box.x + box.width / 2;
  const startY = box.y + box.height / 2;

  // 6. Perform mouse actions
  await page.mouse.move(startX, startY);
  await page.mouse.down();

  // Move 100px to the right
  await page.mouse.move(startX + 100, startY, { steps: 10 });

  await page.mouse.up();

});