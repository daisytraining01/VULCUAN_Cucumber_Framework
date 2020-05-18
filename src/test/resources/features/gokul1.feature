@FullSuite
Feature: To check whether user able to login and view Account statement
  
  @gokul
  Scenario Outline: TO check user able to login
  Given User launches to "<url>" in the browser
  Then user able to view the home page with username and password field for login
  And User enters Username and Password : "<data>"
  And user clicks submit button
  Then Application move to next oage for Pin verification
   And User enters PIN : "<data>"
  Then user clicks validate Pin
  And user able to login successfully
  And User to click on account statement menu
  Then User can able to view the latest account statement on screen
  
      Examples: 
      | url                                    | data    |
      | http://demo.rapidtestpro.com/login.php | Data001 |
      | http://demo.rapidtestpro.com/login.php | Data001 |
      | http://demo.rapidtestpro.com/login.php | Data002 |
      | http://demo.rapidtestpro.com/login.php | Data003 |
      | http://demo.rapidtestpro.com/login.php | Data004 |
      | http://demo.rapidtestpro.com/login.php | Data005 |
    
 