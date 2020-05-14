package com.cucumber.helper;

import org.openqa.selenium.By;

public class ObjectHelper {
	
	protected static By InputBox_Below_Label(String fieldName) {
		return By.xpath("//*[.='"+fieldName+"']/following::input[1]");
	}
	
	protected static By Button(String fieldName) {
		return By.xpath("//input[@class='button' and @value='"+fieldName+"']");
	}

	//Shambhu
		protected static By Button_Below_Label_Xpath(String fieldName) {//(//*[@name='rbname'])[2]
			return By.xpath("//*[.='"+fieldName+"']");
		}
		protected static By InputBox_Below_Label_Name(String fieldName) {
			return By.name(fieldName);
		}
		
		protected static By InpuBoxByName(String Name) {
			return By.name(Name);
		}


	//Shambhu
	protected static By Text_Button_Below_Label_(String fieldName) {
		return By.xpath("//*[.='"+fieldName+"']");
	}

}