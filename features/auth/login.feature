Feature: Login functionality

  As a registered user
  I want to log in to the application
  So that I can access the inventory page

  Scenario Outline: Login with invalid credentials
  Given the user is on the SauceDemo login page
  When the user logs in with "<username>" and "<password>"
  Then an error message "<errorMessage>" should be displayed

Examples:
  | username          | password      | errorMessage |
  | locked_out_user   | secret_sauce  | locked       |
  | invalid_user      | wrong_pass    | invalid      |
  |                  | secret_sauce  | empty        |
  