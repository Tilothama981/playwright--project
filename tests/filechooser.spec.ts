import { test, expect } from '@playwright/test';
import path from 'path';

test('Upload file using filechooser event', async ({ page }) => {

  // 1. Navigate to page
  await page.goto('https://the-internet.herokuapp.com/upload');

  // 2. Prepare file path
 
  const filePath = path.join(__dirname, 'data', 'upload-sample.txt');

  // 3. Listen for file chooser event
  const fileChooserPromise = page.waitForEvent('filechooser');

  // 4. Trigger file chooser (click input)
  await page.click('#file-upload');

  // 5. Get file chooser object
  const fileChooser = await fileChooserPromise;

  // 6. Set file
  await fileChooser.setFiles(filePath);

  // 7. Click Upload
  await page.click('#file-submit');

  // 8. Verify uploaded file name
  const uploadedFile = page.locator('#uploaded-files');
  await expect(uploadedFile).toHaveText('upload-sample.txt');

});