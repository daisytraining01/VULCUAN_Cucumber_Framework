package com.cucumber.pageobjects;

import org.openqa.selenium.By;

import com.cucumber.helper.ObjectHelper;

public class SignupPage_mohan extends ObjectHelper {
	
	public static final By FirstName = InpuBoxByName("firstname");
	public static final By LastName = InpuBoxByName("lastname");
	public static final By Password = InpuBoxByName("password");
	public static final By confirmPassword = InpuBoxByName("cpassword");
	public static final By Email = InpuBoxByName("email");
	public static final By PhonenNumber = InpuBoxByName("phone");
	public static final By DateOfBirth = InpuBoxByName("dob");
	public static final By Gender = InpuBoxByName("gender");
	
	
	public static final By Address = InpuBoxByName("address");
	public static final By City = InpuBoxByName("city");
	public static final By Zipcode= InpuBoxByName("zipcode");
	public static final By State = InpuBoxByName("state");
	
	public static final By AccoubtType = InpuBoxByName("acctype");
	public static final By AccountPin= InpuBoxByName("pin");
	public static final By VerifyPin = InpuBoxByName("cpin");
	
	public static final By RegisterAccount = InpuBoxByName("submitButton");
}
