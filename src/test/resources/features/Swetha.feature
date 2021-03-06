@FullSuite
Feature: International Fund Transfer

  @smokeTest
  Scenario Outline: To Verify the International Fund transfer
    Given user launched "<url>" in browser
    Then user should enter "<accountNumber>","<password>" "<pinNumber>" ,click on submit button and navigate to transfer menu
    Then Fund transfer page is displayed with all the fields
    Then user enters fund transfer "<Data>"
    And user should click on the fund transfer button
    Then user verifys the fund transfer successful message

    Examples: 
      | url                                    | accountNumber | password   | pinNumber | Data    |
      | http://demo.rapidtestpro.com/login.php |    1234556666 | MavDemo@01 |     12345 | Data001 |
      | http://demo.rapidtestpro.com/login.php |    1234556666 | MavDemo@01 |     12345 | Data002 |
      | http://demo.rapidtestpro.com/login.php |    1234556666 | MavDemo@01 |     12345 | Data003 |
      | http://demo.rapidtestpro.com/login.php |    1234556666 | MavDemo@01 |     12345 | Data004 |
      | http://demo.rapidtestpro.com/login.php |    1234556666 | MavDemo@01 |     12345 | Data005 |
