import { Locator, Page, expect } from '@playwright/test';

export default class ContactPage {
  private page: Page;
  nameInput: Locator;
  emailInput: Locator;
  phoneInput: Locator;
  messageTextArea: Locator;
  submitBtn: Locator;
  successTxt: Locator;

  constructor(page: Page) {
    this.page = page;

    // ✅ Stable locators using IDs
    this.nameInput = page.locator('#wpforms-161-field_0');
    this.emailInput = page.locator('#wpforms-161-field_1');
    this.phoneInput = page.locator('#wpforms-161-field_2');
    this.messageTextArea = page.locator('#wpforms-161-field_3');

    this.submitBtn = page.locator('#wpforms-form-161 button[type="submit"]');
    this.successTxt = page.locator('.wpforms-confirmation-container');
  }

  async submitForm(name: string, email: string, phone: string, message: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
    await this.messageTextArea.fill(message);

    await this.submitBtn.click();
  }

  async verifySuccessMessage() {
    await expect(this.successTxt).toBeVisible({ timeout: 10000 });
  }
}