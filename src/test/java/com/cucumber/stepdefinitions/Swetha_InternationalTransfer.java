package com.cucumber.stepdefinitions;

import static org.testng.Assert.assertEquals;

import java.sql.SQLException;
import java.text.ParseException;
import java.util.Hashtable;

import org.apache.log4j.Logger;

import com.codoid.products.exception.FilloException;
import com.cucumber.helper.UserActions;
import com.cucumber.pageobjects.DomesticPage;
import com.cucumber.pageobjects.InternationalPage;
import com.manager.TestData;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class Swetha_InternationalTransfer {
	private static Logger Log = Logger.getLogger(UserActions.class.getName());

	UserActions User;
	Hashtable<String, String> Data;

	public Swetha_InternationalTransfer(UserActions User) {
		this.User = User;
	}
	@Given("user launched {string} in browser")
	public void user_launched_in_browser(String url) {
		User.OpenUrl(url);
	    
	}

	@Then("user should enter {string},{string} {string} ,click on submit button and navigate to transfer menu")
	public void user_should_enter_click_on_submit_button_and_navigate_to_transfer_menu(String userName, String pass, String pin) {
		assertEquals(true, User.isDisplayed(InternationalPage.accountNumber));
		  assertEquals(true, User.isDisplayed(InternationalPage.passwordTextbox));
		  assertEquals(true, User.isEnabled(InternationalPage.LoginButton));
		  User.SendKeys(InternationalPage.accountNumber, userName);
		  User.SendKeys(InternationalPage.passwordTextbox, pass);
		  User.Click(InternationalPage.LoginButton);
		  assertEquals(true, User.isDisplayed(InternationalPage.PINNumber));
		  assertEquals(true, User.isEnabled(InternationalPage.validatePIN));
		  User.SendKeys(InternationalPage.PINNumber, pin);
		  User.Click(InternationalPage.validatePIN);
		  Log.info("Username and Password enterd and user Logedin");	   
	}

	@Then("Fund transfer page is displayed with all the fields")
	public void fund_transfer_page_is_displayed_with_all_the_fields() throws InterruptedException {
		assertEquals(true, User.isEnabled(InternationalPage.fundTransferBtn));
		User.Click(InternationalPage.fundTransferBtn);
		 Thread.sleep(5000);
		assertEquals(true, User.isDisplayed(InternationalPage.receiverBankName));
		assertEquals(true, User.isDisplayed(InternationalPage.receiverName));
		assertEquals(true, User.isDisplayed(InternationalPage.receiverAccountNumber));
		assertEquals(true, User.isDisplayed(InternationalPage.swiftNumber));
		assertEquals(true, User.isDisplayed(InternationalPage.transferAmount));
		assertEquals(true, User.isDisplayed(InternationalPage.transferType));
		assertEquals(true, User.isDisplayed(InternationalPage.dateOfTransfer));
		assertEquals(true, User.isDisplayed(InternationalPage.transferDesc));
		assertEquals(true, User.isDisplayed(InternationalPage.transferSubmitButton));
		 Log.info("All transfer mandatory field are displayed");
	}

	@Then("user enters fund transfer details")
	public void user_enters_fund_transfer_details() throws ClassNotFoundException, SQLException, FilloException, ParseException, InterruptedException {
		Hashtable<String, String> amountTranserData =  new TestData().getCommon_Data("./src/test/resources/database/TestData.xlsx", "DataBinding", "Data001", "InternationalFT");
 		Thread.sleep(3000);
 		System.out.println(amountTranserData);
 		System.out.println(amountTranserData.get("ReciverBankName"));
		System.out.println(amountTranserData.get("ReceiverName"));
		  User.SendKeys(InternationalPage.receiverBankName, amountTranserData.get("ReciverBankName") );
		  User.SendKeys(InternationalPage.receiverName, amountTranserData.get("ReceiverName") );
		  User.SendKeys(InternationalPage.receiverAccountNumber, amountTranserData.get("ReceAccNum") );
		  User.SendKeys(InternationalPage.swiftNumber, amountTranserData.get("SwiftMsg"));
		  User.SendKeys(InternationalPage.transferAmount,amountTranserData.get("Amount") ); 
		  User.Select_By_VisibleText(InternationalPage.transferType,amountTranserData.get("TransferType"));
		  User.SendKeys(InternationalPage.dateOfTransfer, amountTranserData.get("DOT"));
		  User.SendKeys(InternationalPage.transferDesc, amountTranserData.get("TransferDesc"));
		  Log.info("Transfer datails are entered");
	   
	}

	@Then("user should click on the fund transfer button")
	public void user_should_click_on_the_fund_transfer_button() {
		User.Click(InternationalPage.transferSubmitButton);
		 Log.info("User clicked on fund tranfer button");
	}

	@Then("user verifys the fund transfer successful message")
	public void user_verifys_the_fund_transfer_successful_message() {
		assertEquals(true, User.get_Url());
		 Log.info("tranfer Successful");
	}


}
