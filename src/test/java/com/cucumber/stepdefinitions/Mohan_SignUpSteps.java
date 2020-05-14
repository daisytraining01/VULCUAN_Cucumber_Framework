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

public class Mohan_SignUpSteps {
	
	private static Logger Log = Logger.getLogger(UserActions.class.getName());

	UserActions User;
	Hashtable<String,String> Data;

	public Mohan_SignUpSteps(UserActions User) {
		this.User = User;
	}
	@Given("^User Launched \"([^\"]*)\" in Browser$")
	public void user_Launched_in_Browser(String URL) throws Throwable {
		User.OpenUrl(URL);
		Log.info("Application is launched with URL");
	}

	@And("^Application base page is displayed with Login Username and Password Fields$")
	public void application_base_page_is_displayed_with_Login_Username_and_Password_Fields() throws Throwable {
		assertEquals(true, User.isDisplayed(LoginPage.UserName));
		assertEquals(true, User.isDisplayed(LoginPage.Password));
		Log.info("Username and Password are displayed as expected");
	}
	
	
	@Given("The user navigates to the signup page")
	public void the_user_navigates_to_the_signup_page() {
	    User.Click(By.linkText("Register it Now"));
	    assertEquals(true, User.isDisplayed(SignupPage_mohan.FirstName));
	}

	@When("User enters all the details needed")
	public void user_enters_all_the_details_needed() {
	    User.SendKeys(SignupPage_mohan.FirstName, "Mohan1");
	    User.SendKeys(SignupPage_mohan.LastName, "Murugesan1");
	    User.SendKeys(SignupPage_mohan.Password, "Demon@123");
	    User.SendKeys(SignupPage_mohan.confirmPassword, "Demon@123");
	    
	    User.SendKeys(SignupPage_mohan.Email, "mohan1@zentpeople.com");
	    User.SendKeys(SignupPage_mohan.PhonenNumber, "9876543210");
	    User.SendKeys(SignupPage_mohan.DateOfBirth, "02131998");
	    User.selectFromDropDown(SignupPage_mohan.Gender, "Male");
	    
	    
	    User.SendKeys(SignupPage_mohan.Address, "Kodumudi");
	    User.SendKeys(SignupPage_mohan.City, "Erode");
	    User.SendKeys(SignupPage_mohan.State, "Tamil nadu");
	    User.SendKeys(SignupPage_mohan.Zipcode, "638151");
	    
	    
	    User.selectFromDropDown(SignupPage_mohan.AccoubtType, "Saving Account");
	    User.SendKeys(SignupPage_mohan.AccountPin, "12345");
	    User.SendKeys(SignupPage_mohan.VerifyPin, "12345");
	    
	    
	}

	@When("Clicks on the Register account button")
	public void clicks_on_the_Register_account_button() {
		User.Click(SignupPage_mohan.RegisterAccount);
	}

	@Then("User Verifies that the application has created account successfully")
	public void user_Verifies_that_the_application_has_created_account_successfully() throws InterruptedException {
//		 assertEquals(true, User.isDisplayed(By.name("Message")));
	}
	
	
	@Given("User Launched {string} in Browser an logged into the application with {string} and {string}")
	public void user_Launched_in_Browser_an_logged_into_the_application_with_and(String url, String userName, String password) {
		User.OpenUrl(url);
		User.SendKeys(LoginPage.UserName, userName);
		User.SendKeys(LoginPage.Password, password);
		 User.Click(By.name("submitButton"));
	}
	
	
	@Given("user enters the pin an  login to the application")
	public void user_enters_the_pin_an_login_to_the_application() {
	    User.SendKeys(By.name("accpin"), "12345");
	    User.Click(By.name("submitButton"));
	    
	}

	@Given("the user presses the logout button")
	public void the_user_presses_the_logout_button() {
	    User.Click(By.linkText("Sign Out"));
	    assertEquals(true, User.isDisplayed(LoginPage.UserName));
		assertEquals(true, User.isDisplayed(LoginPage.Password));
	}


	@When("The user presses the browser back button")
	public void the_user_presses_the_browser_back_button() {
	    User.pressBackButton();
	}

	@Then("The application prompts to login")
	public void the_application_prompts_to_login() {
		assertEquals(true, User.isDisplayed(LoginPage.UserName));
		assertEquals(true, User.isDisplayed(LoginPage.Password));
		
	}

}
