import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

let loginPage: LoginPage;
let inventoryPage: InventoryPage;

Given('the user is logged in as {string}', async function (username: string) {
  loginPage = new LoginPage(this.page);
  inventoryPage = new InventoryPage(this.page);

  await loginPage.navigate();
  await loginPage.login(username, 'secret_sauce');
  await inventoryPage.openMenu(); // asegura que está en inventory
});

When('the user logs out', async function () {
  await inventoryPage.logout();
});

Then('the user should be redirected to the login page', async function () {
  await inventoryPage.expectLoginPage();
});
