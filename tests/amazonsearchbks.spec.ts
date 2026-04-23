// tests/books.spec.ts
import { test, expect } from '@playwright/test';

test('Fetch and display book titles', async ({ page }) => {

  await page.goto('https://www.amazon.in/');

  // 🔹 Search for books
  await page.locator('#twotabsearchtextbox')
    .fill('books');

  await page.keyboard.press('Enter');

  // 🔹 Wait for results to load
  await expect(page.locator('span.a-truncate-cut').first()).toBeVisible();

  // 🔹 Get all book titles
  const books = page.locator('span.a-truncate-cut');
  const count = await books.count();

  for (let i = 0; i < count; i++) {

    const bookName = await books.nth(i).innerText();

    // Print in terminal
    console.log(`Book ${i + 1}: ${bookName.trim()}`);
  }
});