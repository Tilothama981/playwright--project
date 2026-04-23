import { test, chromium } from '@playwright/test';

test('scroll page example', async () => {
  // Launch browser
  const browser = await chromium.launch({
    channel: 'chrome',
    headless: false
  });

  // Create new page
  const page = await browser.newPage();

  // Navigate to website
  await page.goto('https://www.orangehrm.com/en/contact-sales/', {
    waitUntil: 'domcontentloaded',
  });

  // Scroll to specific element (Careers link)
  const careersLink = page.locator('a[href="https://orangehrm.com/company/careers"]');
  await careersLink.scrollIntoViewIfNeeded();

  // Scroll to bottom of the page
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  // Wait for observation
  await page.waitForTimeout(5000);

  // Close browser
  await browser.close();
});