package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utilities.Driver;

public class MyStoreHomePage {
	
	private WebDriver driver;
	
	public MyStoreHomePage() {
		driver = Driver.getDriver();
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(linkText = "DRESSES")
	public WebElement dressesLink;
	
	@FindBy(linkText = "CASUAL DRESSES")
	public WebElement casualDressesLink;
	
	@FindBy(linkText = "EVENING DRESSES")
	public WebElement eveningDressesLink;
	
	@FindBy(xpath = "//span[@class='cat-name']")
	public WebElement headerText;
	
	
}
