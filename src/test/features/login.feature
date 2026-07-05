Feature: Login Feature

  Background:
    Given user is on the home page
    When user clicks on the login page
  @login
  Scenario: Login with valid credentials
    When user enters valid username and password
    And user clicks on login
    Then user can see the username in the dashboard
  @invalidLogin
  Scenario Outline: Login with invalid credentials
    When user enters username "<username>" and password "<password>"
    And user clicks on login
    Then user should see the error message "<errorMessage>"

    Examples:
      | username       | password     | errorMessage                         |
      | Tamil@test.com | Password123  | Your email or password is incorrect! |
      | test@123.com   | WrongPass123 | Your email or password is incorrect! |
