import { test as base } from '@playwright/test';
import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/AboutPage';
import ShopPage from '../../pages/ShopPage';
//import BlogPage from '../../pages/BlogPage';
import ContactPage from '../../pages/ContactPage';

// import MyAccountPage from '../pages/MyAccountPage';

type MyFixtures = {
  homePage: HomePage;
  aboutPage: AboutPage;
  shopPage: ShopPage;
   //blogPage: BlogPage;
   contactPage: ContactPage;
  // myAccountPage: MyAccountPage;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  aboutPage: async ({ page }, use) => {
    await use(new AboutPage(page));
  },
  shopPage: async ({ page }, use) => {
    await use(new ShopPage(page));
  },
//   blogPage: async ({ page }, use) => {
//     await use(new BlogPage(page));
//   },
//   contactPage: async ({ page }, use) => {
//     await use(new ContactPage(page));
//   },
//   myAccountPage: async ({ page }, use) => {
//     await use(new MyAccountPage(page));
//   },
});

export { expect } from '@playwright/test';