import { test, expect, Locator } from '@playwright/test';

test('google core smoke', async ({ page }) => {

 
await page.goto('https://www.facebook.com/reg/?entry_point=login&next=');
 // await expect(page.getByRole('combobox', { name: 'Select day' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Name First name Surname' }).click();
  await page.getByRole('textbox', { name: 'Name First name Surname' }).fill('tara');
  
  await page.getByRole('button', { name: 'Clear text' }).click();
  await page.getByRole('textbox', { name: 'Name First name Surname' }).fill('tkp');
  await page.getByRole('textbox', { name: 'Surname', exact: true }).click();
  await page.getByRole('textbox', { name: 'Surname', exact: true }).fill('thh');
  await page.getByRole('combobox', { name: 'Select day' }).locator('svg').click();
  await expect(page.getByRole('listbox', { name: 'Select day' })).toBeVisible();
  //await page.getByRole('textbox', { name: 'Surname', exact: true }).click();
 // await page.getByRole('textbox', { name: 'Name First name Surname' }).fill('naik');
  //await expect(page.getByRole('textbox', { name: 'Name First name Surname' })).toBeVisible();

//   await page.getByRole('textbox', { name: 'Surname', exact: true }).click();
//   await page.getByRole('textbox', { name: 'Surname', exact: true }).click();
//   await page.getByRole('textbox', { name: 'Surname', exact: true }).fill('');
  await page.getByRole('combobox', { name: 'Select day' }).locator('svg').click();
  await expect(page.getByRole('listbox', { name: 'Select day' })).toBeVisible();

  await page.locator('div').filter({ hasText: /^2$/ }).nth(1).click();
  await page.getByRole('combobox', { name: 'Select month' }).locator('svg').click();
  await expect(page.getByRole('listbox', { name: 'Select month' })).toBeVisible();

  await page.getByText('February').click();
  await page.getByLabel('Select year').locator('div').filter({ hasText: /^Year$/ }).click();
  await expect(page.getByRole('listbox', { name: 'Select year' })).toBeVisible();

  await page.getByText('2025').click();
});