import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../tests/hooks';
import { LoginPage } from '../pages/LoginPage';


let loginPage: LoginPage;

Given(/^que estoy en la página de login$/, async () => {
  loginPage = new LoginPage(page);
  await loginPage.navigate();
});

When(
  'ingreso credenciales válidas {string} y {string}',
  async (user: string, pass: string) => {
    await loginPage.login(user, pass);
  }
);


Then(/^debo ver la página de productos$/, async () => {
  await expect(page).toHaveURL(/inventory/);
});
