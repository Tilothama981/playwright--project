import { test, expect } from '@playwright/test';

test('Upload file using in-memory Buffer', async ({ page }) => {

  // 1. Navigate to page
  await page.goto('https://the-internet.herokuapp.com/upload');

  // 2. Create file in memory
  const fileName = 'sample.txt';
  const fileContent = Buffer.from('Hello, this is a test file created in memory!');

  // 3. Upload using Buffer
  await page.setInputFiles('#file-upload', {
    name: fileName,
    mimeType: 'text/plain',
    buffer: fileContent
  });

  // 4. Click Upload
  await page.click('#file-submit');

  // 5. Verify uploaded file name
  const uploadedFile = page.locator('#uploaded-files');
  await expect(uploadedFile).toHaveText(fileName);

});