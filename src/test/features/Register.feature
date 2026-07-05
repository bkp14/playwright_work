Feature: Register Feature

  Background:
    Given user is on the homepage
    When user clicks on the loginpage
    And user enters valid name and email

  Scenario: Register with valid credentials
    And user clicks on signup
    And user enters registration details
    And user clicks on create account
    Then account should be created successfully