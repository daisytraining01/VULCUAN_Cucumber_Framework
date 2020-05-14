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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027accno\u0027]\"}\n  (Session info: chrome\u003d81.0.4044.138)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-VU9JH5KI\u0027, ip: \u0027192.168.28.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.138, chrome: {chromedriverVersion: 81.0.4044.138 (8c6c7ba89cc9..., userDataDir: C:\\Users\\Acer\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:28308}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 249ac2664fc90b97ad7b967d0f92c4a9\n*** Element info: {Using\u003dname, value\u003daccno}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.cucumber.helper.UserActions.isDisplayed(UserActions.java:47)\r\n\tat com.cucumber.stepdefinitions.KevinLogin.application_base_page_is_displayed_with_Login_Username_and_Password_Fields(KevinLogin.java:38)\r\n\tat ✽.Application base page is displayed with Login Username and Password Fields(classpath:features/Kevin_login.feature:8)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", "Fail Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "User enters Username : \"1234556666\" , Password : \"MavDemo@01\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.KevinLogin.user_enters_Username_Password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "Clicks on the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.KevinLogin.clicks_on_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "Application page is displayed with PIN Number Field",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.KevinLogin.application_page_is_displayed_with_PIN_Number_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "User enters PIN : \"12345\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.KevinLogin.user_enters_PIN(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "Clicks on the validate PIN",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.KevinLogin.clicks_on_the_validate_PIN()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "User Verifies the application is logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.KevinLogin.user_Verifies_the_application_is_logged_in_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", "Fail Screenshot");
formatter.after({
  "status": "passed"
});
});