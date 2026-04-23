import { Locator, Page } from '@playwright/test';
import BasePage from './BasePage';

export default class HomePage extends BasePage {

  aboutLink: Locator;
  shopLink: Locator;
  contactLink: Locator;

  constructor(page: Page) {
    super(page);

    const header = page.locator('header');

    this.aboutLink = header.getByRole('link', { name: 'About' });
    this.shopLink = header.getByRole('link', { name: 'Shop' });
    this.contactLink = header.getByRole('link', { name: 'Contact' });
  }

  async openHome() {
    await this.page.goto('https://practice.sdetunicorns.com');
  }

  async clickAbout() {
    await this.aboutLink.click();
  }

  async clickShop() {
    await this.shopLink.click();
  }

  async clickContact() {
    await this.contactLink.click();
    await this.page.waitForLoadState('domcontentloaded');
  }
}


