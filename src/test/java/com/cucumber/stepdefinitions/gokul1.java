package com.cucumber.stepdefinitions;

import static org.junit.Assert.assertEquals;

import java.util.Hashtable;
import java.util.logging.Logger;

import com.cucumber.helper.UserActions;
import com.cucumber.pageobjects.LoginPage;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class gokul1 {

	private static Logger Log = Logger.getLogger(UserActions.class.getName());

	UserActions logger;
	Hashtable<String,String> Data;

	public gokul1(UserActions logger) {
		this.logger = logger;
		
	}
		
		
	@Given("User launches to {string} in the browser")
	public void user_launches_to_in_the_browser(String string) {
	    // Write code here that turns the phrase above into concrete actions
		logger.OpenUrl("http://demo.rapidtestpro.com/login.php");
	    
	}

	@Then("user able to view the home page with username and password field for login")
	public void user_able_to_view_the_home_page_with_username_and_password_field_for_login() {
	    // Write code here that turns the phrase above into concrete actions
		assertEquals(true, logger.isDisplayed(LoginPage.UserName));
		assertEquals(true, logger.isDisplayed(LoginPage.Password));
	}

	@When("User to enter login : {string} , password : {string}")
	public void user_to_enter_login_password(String login, String password) {
	    // Write code here that turns the phrase above into concrete actions
		logger.SendKeys(LoginPage.UserName,login);
        logger.SendKeys(LoginPage.Password,password);
		
	}

	@When("user clicks submit button")
	public void user_clicks_submit_button() {
	    // Write code here that turns the phrase above into concrete actions
		assertEquals(true,logger.isEnabled(LoginPage.Submit));
		  logger.Click(LoginPage.Submit);
	}

	@Then("Application move to next oage for Pin verification")
	public void application_move_to_next_oage_for_Pin_verification() {
	    // Write code here that turns the phrase above into concrete actions
		assertEquals(true, logger.isDisplayed(LoginPage.PIN));
	}

	@Then("user enters Pin {string}")
	public void user_enters_Pin(String string) {
	    // Write code here that turns the phrase above into concrete actions
		logger.SendKeys(LoginPage.PIN,string);
	}

	@Then("user clicks validate Pin")
	public void user_clicks_validate_Pin() {
	    // Write code here that turns the phrase above into concrete actions
		assertEquals(true,logger.isEnabled(LoginPage.Submit));
		  logger.Click(LoginPage.Submit);
	}

	@Then("user able to login successfully")
	public void user_able_to_login_successfully() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Given("Upon successfull login user able to land Account summary screen")
	public void upon_successfull_login_user_able_to_land_Account_summary_screen() {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@Given("User to click on account statement menu")
	public void user_to_click_on_account_statement_menu() {
	    // Write code here that turns the phrase above into concrete actions
		logger.Click(LoginPage.AccountStatement);
	}

	@Then("User can able to view the latest account statement on screen")
	public void user_can_able_to_view_the_latest_account_statement_on_screen() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}


}
