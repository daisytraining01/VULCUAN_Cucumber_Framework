@FullSuite
Feature: Online Banking_Account Details
  I want to use this template for my feature file

  @gayathri
  Scenario Outline: To check if the user is able to view the Account Details
    Given The application opens using the "<url>"
    And enters the login and password "<username>" "<password>"
    Then the user clicks submit
    And the user enters the pin "<pin>"
    Then the application logins
    When The Account Details link is clicked
    Then The Application is navigated to User Account Details page
    And the user verifies the account details

    Examples: 
      | url                                    | username   | password   | pin   |
      | http://demo.rapidtestpro.com/login.php | 1234556666 | MavDemo@01 | 12345 |
