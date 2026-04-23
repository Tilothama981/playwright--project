// pages/ShopPage.ts
import { Page, Locator } from '@playwright/test';
import BasePage from './BasePage';

export default class ShopPage extends BasePage {
  products: Locator;

  constructor(page: Page) {
    super(page);
    this.products = page.locator('.products');
  }

  async isProductsVisible() {
    return await this.products.isVisible();
  }
}