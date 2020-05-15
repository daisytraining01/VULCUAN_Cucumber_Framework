package com.cucumber.helper;

import org.openqa.selenium.By;

public class ObjectHelper {
	
	protected static By InputBox_Below_Label(String fieldName) {
		return By.xpath("//*[.='"+fieldName+"']/following::input[1]");
	}
	
	protected static By Button(String fieldName) {
		return By.xpath("//input[@class='button' and @value='"+fieldName+"']");
	}
	
	
	
//	Mohan-----------------------------------
	
	protected static By InpuBoxByName(String Name) {
		return By.name(Name);
	}
	
//	----------------------------------------
//desalin
	protected static By InputBox_Below_Label_Name(String fieldName) {
        return By.name(fieldName);
    }
	protected static By Button_Below_Label_Xpath(String fieldName) {
		return By.xpath("//*[.='"+fieldName+"']");
	}
	
	
	
	
	
	}

