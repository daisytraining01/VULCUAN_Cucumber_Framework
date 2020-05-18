package com.cucumber.stepdefinitions;

import static org.testng.Assert.assertEquals;

import java.sql.SQLException;
import java.text.ParseException;
import java.util.Hashtable;

import org.apache.log4j.Logger;
import org.apache.xmlbeans.impl.xb.xsdschema.Attribute.Use;
import org.openqa.selenium.By;

import com.codoid.products.exception.FilloException;
import com.cucumber.config;
import com.cucumber.helper.UserActions;
import com.cucumber.pageobjects.LoginPage;
import com.cucumber.pageobjects.SignupPage_mohan;
import com.manager.DatabaseConnector;
import com.manager.TestData;

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



	
	
	@Given("The user navigates to the signup page")
	public void the_user_navigates_to_the_signup_page() {
	    User.Click(By.linkText("Register it Now"));
	    assertEquals(true, User.isDisplayed(SignupPage_mohan.FirstName));
	}

	@When("User enters all the details needed")
	public void user_enters_all_the_details_needed() {
	  
	    
	    
	}
	
	
	@When("User enters all the details With {string} needed")
	public void user_enters_all_the_details_With_needed(String email) throws ClassNotFoundException, SQLException, FilloException, ParseException {

		
		
		Hashtable<String, String> signup = null;
		if (config.DataSource == "DATABASE") {
			signup = new DatabaseConnector().getDataFromDatabase("Signup", "Email", email);
		} else if (config.DataSource == "FILLO") {
			signup =  new TestData().getCommon_Data("./src/test/resources/database/TestData.xlsx", "Email", email, "Signup");
		}
		
		
		
		
		
		
		

		  User.SendKeys(SignupPage_mohan.FirstName, signup.get("FirstName"));
		    User.SendKeys(SignupPage_mohan.LastName, signup.get("LastName"));
		    User.SendKeys(SignupPage_mohan.Password, signup.get("Password"));
		    User.SendKeys(SignupPage_mohan.confirmPassword, signup.get("confirmPassword"));
		    
		    User.SendKeys(SignupPage_mohan.Email, signup.get("Email"));
		    User.SendKeys(SignupPage_mohan.PhonenNumber, signup.get("PhoneNumber"));
		    User.SendKeys(SignupPage_mohan.DateOfBirth, signup.get("DateOfBirth"));
		    User.selectFromDropDown(SignupPage_mohan.Gender, signup.get("Gender"));
		    
		    User.SendKeys(SignupPage_mohan.Address, signup.get("Address"));
		    User.SendKeys(SignupPage_mohan.City, signup.get("City"));
		    User.SendKeys(SignupPage_mohan.State,signup.get("State") );
		    User.SendKeys(SignupPage_mohan.Zipcode, signup.get("Zipcode"));
		    
		    
		    User.selectFromDropDown(SignupPage_mohan.AccoubtType, signup.get("AccoubtType"));
		    User.SendKeys(SignupPage_mohan.AccountPin, signup.get("AccountPin"));
		    User.SendKeys(SignupPage_mohan.VerifyPin, signup.get("VerifyPin"));
		
		
		
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
