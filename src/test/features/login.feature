Feature: login functionality in demoblaze application

Background:
    Given the user navigates to the Demoblaze application
    And the user opens the login dialog

Scenario: Verify the user login with csv credentials
    When the user enters login credentials from csv
    And the user clicks on the login button
    Then the user should be logged in successfully
