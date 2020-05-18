@FullSuite
Feature: Login with Valid Credentials
  To Check application is allowing user to perform login with valid credentials and logout from the application

  @Login
  Scenario Outline: To Verify the Login with Valid Credentials
    Given User Launched "<url>" in Browser
    And Application base page is displayed with Login Username and Password Fields
    When User enters Username and Password : "<data>"
    And Clicks on the submit button
    Then Application page is displayed with PIN Number Field
    When User enters PIN : "<data>"
    And Clicks on the validate PIN
    Then User Verifies the application is logged in successfully

    Examples: 
      | url                                    | data    |
      | http://demo.rapidtestpro.com/login.php | Data001 |
      | http://demo.rapidtestpro.com/login.php | Data001 |
      | http://demo.rapidtestpro.com/login.php | Data002 |
      | http://demo.rapidtestpro.com/login.php | Data003 |
      | http://demo.rapidtestpro.com/login.php | Data004 |
      | http://demo.rapidtestpro.com/login.php | Data005 |
