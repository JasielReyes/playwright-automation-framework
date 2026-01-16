import { error } from 'node:console';
import { Page } from 'playwright';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com');
  }

  async login(user: string, pass: string): Promise<void> {
  await this.page.fill('#user-name', user);
  await this.page.fill('#password', pass);
  await this.page.click('#login-button');

  if (await this.page.isVisible('.error-button')){
    throw error("ERROR, Problema al iniciar sesión")
  }
}

}
