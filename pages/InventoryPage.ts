import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  private menuButton = '#react-burger-menu-btn';
  private logoutLink = '#logout_sidebar_link';

  async openMenu() {
    await this.page.click(this.menuButton);
  }

  async logout() {
  //await this.page.click(this.menuButton);

  //Menu Visible ¿?
  await this.page.waitForSelector('#react-burger-menu-btn', {
  state: 'visible',
  timeout: 10000
});
  await this.page.click(this.logoutLink);
}


  async expectLoginPage() {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/');
  }
}
