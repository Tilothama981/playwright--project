import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.sdetunicorns.com/');

  await page.locator('#menu-item-493').getByRole('link', { name: 'Contact' }).click();
  
  await page.getByRole('textbox', { name: 'Name *' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).fill('ete');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('ret@gmail.com');
  await page.getByRole('textbox', { name: 'Phone *' }).click();
  await page.getByRole('textbox', { name: 'Phone *' }).fill('99089877711');
  await page.getByRole('textbox', { name: 'Message' }).click();
  await page.getByRole('textbox', { name: 'Message' }).fill('est');
 
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('navigation', { name: 'Breadcrumbs' })).toBeVisible();

  await page.getByText('Thanks for contacting us! We').click();
});