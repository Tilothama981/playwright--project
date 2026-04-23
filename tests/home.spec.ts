import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage.js';
import About from '../pages/AboutPage.js';  

const BaseUrl = 'https://practice.sdetunicorns.com/';

test.describe('Home', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(BaseUrl);
  });

  test('clickstartbutton', async ({ page }) => {
    const homepage = new HomePage(page);
    await homepage.getStartedBtn.click();
   await expect(homepage.headingText).toContainText('Begin your test automation journey! Check out these courses by clicking on the links below - ');
  })

  test('clickaboutlink', async ({ page }) => {

    const aboutpage = new About(page);

    await aboutpage.aboutlink.click();

    // ✅ Assertion instead of console.log
    await expect(aboutpage.aboutheadingText).toHaveText('Our Story');

    await expect(aboutpage.aboutmission).toHaveText('Our Mission');

  });

});