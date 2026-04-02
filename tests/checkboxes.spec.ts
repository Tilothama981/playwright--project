import { test, expect } from '@playwright/test';

test('Validate all check boxes', async ({ page }) => {
  await page.goto('http://localhost:4200/pages/forms/layouts');
  await page.getByText('Modal & Overlays').click();
  await page.getByText('Toastr').click()
  await page.getByRole('checkbox',{name:'Hide on click'}).uncheck({force:true});
  await page.getByRole('checkbox',{name:'Prevent arising of duplicate toast'}).check({force:true}) 
 const  allcheckbox=page.getByRole('checkbox');
 for(const ref of await allcheckbox.all() ){
    await ref.uncheck({force:true});
    expect
 }


})
