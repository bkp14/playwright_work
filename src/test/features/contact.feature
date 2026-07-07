Feature: contact functionality in demoblaze application

Background:
    Given the user navigates to the Demoblaze application
    And the user opens the contact dialog

Scenario: Verify the user can send a contact message with excel data
    When the user enters contact details from excel
    And the user sends the contact message
    Then the user should see contact success popup
