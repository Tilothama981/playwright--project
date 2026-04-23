import { test } from '@playwright/test';

test('drag and drop using dragTo', async ({ page }) => {

  await page.goto('https://demoqa.com/droppable');

  const source = page.locator('#draggable');
  const target = page.locator('#droppable');

  await source.dragTo(target);

});