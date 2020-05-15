@FullSuite, @Regression
Feature: balance trasaction should be done successfully

  @smokeTest
  Scenario Outline: To Veriy the local fund transfer
    Given User Launched "<URL>" in Browser
    Then User enters Username : "<userName>" , Password : "<password>", pin: "<pin>" and click on login button
    And Application base page is displayed with all fund tranfer details
    Then User enters all fund tranfer mandatory "<Testdata>"
    Then Clicks on the transfer submit button

    Examples: 
      | URL                                    | userName   | password   | pin   | Testdata     |
      | http://demo.rapidtestpro.com/login.php | 1234556666 | MavDemo@01 | 12345 | TestData_001 |
      | http://demo.rapidtestpro.com/login.php | 1234556666 | MavDemo@01 | 12345 | TestData_002 |
      | http://demo.rapidtestpro.com/login.php | 1234556666 | MavDemo@01 | 12345 | TestData_004 |
      | http://demo.rapidtestpro.com/login.php | 1234556666 | MavDemo@01 | 12345 | TestData_005 |
