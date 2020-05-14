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
formatter.match({});
formatter.result({
  "error_message": "io.cucumber.core.runner.AmbiguousStepDefinitionsException: \"User Launched \"http://demo.rapidtestpro.com/login.php\" in Browser\" matches more than one step definition:\n  \"User Launched {string} in Browser\" in com.cucumber.stepdefinitions.KevinLogin.user_Launched_in_Browser(java.lang.String)\n  \"^User Launched \"([^\"]*)\" in Browser$\" in com.cucumber.stepdefinitions.Mohan_SignUpSteps.user_Launched_in_Browser(java.lang.String)\r\n\tat io.cucumber.core.runner.CachingGlue.findStepDefinitionMatch(CachingGlue.java:267)\r\n\tat io.cucumber.core.runner.CachingGlue.stepDefinitionMatch(CachingGlue.java:238)\r\n\tat io.cucumber.core.runner.Runner.matchStepToStepDefinition(Runner.java:118)\r\n\tat io.cucumber.core.runner.Runner.createTestStepsForPickleSteps(Runner.java:107)\r\n\tat io.cucumber.core.runner.Runner.createTestCaseForPickle(Runner.java:97)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:124)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:29)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:134)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:597)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:77)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:15)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat java.base/java.lang.Thread.run(Thread.java:830)\r\n",
  "status": "ambiguous"
});
formatter.embedding("image/png", "embedded0.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "Application base page is displayed with Login Username and Password Fields",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "error_message": "io.cucumber.core.runner.AmbiguousStepDefinitionsException: \"Application base page is displayed with Login Username and Password Fields\" matches more than one step definition:\n  \"Application base page is displayed with Login Username and Password Fields\" in com.cucumber.stepdefinitions.KevinLogin.application_base_page_is_displayed_with_Login_Username_and_Password_Fields()\n  \"^Application base page is displayed with Login Username and Password Fields$\" in com.cucumber.stepdefinitions.Mohan_SignUpSteps.application_base_page_is_displayed_with_Login_Username_and_Password_Fields()\r\n\tat io.cucumber.core.runner.CachingGlue.findStepDefinitionMatch(CachingGlue.java:267)\r\n\tat io.cucumber.core.runner.CachingGlue.stepDefinitionMatch(CachingGlue.java:238)\r\n\tat io.cucumber.core.runner.Runner.matchStepToStepDefinition(Runner.java:118)\r\n\tat io.cucumber.core.runner.Runner.createTestStepsForPickleSteps(Runner.java:107)\r\n\tat io.cucumber.core.runner.Runner.createTestCaseForPickle(Runner.java:97)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:124)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:29)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:134)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:597)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:77)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:15)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat java.base/java.lang.Thread.run(Thread.java:830)\r\n",
  "status": "ambiguous"
});
formatter.afterstep({
  "status": "skipped"
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
formatter.embedding("image/png", "embedded1.png", "Pass Screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:features/Shambhu_DFT.feature");
formatter.feature({
  "name": "Demo_Bank Domestic Fund Transfer Validation",
  "description": "\tTo Check application is allowing user to perform login with valid credentials and logout from the application",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FullSuite"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To Verify the domestic fund transfer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "name": "user launched \"\u003curl\u003e\" in browser",
  "keyword": "Given "
});
formatter.step({
  "name": "user should enter \"\u003caccountNumber\u003e\",\"\u003cpassword\u003e\" \"\u003cpinNumber\u003e\" and click on submit button",
  "keyword": "Then "
});
formatter.step({
  "name": "user should validate page is displayed with all fund transfer fields",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cdataBinding\u003e\" and fund transfer details",
  "keyword": "Then "
});
formatter.step({
  "name": "user should clicks on the fund transfer button",
  "keyword": "And "
});
formatter.step({
  "name": "user verifies the fund transfer successful message",
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
        "accountNumber",
        "password",
        "pinNumber",
        "dataBinding"
      ]
    },
    {
      "cells": [
        "http://demo.rapidtestpro.com/login.php",
        "1234556666",
        "MavDemo@01",
        "12345",
        "Data001"
      ]
    },
    {
      "cells": [
        "http://demo.rapidtestpro.com/login.php",
        "1234556666",
        "MavDemo@01",
        "12345",
        "Data002"
      ]
    },
    {
      "cells": [
        "http://demo.rapidtestpro.com/login.php",
        "1234556666",
        "MavDemo@01",
        "12345",
        "Data003"
      ]
    },
    {
      "cells": [
        "http://demo.rapidtestpro.com/login.php",
        "1234556666",
        "MavDemo@01",
        "12345",
        "Data004"
      ]
    },
    {
      "cells": [
        "http://demo.rapidtestpro.com/login.php",
        "1234556666",
        "MavDemo@01",
        "12345",
        "Data005"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To Verify the domestic fund transfer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FullSuite"
    },
    {
      "name": "@smokeTest"
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
  "name": "user launched \"http://demo.rapidtestpro.com/login.php\" in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Shambhu_DFundtransfer.user_launched_in_browser(java.lang.String)"
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
  "name": "user should enter \"1234556666\",\"MavDemo@01\" \"12345\" and click on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Shambhu_DFundtransfer.user_should_enter_and_click_on_submit_button(java.lang.String,java.lang.String,java.lang.String)"
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
  "name": "user should validate page is displayed with all fund transfer fields",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Shambhu_DFundtransfer.user_should_validate_page_is_displayed_with_all_fund_transfer_fields()"
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
  "name": "user enters \"Data001\" and fund transfer details",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Shambhu_DFundtransfer.user_enters_and_fund_transfer_details(java.lang.String)"
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
  "name": "user should clicks on the fund transfer button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Shambhu_DFundtransfer.user_should_clicks_on_the_fund_transfer_button()"
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
  "name": "user verifies the fund transfer successful message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Shambhu_DFundtransfer.user_verifies_the_fund_transfer_successful_message()"
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
formatter.scenario({
  "name": "To Verify the domestic fund transfer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FullSuite"
    },
    {
      "name": "@smokeTest"
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
  "name": "user launched \"http://demo.rapidtestpro.com/login.php\" in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Shambhu_DFundtransfer.user_launched_in_browser(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"1234556666\",\"MavDemo@01\" \"12345\" and click on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Shambhu_DFundtransfer.user_should_enter_and_click_on_submit_button(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded10.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user should validate page is displayed with all fund transfer fields",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Shambhu_DFundtransfer.user_should_validate_page_is_displayed_with_all_fund_transfer_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded11.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Data002\" and fund transfer details",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Shambhu_DFundtransfer.user_enters_and_fund_transfer_details(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded12.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user should clicks on the fund transfer button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Shambhu_DFundtransfer.user_should_clicks_on_the_fund_transfer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded13.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user verifies the fund transfer successful message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Shambhu_DFundtransfer.user_verifies_the_fund_transfer_successful_message()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded14.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.embedding("image/png", "embedded15.png", "Pass Screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To Verify the domestic fund transfer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FullSuite"
    },
    {
      "name": "@smokeTest"
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
  "name": "user launched \"http://demo.rapidtestpro.com/login.php\" in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Shambhu_DFundtransfer.user_launched_in_browser(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded16.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"1234556666\",\"MavDemo@01\" \"12345\" and click on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Shambhu_DFundtransfer.user_should_enter_and_click_on_submit_button(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded17.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user should validate page is displayed with all fund transfer fields",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Shambhu_DFundtransfer.user_should_validate_page_is_displayed_with_all_fund_transfer_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded18.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Data003\" and fund transfer details",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Shambhu_DFundtransfer.user_enters_and_fund_transfer_details(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded19.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user should clicks on the fund transfer button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Shambhu_DFundtransfer.user_should_clicks_on_the_fund_transfer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded20.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user verifies the fund transfer successful message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Shambhu_DFundtransfer.user_verifies_the_fund_transfer_successful_message()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded21.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.embedding("image/png", "embedded22.png", "Pass Screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To Verify the domestic fund transfer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FullSuite"
    },
    {
      "name": "@smokeTest"
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
  "name": "user launched \"http://demo.rapidtestpro.com/login.php\" in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Shambhu_DFundtransfer.user_launched_in_browser(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded23.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"1234556666\",\"MavDemo@01\" \"12345\" and click on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Shambhu_DFundtransfer.user_should_enter_and_click_on_submit_button(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded24.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user should validate page is displayed with all fund transfer fields",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Shambhu_DFundtransfer.user_should_validate_page_is_displayed_with_all_fund_transfer_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded25.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Data004\" and fund transfer details",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Shambhu_DFundtransfer.user_enters_and_fund_transfer_details(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded26.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user should clicks on the fund transfer button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Shambhu_DFundtransfer.user_should_clicks_on_the_fund_transfer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded27.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user verifies the fund transfer successful message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Shambhu_DFundtransfer.user_verifies_the_fund_transfer_successful_message()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded28.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.embedding("image/png", "embedded29.png", "Pass Screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To Verify the domestic fund transfer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FullSuite"
    },
    {
      "name": "@smokeTest"
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
  "name": "user launched \"http://demo.rapidtestpro.com/login.php\" in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Shambhu_DFundtransfer.user_launched_in_browser(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded30.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"1234556666\",\"MavDemo@01\" \"12345\" and click on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Shambhu_DFundtransfer.user_should_enter_and_click_on_submit_button(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded31.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user should validate page is displayed with all fund transfer fields",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Shambhu_DFundtransfer.user_should_validate_page_is_displayed_with_all_fund_transfer_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded32.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Data005\" and fund transfer details",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Shambhu_DFundtransfer.user_enters_and_fund_transfer_details(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded33.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user should clicks on the fund transfer button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Shambhu_DFundtransfer.user_should_clicks_on_the_fund_transfer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded34.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user verifies the fund transfer successful message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Shambhu_DFundtransfer.user_verifies_the_fund_transfer_successful_message()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded35.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.embedding("image/png", "embedded36.png", "Pass Screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:features/mohan_Signout.feature");
formatter.feature({
  "name": "Sign out from the application",
  "description": "  To Check application is Loggin out fully and not allowing the users to use the application by pressing back button",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FullSuite"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To Verify the signup with Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@signOut"
    }
  ]
});
formatter.step({
  "name": "User Launched \"\u003curl\u003e\" in Browser an logged into the application with \"\u003cuserName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters the pin an  login to the application",
  "keyword": "And "
});
formatter.step({
  "name": "the user presses the logout button",
  "keyword": "And "
});
formatter.step({
  "name": "The user presses the browser back button",
  "keyword": "When "
});
formatter.step({
  "name": "The application prompts to login",
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
        "userName",
        "Password"
      ]
    },
    {
      "cells": [
        "http://demo.rapidtestpro.com/login.php",
        "1234556666",
        "MavDemo@01"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To Verify the signup with Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FullSuite"
    },
    {
      "name": "@signOut"
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
  "name": "User Launched \"http://demo.rapidtestpro.com/login.php\" in Browser an logged into the application with \"1234556666\" and \"MavDemo@01\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Mohan_SignUpSteps.user_Launched_in_Browser_an_logged_into_the_application_with_and(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded37.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user enters the pin an  login to the application",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Mohan_SignUpSteps.user_enters_the_pin_an_login_to_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded38.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user presses the logout button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Mohan_SignUpSteps.the_user_presses_the_logout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded39.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "The user presses the browser back button",
  "keyword": "When "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Mohan_SignUpSteps.the_user_presses_the_browser_back_button()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded40.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "The application prompts to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Mohan_SignUpSteps.the_application_prompts_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded41.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.embedding("image/png", "embedded42.png", "Pass Screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:features/mohan_Signup.feature");
formatter.feature({
  "name": "Sign up for a new account",
  "description": "  To Check application is allowing user to perform signup with valid credentials ",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FullSuite"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To Verify the signup with Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@signup"
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
  "name": "The user navigates to the signup page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters all the details needed",
  "keyword": "When "
});
formatter.step({
  "name": "Clicks on the Register account button",
  "keyword": "And "
});
formatter.step({
  "name": "User Verifies that the application has created account successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "url"
      ]
    },
    {
      "cells": [
        "http://demo.rapidtestpro.com/login.php"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To Verify the signup with Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FullSuite"
    },
    {
      "name": "@signup"
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
formatter.match({});
formatter.result({
  "error_message": "io.cucumber.core.runner.AmbiguousStepDefinitionsException: \"User Launched \"http://demo.rapidtestpro.com/login.php\" in Browser\" matches more than one step definition:\n  \"User Launched {string} in Browser\" in com.cucumber.stepdefinitions.KevinLogin.user_Launched_in_Browser(java.lang.String)\n  \"^User Launched \"([^\"]*)\" in Browser$\" in com.cucumber.stepdefinitions.Mohan_SignUpSteps.user_Launched_in_Browser(java.lang.String)\r\n\tat io.cucumber.core.runner.CachingGlue.findStepDefinitionMatch(CachingGlue.java:267)\r\n\tat io.cucumber.core.runner.CachingGlue.stepDefinitionMatch(CachingGlue.java:238)\r\n\tat io.cucumber.core.runner.Runner.matchStepToStepDefinition(Runner.java:118)\r\n\tat io.cucumber.core.runner.Runner.createTestStepsForPickleSteps(Runner.java:107)\r\n\tat io.cucumber.core.runner.Runner.createTestCaseForPickle(Runner.java:97)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:124)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:29)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:134)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:597)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:77)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:15)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat java.base/java.lang.Thread.run(Thread.java:830)\r\n",
  "status": "ambiguous"
});
formatter.embedding("image/png", "embedded43.png", "Pass Screenshot");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "Application base page is displayed with Login Username and Password Fields",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "error_message": "io.cucumber.core.runner.AmbiguousStepDefinitionsException: \"Application base page is displayed with Login Username and Password Fields\" matches more than one step definition:\n  \"Application base page is displayed with Login Username and Password Fields\" in com.cucumber.stepdefinitions.KevinLogin.application_base_page_is_displayed_with_Login_Username_and_Password_Fields()\n  \"^Application base page is displayed with Login Username and Password Fields$\" in com.cucumber.stepdefinitions.Mohan_SignUpSteps.application_base_page_is_displayed_with_Login_Username_and_Password_Fields()\r\n\tat io.cucumber.core.runner.CachingGlue.findStepDefinitionMatch(CachingGlue.java:267)\r\n\tat io.cucumber.core.runner.CachingGlue.stepDefinitionMatch(CachingGlue.java:238)\r\n\tat io.cucumber.core.runner.Runner.matchStepToStepDefinition(Runner.java:118)\r\n\tat io.cucumber.core.runner.Runner.createTestStepsForPickleSteps(Runner.java:107)\r\n\tat io.cucumber.core.runner.Runner.createTestCaseForPickle(Runner.java:97)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:124)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:29)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:134)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:597)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:77)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:15)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat java.base/java.lang.Thread.run(Thread.java:830)\r\n",
  "status": "ambiguous"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "The user navigates to the signup page",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Mohan_SignUpSteps.the_user_navigates_to_the_signup_page()"
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
  "name": "User enters all the details needed",
  "keyword": "When "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Mohan_SignUpSteps.user_enters_all_the_details_needed()"
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
  "name": "Clicks on the Register account button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Mohan_SignUpSteps.clicks_on_the_Register_account_button()"
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
  "name": "User Verifies that the application has created account successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cucumber.stepdefinitions.Mohan_SignUpSteps.user_Verifies_that_the_application_has_created_account_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded44.png", "Pass Screenshot");
formatter.after({
  "status": "passed"
});
});