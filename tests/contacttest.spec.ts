import { test } from '@playwright/test';
import HomePage1 from '../pages/HomePage1';
import ContactPage1 from '../pages/ContactPage1';
import testData from './fixtures/contactData.json';

// Loop through JSON data
for (const [index, data] of testData.entries()) {

  test(`Contact Form POM Test - Data Set ${index + 1}`, async ({ page }) => {

    const homePage1 = new HomePage1(page);
    const contactPage1 = new ContactPage1(page);

    // Navigate
    await homePage1.goTo();
    await homePage1.clickContact();

    // Fill + Submit
    await contactPage1.fillForm(
      data.name,
      data.email,
      data.phone,
      data.message
    );

    await contactPage1.submitForm();

    // Validation
    //await contactPage.verifySuccess();

  });

}