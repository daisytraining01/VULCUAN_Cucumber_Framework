@FullSuite
Feature: Sign up for a new account
  To Check application is allowing user to perform signup with valid credentials 
  
  @signup
  Scenario Outline: To Verify the signup with Valid Credentials
    Given User Launched "<url>" in Browser
    And Application base page is displayed with Login Username and Password Fields 
    And The user navigates to the signup page
    When User enters all the details needed
    And Clicks on the Register account button
    Then User Verifies that the application has created account successfully
    Examples: 
      | url                                    | 
      | http://demo.rapidtestpro.com/login.php |