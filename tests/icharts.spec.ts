// import { test, expect } from '@playwright/test';

// test.describe('ichart', () => {

//   test('Validate Vol Chg value', async ({ page }) => {
//     await page.goto('https://www.icharts.in/opt/index.php');

//     const locator = page
//       .locator('.bar-data')
//       .first()
//       .locator('[title="Vol Chg"]');

//     await expect(locator).toBeVisible();

//     const value = (await locator.textContent())?.trim();
//     console.log('Value:', value);

//     await expect(value).toBe('449.9%');
//   });

// });

import { test, expect } from '@playwright/test';

test('Validate all percentage values', async ({ page }) => {
  await page.goto('https://www.icharts.in/opt/index.php');

  const elements = page.locator('.bar-data div[title]');
  const count = await elements.count();

  console.log('Total elements:', count);

  for (let i = 0; i < count; i++) {
    const text = (await elements.nth(i).textContent())?.trim();

    console.log(`Value ${i}:`, text);

    // ✅ Check it contains %

    await expect(text).toContain('%');

    // ✅ Validate format (number + %)
    expect(text).toMatch(/-?\d+(\.\d+)?%/);
  }
});
        