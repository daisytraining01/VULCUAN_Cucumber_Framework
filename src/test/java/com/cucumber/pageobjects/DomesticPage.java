package com.cucumber.pageobjects;

import org.openqa.selenium.By;

import com.cucumber.helper.ObjectHelper;

public class DomesticPage extends ObjectHelper {


	// Shambhu
	public static final By accountNumber = InputBox_Below_Label_Name("accno");
	public static final By passwordTextbox = InputBox_Below_Label_Name("pass");
	public static final By LoginButton = InputBox_Below_Label_Name("submitButton");
	public static final By PINNumber = InputBox_Below_Label_Name("accpin");
	public static final By validatePIN = InputBox_Below_Label_Name("submitButton");
	
	public static final By fundTransferBtn = Button_Below_Label_Xpath("Fund Transfer");
	
	
	public static final By receiverBankName=By.xpath("(//*[@name='rbname'])[2]");
	public static final By receiverName = By.xpath("(//*[@name='rname'])[3]");
	public static final By receiverAccountNumber = By.xpath("(//*[@name='accno'])[1]");
	public static final By swiftNumber = By.xpath("(//*[@name='swift'])[3]");
	
	public static final By transferAmount = By.xpath("(//*[@name='amt'])[1]");
	public static final By transferType = By.xpath("(//*[@name='toption'])[1]");// Domestic Transfer  Sign Out
	public static final By dateOfTransfer = By.xpath("(//*[@name='dot'])[1]");
	public static final By transferDesc = By.xpath("(//*[@name='desc'])[1]");
	public static final By transferSubmitButton = InputBox_Below_Label_Name("submitButton");

	


}
