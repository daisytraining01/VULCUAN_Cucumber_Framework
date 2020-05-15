@FullSuite
Feature: Sign out from the application
  To Check application is Loggin out fully and not allowing the users to use the application by pressing back button
  
  @signOut
  Scenario Outline: To Verify the signup with Valid Credentials
    Given User Launched "<url>" in Browser an logged into the application with "<userName>" and "<Password>"
    And user enters the pin an  login to the application
    And the user presses the logout button
    When The user presses the browser back button
    Then The application prompts to login
    Examples: 
      | url                                    | userName | Password |
      | http://demo.rapidtestpro.com/login.php |1234556666|MavDemo@01|