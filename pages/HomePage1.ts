import { Page } from '@playwright/test';

export default class HomePage1 {
  constructor(private page: Page) {}

  async goTo() {
    await this.page.goto('https://practice.sdetunicorns.com/');
  }

  async clickContact() {
    await this.page.locator('#menu-item-493').getByRole('link', { name: 'Contact' }).click();
  }
}