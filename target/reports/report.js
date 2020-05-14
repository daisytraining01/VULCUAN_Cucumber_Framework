$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/Kevin_login.feature");
formatter.feature({
  "name": "Login with Valid Credentials",
  "description": "  To Check application is allowing user to perform login with valid credentials and logout from the application",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FullSuite"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To Verify the Login with Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "User Launched \"\u003curl\u003e\" in Browser",
  "keyword": "Given "
});
formatter.step({
  "name": "Application base page is displayed with Login Username and Password Fields",
  "keyword": "And "
});
formatter.step({
  "name": "User enters Username : \"\u003cusername\u003e\" , Password : \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Clicks on the submit button",
  "keyword": "And "
});
formatter.step({
  "name": "Application page is displayed with PIN Number Field",
  "keyword": "Then "
});
formatter.step({
  "name": "User enters PIN : \"\u003cpin\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Clicks on the validate PIN",
  "keyword": "And "
});
formatter.step({
  "name": "User Verifies the application is logged in successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "url",
        "username",
        "password",
        "pin"
      ]
    },
    {
      "cells": [
        "http://demo.rapidtestpro.com/login.php",
        "1234556666",
        "MavDemo@01",
        "12345"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To Verify the Login with Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FullSuite"
    },
    {
      "name": "@Login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Launched \"http://demo.rapidtestpro.com/login.php\" in Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.KevinLogin.user_Launched_in_Browser(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "Application base page is displayed with Login Username and Password Fields",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.KevinLogin.application_base_page_is_displayed_with_Login_Username_and_Password_Fields()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User enters Username : \"1234556666\" , Password : \"MavDemo@01\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.KevinLogin.user_enters_Username_Password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.KevinLogin.clicks_on_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "Application page is displayed with PIN Number Field",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.KevinLogin.application_page_is_displayed_with_PIN_Number_Field()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User enters PIN : \"12345\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.KevinLogin.user_enters_PIN(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on the validate PIN",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.KevinLogin.clicks_on_the_validate_PIN()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Verifies the application is logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.KevinLogin.user_Verifies_the_application_is_logged_in_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png", "Pass Screenshot");
formatter.after({
  "status": "passed"
});
});