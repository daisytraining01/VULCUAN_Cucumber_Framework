package com.cucumber.stepdefinitions;

import static org.testng.Assert.assertEquals;

import java.sql.SQLException;
import java.text.ParseException;
import java.util.Hashtable;

import org.apache.log4j.Logger;

import com.codoid.products.exception.FilloException;
import com.cucumber.helper.UserActions;
import com.cucumber.pageobjects.DomesticPage;
import com.manager.TestData;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class Shambhu_DFundtransfer {

	private static Logger Log = Logger.getLogger(UserActions.class.getName());

	UserActions User;
	Hashtable<String, String> Data;

	public Shambhu_DFundtransfer(UserActions User) {
		this.User = User;
	}

	@Given("user launched {string} in browser")
	public void user_launched_in_browser(String Url) {
		User.OpenUrl(Url);
		Log.info("Application is launched with URL");
	}

	@Then("user should enter {string},{string} {string} and click on submit button")
	public void user_should_enter_and_click_on_submit_button(String accountNum, String pass, String pin) {
		assertEquals(true, User.isDisplayed(DomesticPage.accountNumber));
		  assertEquals(true, User.isDisplayed(DomesticPage.passwordTextbox));
		  assertEquals(true, User.isEnabled(DomesticPage.LoginButton));
		  User.SendKeys(DomesticPage.accountNumber, accountNum);
		  User.SendKeys(DomesticPage.passwordTextbox, pass);
		  User.Click(DomesticPage.LoginButton);
		  assertEquals(true, User.isDisplayed(DomesticPage.PINNumber));
		  assertEquals(true, User.isEnabled(DomesticPage.validatePIN));
		  User.SendKeys(DomesticPage.PINNumber, pin);
		  User.Click(DomesticPage.validatePIN);
		  Log.info("Username and Password enterd and user Logedin");
	}

	@Then("user should validate page is displayed with all fund transfer fields")
	public void user_should_validate_page_is_displayed_with_all_fund_transfer_fields() throws InterruptedException {
		 User.Click(DomesticPage.fundTransferBtn);
		 Thread.sleep(5000);
		 System.out.println("GO");
		assertEquals(true, User.isEnabled(DomesticPage.fundTransferBtn));
		assertEquals(true, User.isDisplayed(DomesticPage.receiverBankName));
		assertEquals(true, User.isDisplayed(DomesticPage.receiverName));
		assertEquals(true, User.isDisplayed(DomesticPage.receiverAccountNumber));
		assertEquals(true, User.isDisplayed(DomesticPage.swiftNumber));
		assertEquals(true, User.isDisplayed(DomesticPage.transferAmount));
		assertEquals(true, User.isDisplayed(DomesticPage.transferType));
		assertEquals(true, User.isDisplayed(DomesticPage.dateOfTransfer));
		assertEquals(true, User.isDisplayed(DomesticPage.transferDesc));
		assertEquals(true, User.isDisplayed(DomesticPage.transferSubmitButton));
		 Log.info("All transfer mandatory field are displayed");

	}
	


	@Then("user enters {string} and fund transfer details")
	public void user_enters_and_fund_transfer_details(String dataBinding)  throws ClassNotFoundException, SQLException, FilloException, ParseException, InterruptedException {
		
		Hashtable<String, String> amountTranserData =  new TestData().getCommon_Data("./src/test/resources/database/TestData.xlsx", "DataBinding", dataBinding, "DomesticFTA");
 		Thread.sleep(5000);
 		System.out.println(amountTranserData);
 		System.out.println(amountTranserData.get("ReciverBankName"));
		System.out.println(amountTranserData.get("ReceiverName"));
		  User.SendKeys(DomesticPage.receiverBankName, amountTranserData.get("ReciverBankName") );//SBI
		  User.SendKeys(DomesticPage.receiverName, amountTranserData.get("ReceiverName") );//John
		  User.SendKeys(DomesticPage.receiverAccountNumber, amountTranserData.get("ReceAccNum") );//1234556655
		  User.SendKeys(DomesticPage.swiftNumber, amountTranserData.get("SwiftMsg"));//MT103
		  User.SendKeys(DomesticPage.transferAmount,amountTranserData.get("Amount") ); //5
		  User.Select_By_VisibleText(DomesticPage.transferType,amountTranserData.get("TransferType"));//Domestic Transfer
		  User.SendKeys(DomesticPage.dateOfTransfer, amountTranserData.get("DOT"));//11-11-2222
		  User.SendKeys(DomesticPage.transferDesc, amountTranserData.get("TransferDesc")); //transfer
		  Log.info("Transfer datails are entered");

	}

	@Then("user should clicks on the fund transfer button")
	public void user_should_clicks_on_the_fund_transfer_button() {
		User.Click(DomesticPage.transferSubmitButton);
		 Log.info("User clicked on fund tranfer button");
	}

	@Then("user verifies the fund transfer successful message")
	public void user_verifies_the_fund_transfer_successful_message() {
		assertEquals(true, User.get_Url());
		 Log.info("tranfer Successful");
	}

	


}
