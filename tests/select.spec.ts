import { test, expect } from '@playwright/test';

// test('google core smoke', async ({ page }) => {

//   // ✅ 1. Navigate to page
//   await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
//   await expect(page).toHaveURL(/AutomationPractice/);

//   // ✅ 2. Verify dropdown is visible
//   const dropdown = page.locator('#dropdown-class-example');
//   await expect(dropdown).toBeVisible();

//   // ✅ 3. Select by visible text (Option1)
//   await page.selectOption('#dropdown-class-example', { label: 'Option1' });

//   // Assertion
//   await expect(dropdown).toHaveValue('option1');

//   // ✅ 4. Select by value (Option2)
//   await page.selectOption('#dropdown-class-example', 'option2');

//   // Assertion
//   await expect(dropdown).toHaveValue('option2');

//   // ✅ 5. Select by index (index = 2 → Option3)
//   await page.selectOption('#dropdown-class-example', { index: 2 });

//   // Assertion
//   await expect(dropdown).toHaveValue('option3');

//   // ✅ 6. Validate selected value using inputValue()
//   const selected = await dropdown.inputValue();

//   // Assertion
//   expect(selected).toBe('option3');

// });

//--------------------------------
//"Import Playwright test tools, create a test named 'drop down test', open a browser page, and execute steps inside the test block."
test('drop down test',async({page})=>{
  //navigate to page
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  await expect(page).toHaveURL(/AutomationPractice/);
//verify dropdown visible
  const dropdwn=page.locator('#dropdown-class-example')
    await expect(dropdwn).toBeVisible;
    //select option
  await page.selectOption('#dropdown-class-example',{value:'option1'})
  await expect(dropdwn).toHaveValue('option1')



})
