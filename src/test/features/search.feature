    Feature:Search product
    Background:
        Given user on the homepage
        When click the products button
    Scenario: Valid product search
        When enter the product in the search bar
        And click search icon
        Then enter product should be displayed