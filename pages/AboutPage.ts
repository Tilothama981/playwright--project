import { Locator, Page } from '@playwright/test';
//import { LoadFnOutput } from 'node:module';
import BasePage from './BasePage';
//import { constructor } from 'assert';

export default class AboutPage extends BasePage {
  heading: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.locator('h1');
  }

  async getHeadingText() {
    return await this.heading.textContent();
  }
}