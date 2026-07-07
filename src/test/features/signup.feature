Feature: signup functionality in demoblaze application
Background:
    Given the user navigates to the Demoblaze application
    And the user opens the signup dialog

Scenario: Verify the user signup with new credentials
    When the user enters the credentials
      | username | password |
      | xsasa    | sasawas  |
    And the user clicks on  the signup button
    Then the user should see a success popup