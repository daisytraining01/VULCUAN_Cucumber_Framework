package com.cucumber.stepdefinitions;
import static org.junit.Assert.assertEquals;

import java.sql.SQLException;
import java.util.Hashtable;

import org.apache.log4j.Logger;

import com.akiban.sql.parser.ParseException;
import com.codoid.products.exception.FilloException;
import com.cucumber.config;
import com.cucumber.helper.UserActions;
import com.cucumber.pageobjects.LoginPage;
import com.manager.DatabaseConnector;
import com.manager.TestData;

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

	@When("User enters Username and Password : {string}")
    public void user_enters_Username_and_Password(String data) throws ClassNotFoundException, SQLException, FilloException, ParseException, InterruptedException, java.text.ParseException{
       
		
		Hashtable<String, String> signup = null;
		if (config.DataSource == "DATABASE") {
			signup = new DatabaseConnector().getDataFromDatabase("Login", "DataBinding", data);
		} else if (config.DataSource == "FILLO") {
			signup =  new TestData().getCommon_Data("./src/test/resources/database/TestData.xlsx", "DataBinding",data, "Login");
		}
		
          User.SendKeys(LoginPage.UserName, signup.get("Username") );
         User.SendKeys(LoginPage.Password, signup.get("Password") );
        System.out.println("----------------Username and password are filled with data.");
        Log.info("Username "+data+"and Password are filled with data ");
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


		
		
		
		
		Thread.sleep(2000);
		assertEquals(true, User.isDisplayed(LoginPage.PIN));
		System.out.println("----------------PIN Numebr filed is displayed correctly");
		Log.info("PIN NUmber filed is displayed as expected");
		Thread.sleep(2000);
	  
	}

	@When("User enters PIN : {string}")
	public void user_enters_PIN(String data)throws Throwable {

		Hashtable<String, String> signup = null;
		if (config.DataSource == "DATABASE") {
			signup = new DatabaseConnector().getDataFromDatabase("Login", "DataBinding", data);
		} else if (config.DataSource == "FILLO") {
			signup =  new TestData().getCommon_Data("./src/test/resources/database/TestData.xlsx", "DataBinding",data, "Login");
		}
		
		
		
		User.SendKeys(LoginPage.PIN,signup.get("Pin"));
		System.out.println("----------------PIN is entered");
		Log.info("Pin "+signup.get("Pin")+" is filled with data ");
	  
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
