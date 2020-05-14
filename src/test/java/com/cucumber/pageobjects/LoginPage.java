package com.cucumber.pageobjects;

import org.openqa.selenium.By;

import com.cucumber.helper.ObjectHelper;

public class LoginPage extends ObjectHelper{
	
public static final By UserName = InpuBoxByName("accno");
	
	
	public static final By Password = InpuBoxByName("pass");

	public static final By SubmitButton = Button("Submit");
	
	public static final By Submit = InpuBoxByName("submitButton");
	public static final By PIN = InpuBoxByName("accpin");

	

}
