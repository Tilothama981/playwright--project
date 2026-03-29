import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // locators
  private loginLink = '#login2';
  private usernameInput = '#loginusername';
  private passwordInput = '#loginpassword';
  private loginButton = "//button[text()='Log in']";

  async goto() {
    await this.page.goto('https://www.demoblaze.com/index.html');
  }

  async login(username: string, password: string) {
    await this.page.locator(this.loginLink).click();
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
  }
}
