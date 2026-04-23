// pages/BlogPage.ts
import { Page, Locator } from '@playwright/test';
import BasePage from './BasePage';

export default class BlogPage extends BasePage {
  posts: Locator;

  constructor(page: Page) {
    super(page);
    //this.posts = page.locator('article');
    this.posts = page.getByRole('link', { name: 'Blog' }).first();
  }

  async getPostCount() {
    return await this.posts.count();
  }
}