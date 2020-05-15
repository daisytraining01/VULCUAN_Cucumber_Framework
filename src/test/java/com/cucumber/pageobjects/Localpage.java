package com.cucumber.pageobjects;

import org.openqa.selenium.By;

import com.cucumber.helper.ObjectHelper;

public class Localpage extends ObjectHelper {
	
		public static final By accountNum = InputBox_Below_Label_Name("accno");
		public static final By password = InputBox_Below_Label_Name("pass");
		public static final By LoginButton = InputBox_Below_Label_Name("submitButton");
		public static final By PIN = InputBox_Below_Label_Name("accpin");
		public static final By validatePIN = InputBox_Below_Label_Name("submitButton");
		
		public static final By fundTransferBtn = Button_Below_Label_Xpath("Fund Transfer");
		
		
		public static final By receiverBank=By.xpath("(//*[@name='rbname'])[2]");
		public static final By receiverName = By.xpath("(//*[@name='rname'])[3]");
		public static final By receiverAccountNum = By.xpath("(//*[@name='accno'])[1]");
		public static final By swiftNumber = By.xpath("(//*[@name='swift'])[3]");
		
		public static final By transferAmt = By.xpath("(//*[@name='amt'])[1]");
		public static final By transferType = By.xpath("(//*[@name='toption'])[1]");
		public static final By dateOfTransfer = By.xpath("(//*[@name='dot'])[1]");
		public static final By transferDesc = By.xpath("(//*[@name='desc'])[1]");
		public static final By transferSubmitBut = InputBox_Below_Label_Name("submitButton");

}
