@login
Feature: : user Authentication test

Background: :
     Given  User navigates to the application
     And User Clicks on the login Link

Scenario: Login with Valid Credentials

  And User enter the username as "kpk"
  And User enter the password as "Kpk12345"
  When User click on the login button
  Then the login should be successful

Scenario: Login with missing Credentials
     And User enter the username as "kpk"
  And User enter the password as ""
  When User click on the login button
  Then the user should see a required message

    