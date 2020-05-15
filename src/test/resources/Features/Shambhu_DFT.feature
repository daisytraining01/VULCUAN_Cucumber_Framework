@FullSuite
Feature: Demo_Bank Domestic Fund Transfer Validation 
	To Check application is allowing user to perform login with valid credentials and logout from the application

@smokeTest 
Scenario Outline: To Verify the domestic fund transfer 
	Given User Launched "<url>" in Browser 
	Then user should enter "<accountNumber>","<password>" "<pinNumber>" and click on submit button 
	And user should validate page is displayed with all fund transfer fields 
	Then user enters "<dataBinding>" and fund transfer details 
	And user should clicks on the fund transfer button 
	Then user verifies the fund transfer successful message 
	
	Examples: 
		| url                                    | accountNumber | password   |pinNumber|dataBinding|
		| http://demo.rapidtestpro.com/login.php | 1234556666   | MavDemo@01 |12345|Data001|
		| http://demo.rapidtestpro.com/login.php | 1234556666   | MavDemo@01 |12345|Data002|
		| http://demo.rapidtestpro.com/login.php | 1234556666   | MavDemo@01 |12345|Data003|
		| http://demo.rapidtestpro.com/login.php | 1234556666   | MavDemo@01 |12345|Data004|
		| http://demo.rapidtestpro.com/login.php | 1234556666   | MavDemo@01 |12345|Data005|