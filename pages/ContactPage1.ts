import { Page, expect } from '@playwright/test';

export default class ContactPage1 {
  constructor(private page: Page) {}

  async fillForm(name: string, email: string, phone: string, message: string) {
    await this.page.getByRole('textbox', { name: 'Name *' }).fill(name);
    await this.page.getByRole('textbox', { name: 'Email *' }).fill(email);
    await this.page.getByRole('textbox', { name: 'Phone *' }).fill(phone);
    await this.page.getByRole('textbox', { name: 'Message' }).fill(message);
  }

  async submitForm() {
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }

//   async verifySuccess() {
//     await expect(this.page.locator('.wpforms-confirmation-container'))
//       .toBeVisible();
//   }
}