@FullSuite
Feature: Online Banking_Account Details
  I want to use this template for my feature file

  @gayathri
  Scenario Outline: To check if the user is able to view the Account Details
    Given The application opens using the "<url>"
    And User enters Username and Password : "<data>"
    Then the user clicks submit
    And User enters PIN : "<data>"
    Then the application logins
    When The Account Details link is clicked
    Then The Application is navigated to User Account Details page
    And the user verifies the account details


      Examples: 
      | url                                    | data    |
      | http://demo.rapidtestpro.com/login.php | Data001 |
      | http://demo.rapidtestpro.com/login.php | Data001 |
      | http://demo.rapidtestpro.com/login.php | Data002 |
      | http://demo.rapidtestpro.com/login.php | Data003 |
      | http://demo.rapidtestpro.com/login.php | Data004 |
      | http://demo.rapidtestpro.com/login.php | Data005 |