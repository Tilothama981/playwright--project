import * as path from 'path';
import { test, expect } from '@playwright/test';

test('file upload', async ({ page }) => {
  // Step 1: Open the upload page
  await page.goto('https://the-internet.herokuapp.com/upload', {
    waitUntil: 'domcontentloaded',
  });

  // Step 2: Resolve the file path (absolute path)
  //const filepath = path.resolve('TestScriptPlaywright/playwright/tests/data/upload-sample.txt');
const filepath = path.resolve(__dirname, 'data', 'upload-sample.txt');
  //const filepath = path.join(__dirname, 'data', 'upload-sample.txt');
  // Step 3: Upload the file
  await page.setInputFiles('#file-upload', filepath);

  // Step 4: Click upload button
  await page.click('#file-submit');

  // Step 5: Verify upload success message
  await expect(page.locator('h3')).toHaveText('File Uploaded!');

  // Step 6: Verify uploaded file name
  await expect(page.locator('#uploaded-files')).toHaveText('upload-sample.txt');
});