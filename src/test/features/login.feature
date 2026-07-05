Feature: login with valid credentials

Background: 

    Given the user Launches the application
  
Scenario: Login with valid credentials
     When the user enters valid credentials
     And the user clicks on Login button
    Then the user should be redirected to the products list page
Scenario Outline: Login with invald credentials
   When User enters username "<username>"
    And User enters password "<password>"
    And the user clicks on Login button
    Then User should see "<result>"

    Examples:
      | username      | password     | result                         |                      
      | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out. |
      | standard_user | wrong_pass   | Epic sadface: Username and password do not match any user in this service |



