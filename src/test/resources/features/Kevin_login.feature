@FullSuite
Feature: Login with Valid Credentials
  To Check application is allowing user to perform login with valid credentials and logout from the application

  @Login
  Scenario Outline: To Verify the Login with Valid Credentials
    Given User Launched "<url>" in Browser
    And Application base page is displayed with Login Username and Password Fields
    When User enters Username : "<username>" , Password : "<password>"
    And Clicks on the submit button
    Then Application page is displayed with PIN Number Field
    When User enters PIN : "<pin>"
    And Clicks on the validate PIN
    Then User Verifies the application is logged in successfully

    Examples: 
      | url                                    | username   | password   | pin   |
      | http://demo.rapidtestpro.com/login.php | 1234556666 | MavDemo@01 | 12345 |
