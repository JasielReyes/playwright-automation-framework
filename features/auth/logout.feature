Feature: Logout functionality

  As a logged-in user
  I want to log out of the application
  So that my session is closed securely

  Scenario: Successful logout
    Given the user is logged in as "standard_user"
    When the user logs out
    Then the user should be redirected to the login page
