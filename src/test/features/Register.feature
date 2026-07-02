@reg
Feature: user registration Feature
Background:
  Given the user launches the application
  And User clicked the login Link
  And the user clicks on the Register button
Scenario: 
   And the user fills all the required details
   And user click on  login button
   Then the user should see account registered