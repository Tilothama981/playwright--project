import {test, expect} from '@playwright/test';
test('Validate text contents values', async ({ page }) => {
    await page.goto('http://localhost:4200/pages/forms/layouts');
    const basicForm=page.locator('nb-card',{hasText:"Basic form"});
    const Emailf=basicForm.getByRole('textbox',{name:"Email"})
    await Emailf.fill('Tkp');
    await basicForm.getByRole('textbox',{name:"password"}).fill('iueh')
    await basicForm.getByRole('button').click();

})