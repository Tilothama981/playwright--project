import { test, expect } from '@playwright/test';

let page:any;

// Runs once before all tests
test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  console.log('Browser launched');
});

// Runs before each test
test.beforeEach(async () => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  console.log('Logged in before test');
});

// Test 1
test('Verify product page title', async () => {
  await expect(page).toHaveTitle(/Swag Labs/);
});

// Test 2
test('Verify product is visible', async () => {
  await expect(page.locator('.inventory_list')).toBeVisible();
});

// Runs after each test
test.afterEach(async () => {
  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');
  console.log('Logged out after test');
});

// Runs once after all tests
test.afterAll(async () => {
  await page.close();
  console.log('Browser closed');
});