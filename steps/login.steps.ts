import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';
import { expect } from '@playwright/test';

let loginPage: LoginPage;

Given('the user is on the SauceDemo login page', async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.navigate();
});

When(
  'the user logs in with {string} and {string}',
  async function (username: string, password: string) {
    await loginPage.login(username, password);
  }
);

Then(
  'an error message {string} should be displayed',
  async function (errorType: string) {
    const errorText = await loginPage.getErrorMessage();

    switch (errorType) {
      case 'locked':
        expect(errorText).toContain(
          'this user has been locked out'
        );
        break;

      case 'invalid':
        expect(errorText).toContain(
          'Username and password do not match'
        );
        break;

      case 'empty':
        expect(errorText).toContain(
          'Username is required'
        );
        break;

      default:
        throw new Error(`Unknown error type: ${errorType}`);
    }
  }
);

