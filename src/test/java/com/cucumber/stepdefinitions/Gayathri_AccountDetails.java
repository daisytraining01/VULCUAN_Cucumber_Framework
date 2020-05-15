package com.cucumber.stepdefinitions;

import static org.testng.Assert.assertEquals;

import java.util.Hashtable;

import org.apache.log4j.Logger;
import org.apache.xmlbeans.impl.xb.xsdschema.Attribute.Use;
import org.openqa.selenium.By;

import com.cucumber.helper.UserActions;
import com.cucumber.pageobjects.LoginPage;
import com.cucumber.pageobjects.SignupPage_mohan;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Gayathri_AccountDetails {
	
	private static Logger Log = Logger.getLogger(UserActions.class.getName());

	UserActions User;
	Hashtable<String,String> Data;

	public void Gayathri_AccountDetails (UserActions User) {
		this.User = User;
	}
	
@Given("The application opens using the {string}")
public void the_application_opens_using_the(String string) {
	User.OpenUrl(string);
}
@Given("enters the login and password {string} {string}")
public void enters_the_login_and_password(String login, String password) {
	User.SendKeys(LoginPage.UserName,login);
	User.SendKeys(LoginPage.Password,password);              
}


@Then("the user clicks submit")
public void the_user_clicks_submit() {
	assertEquals(true,User.isEnabled(LoginPage.Submit));           
	User.Click(LoginPage.Submit);
}

@Then("the user enters the pin {string}")
public void the_user_enters_the_pin(String string) {
	User.SendKeys(LoginPage.PIN,string);     
    throw new io.cucumber.java.PendingException();
}

@Then("the application logins")
public void the_application_logins() {
    // Write code here that turns the phrase above into concrete actions
    throw new io.cucumber.java.PendingException();
}

@When("The Account Details link is clicked")
public void the_Account_Details_link_is_clicked() {
	User.Click(LoginPage.AccountDetails);     
    
}

@Then("The Application is navigated to User Account Details page")
public void the_Application_is_navigated_to_User_Account_Details_page() {
    // Write code here that turns the phrase above into concrete actions
    throw new io.cucumber.java.PendingException();
}

@Then("the user verifies the account details")
public void the_user_verifies_the_account_details() {
    // Write code here that turns the phrase above into concrete actions
    throw new io.cucumber.java.PendingException();
}

}
		