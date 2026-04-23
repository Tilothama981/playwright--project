// // tests/navigation.spec.ts
 import { test, expect } from './fixtures/testFixtures';


// test('Validate all navigation tabs', async ({
//   page,
//   homePage,
//   aboutPage,
//   shopPage,
//   //blogPage,
//  contactPage,
// //   myAccountPage,
// }) => {
//   await page.goto('https://practice.sdetunicorns.com');

//   // About
//   await homePage.clickAbout();
//   await expect(aboutPage.heading).toBeVisible();

//   // Shop
//   await homePage.clickShop();
//   await expect(await shopPage.isProductsVisible()).toBeTruthy();

//   //Blog
// //   await homePage.clickBlog();
// //   expect(await blogPage.getPostCount()).toBeGreaterThan(0);

// //   // Contact
// await homePage.clickContact();
//   await contactPage.submitForm(
//     'Test User',
//     'test@test.com',
//     '9999999999',
//     'Hello'
//   );
//   await contactPage.verifySuccessMessage();
// //   // My Account
// //   await homePage.clickMyAccount();
// //   await expect(await myAccountPage.isLoginVisible()).toBeTruthy();
// });
//import { test, expect } from '../fixtures/testFixtures';
import ContactPage from '../pages/ContactPage';

test('Validate Contact Form', async ({ page, homePage }) => {

  // Step 1: Open Home Page
  await homePage.openHome();

  // Step 2: Navigate to Contact
  await homePage.clickContact();

  // ✅ Wait for form to load
  await page.waitForSelector('#wpforms-161-field_0');

  // ✅ Create ContactPage AFTER navigation
  const contact = new ContactPage(page);

  // Step 3: Submit Form
  await contact.submitForm(
    'Test User',
    'test@test.com',
    '9999999999',
    'Hello Testing'
  );

  // Step 4: Verify Success
  await contact.verifySuccessMessage();
});