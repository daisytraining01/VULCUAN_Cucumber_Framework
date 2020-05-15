package com.cucumber.stepdefinitions;
import static org.junit.Assert.assertEquals;

import java.util.Hashtable;

import org.apache.log4j.Logger;

import com.cucumber.helper.UserActions;
import com.cucumber.pageobjects.LoginPage;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class KevinLogin {

	private static Logger Log = Logger.getLogger(UserActions.class.getName());

	UserActions User;
	Hashtable<String,String> Data;

	public KevinLogin(UserActions User) {
		this.User = User;
	}
	
	@Given("User Launched {string} in Browser")
	public void user_Launched_in_Browser(String string) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		User.OpenUrl(string);
		System.out.println("----------------------Application is Launched Successfully");
		Log.info("Application is launched with URL");
	   
	}

	@Given("Application base page is displayed with Login Username and Password Fields")
	public void application_base_page_is_displayed_with_Login_Username_and_Password_Fields() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		assertEquals(true, User.isDisplayed(LoginPage.UserName));
		assertEquals(true, User.isDisplayed(LoginPage.Password));
		System.out.println("---------------- Username and password are displayed correctly");
		Log.info("Username and Password are displayed as expected");
	   
	}

	@When("User enters Username : {string} , Password : {string}")
	public void user_enters_Username_Password(String Username, String Password) throws Throwable{
	    // Write code here that turns the phrase above into concrete actions
		User.SendKeys(LoginPage.UserName, Username);
		User.SendKeys(LoginPage.Password,Password);
		System.out.println("----------------Username and password are filled with data.");
		Log.info("Username "+Username+"and Password are filled with data ");
		Thread.sleep(2000);
	    
	}

	@When("Clicks on the submit button")
	public void clicks_on_the_submit_button()throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		  assertEquals(true,User.isEnabled(LoginPage.Submit));
		  User.Click(LoginPage.Submit);
		  System.out.println("----------------Clicked on submit button");
		  Log.info("Clicked on the Submit Button");
		  Thread.sleep(2000);
	   
	}

	@When("Application page is displayed with PIN Number Field")
	public void application_page_is_displayed_with_PIN_Number_Field() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
	//	User.SwitchTo_LatestWindow();
		Thread.sleep(2000);
		assertEquals(true, User.isDisplayed(LoginPage.PIN));
		System.out.println("----------------PIN Numebr filed is displayed correctly");
		Log.info("PIN NUmber filed is displayed as expected");
		Thread.sleep(2000);
	  
	}

	@When("User enters PIN : {string}")
	public void user_enters_PIN(String string)throws Throwable {
		Thread.sleep(2000);
		//User.SwitchTo_LatestWindow();
	    // Write code here that turns the phrase above into concrete actions
		User.SendKeys(LoginPage.PIN,string);
		System.out.println("----------------PIN is entered");
		Log.info("PIN "+string+" is filled with data ");
	  
	}

	@When("Clicks on the validate PIN")
	public void clicks_on_the_validate_PIN() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		  assertEquals(true,User.isEnabled(LoginPage.Submit));
		  User.Click(LoginPage.Submit);
		  System.out.println("----------------Clicked on submit button");
		  Log.info("Clicked on the Validate PIN Button");
	}

	@Then("User Verifies the application is logged in successfully")
	public void user_Verifies_the_application_is_logged_in_successfully() throws Throwable{
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("----------------User has logged in successfully");
		Log.info("User has logged in successfully");	   
	}
	
}
