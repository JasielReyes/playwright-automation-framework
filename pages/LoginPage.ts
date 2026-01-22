import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  private usernameInput = '#user-name';
  private passwordInput = '#password';
  private loginButton = '#login-button';
  private errorMessage = '[data-test="error"]';

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    if (username) await this.page.fill(this.usernameInput, username);
    if (password) await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async expectInventoryPage() {
    await expect(this.page).toHaveURL(/inventory.html/);
  }

  async expectError() {
    await expect(this.page.locator(this.errorMessage)).toBeVisible();
  }

  async getErrorText() {
    return await this.page.locator(this.errorMessage).innerText();
  }

  async getErrorMessage(): Promise<string> {
  return await this.page.locator(this.errorMessage).innerText();
  }

}
