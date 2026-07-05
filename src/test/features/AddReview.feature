Feature: Product Review

  Scenario: Add review on product
    Given user is on the home page
    When user clicks on the Products button
    When user clicks on View Product
    When user enters review details
      | name   | Tamil                        |
      | email  | tamil@test.com               |
      | review | Excellent product. Loved it! |
    And user clicks on Submit button
    Then user should see the success message "Thank you for your review."