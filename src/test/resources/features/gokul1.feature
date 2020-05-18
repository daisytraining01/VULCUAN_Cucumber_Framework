@FullSuite
Feature: To check whether user able to login and view Account statement
  
  @gokul
  Scenario Outline: TO check user able to login
  Given User launches to "<url>" in the browser
  Then user able to view the home page with username and password field for login
  When User to enter login : "<login name>" , password : "<password>"
  And user clicks submit button
  Then Application move to next oage for Pin verification
  And user enters Pin "<pin>"
  Then user clicks validate Pin
  And user able to login successfully
  And User to click on account statement menu
  Then User can able to view the latest account statement on screen
  
    Examples:
    
   | url                                   | login name | password   | pin   |
   |http://demo.rapidtestpro.com/login.php | 1234556666 | MavDemo@01 | 12345 |
    
    
 