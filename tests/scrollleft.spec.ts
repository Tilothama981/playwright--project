import { test, expect } from '@playwright/test';

test('Horizontal scroll using evaluate', async ({ page }) => {

  // 1. Navigate
  await page.goto('https://the-internet.herokuapp.com/horizontal_slider');

  // 2. Locate slider container (parent div)
  const sliderContainer = page.locator('#content');

  // 3. Scroll horizontally using evaluate
  await sliderContainer.evaluate((el) => {
    el.scrollLeft = 200;  // move right
  });

  // 4. Verify scroll position
  const scrollValue = await sliderContainer.evaluate(el => el.scrollLeft);

  expect(scrollValue).toBeGreaterThan(0);

});