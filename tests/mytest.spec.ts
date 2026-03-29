import { test, expect } from "@playwright/test";

test("Verify title of the page", async ({ page }) => {
  await page.goto("https://www.amazon.in/");

  await expect(page).toHaveTitle(/Amazon/); // safer than exact match
});
