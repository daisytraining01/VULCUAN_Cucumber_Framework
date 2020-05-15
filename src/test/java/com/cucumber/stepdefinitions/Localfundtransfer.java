package com.cucumber.stepdefinitions;

import static org.testng.Assert.assertEquals;

import java.sql.SQLException;
import java.text.ParseException;
import java.util.Hashtable;

import org.apache.log4j.Logger;

import com.codoid.products.exception.FilloException;
import com.cucumber.helper.UserActions;
import com.cucumber.pageobjects.Localpage;
import com.manager.TestData;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class Localfundtransfer {
	private static Logger Log = Logger.getLogger(UserActions.class.getName());

	UserActions User;
	Hashtable<String, String> Data;

	public Localfundtransfer(UserActions User) {
		this.User = User;
	}



	@Then("User enters Username : {string} , Password : {string}, pin: {string} and click on login button")
	public void user_enters_Username_Password_pin_and_click_on_login_button(String userName, String password,
			String pin) {
		User.SendKeys(Localpage.accountNum, userName);
		User.SendKeys(Localpage.password, password);
		User.Click(Localpage.LoginButton);
		User.SendKeys(Localpage.PIN, pin);
		User.Click(Localpage.validatePIN);
		Log.info("Username and Password enterd and user Logedin");
	}

	@Then("Application base page is displayed with all fund tranfer details")
	public void application_base_page_is_displayed_with_all_fund_tranfer_details() throws InterruptedException {
		assertEquals(true, User.isEnabled(Localpage.fundTransferBtn));
		User.Click(Localpage.fundTransferBtn);
		 Thread.sleep(2000);
		
		assertEquals(true, User.isDisplayed(Localpage.receiverBank));
		assertEquals(true, User.isDisplayed(Localpage.receiverName));
		assertEquals(true, User.isDisplayed(Localpage.receiverAccountNum));
		assertEquals(true, User.isDisplayed(Localpage.swiftNumber));
		assertEquals(true, User.isDisplayed(Localpage.transferAmt));
		assertEquals(true, User.isDisplayed(Localpage.transferType));
		assertEquals(true, User.isDisplayed(Localpage.dateOfTransfer));
		assertEquals(true, User.isDisplayed(Localpage.transferDesc));
		assertEquals(true, User.isDisplayed(Localpage.transferSubmitBut));
		 Log.info("All transfer fields are displayed");

	}
	

	
	




@Then("User enters all fund tranfer mandatory {string}")
public void user_enters_all_fund_tranfer_mandatory(String Testata) throws ClassNotFoundException, SQLException, FilloException, ParseException, InterruptedException {
	Hashtable<String, String> amountTranserData =  new TestData().getCommon_Data("./src/test/resources/database/TestData_desalin.xlsx", "Databinding", Testata, "LocalFT");
	Thread.sleep(2000);
  User.SendKeys(Localpage.receiverBank, amountTranserData.get("ReceiverBankName") );
  User.SendKeys(Localpage.receiverName, amountTranserData.get("ReceiverName") );
  User.SendKeys(Localpage.receiverAccountNum, amountTranserData.get("ReceiverAccNum") );
  User.SendKeys(Localpage.swiftNumber, amountTranserData.get("SWIFTmsg"));
  User.SendKeys(Localpage.transferAmt,amountTranserData.get("Amount") );
  User.Select_By_VisibleText(Localpage.transferType,amountTranserData.get("TransferType"));
  User.SendKeys(Localpage.dateOfTransfer, amountTranserData.get("DateofTransfer"));
  User.SendKeys(Localpage.transferDesc, amountTranserData.get("TransferDescription")); 
  Log.info("Transfer datails are filled");
}






	@Then("Clicks on the transfer submit button")
	public void clicks_on_the_transfer_submit_button() throws InterruptedException {
		User.Click(Localpage.transferSubmitBut);
		Thread.sleep(5000);
		assertEquals(true, User.get_Url());

	}

}
