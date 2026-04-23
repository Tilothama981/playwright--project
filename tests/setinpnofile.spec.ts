import { test, expect } from '@playwright/test';

test('Clear file input and verify no file selected', async ({ page }) => {

  // 1. Navigate to page
  await page.goto('https://the-internet.herokuapp.com/upload');

  const fileInput = page.locator('#file-upload');

  // 2. Set a file (using Buffer to avoid path issues)
  await fileInput.setInputFiles({
    name: 'upload-sample.txt',
    mimeType: 'text/plain',
    buffer: Buffer.from('Test content')
  });

  // 3. Verify file is set (value contains filename)
  const valueBefore = await fileInput.inputValue();
  console.log('Before clear:', valueBefore);

  await expect(valueBefore).toContain('upload-sample.txt');

  // 4. Clear file input
  await fileInput.setInputFiles([]);

  // 5. Assert input is empty
  const valueAfter = await fileInput.inputValue();
  console.log('After clear:', valueAfter);

  await expect(valueAfter).toBe('');

});