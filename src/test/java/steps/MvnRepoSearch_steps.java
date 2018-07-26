package steps;

import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.MvnRepoHomePage;
import utilities.Config;
import utilities.Driver;

public class MvnRepoSearch_steps {
	
	MvnRepoHomePage mvn = new MvnRepoHomePage();
	WebDriver driver = Driver.getDriver();
					// STEP
	@Given("user goes to mvnrepository application")				// STEP DEFINITIONS
	public void user_goes_to_mvnrepository_application() {
	    driver.get(Config.getValue("mvnurl"));						// JAVA AUTOMATION CODE
	}

	@When("user searches for cucumber java")
	public void user_searches_for_cucumber_java() {
//	    Driver.getDriver().findElement(By.id("query")).sendKeys("cucumber java" + Keys.ENTER);
		mvn.searchBox.sendKeys(Config.getValue("searchValue") + Keys.ENTER);
	}

	@Then("user should get Cucumber JVM: Java in first result")
	public void user_should_get_Cucumber_JVM_Java_in_first_result() {
//	    WebElement firstResult = Driver.getDriver().findElement(By.linkText("Cucumber JVM: Java"));
//	    Assert.assertTrue(firstResult.isDisplayed());
	    Assert.assertEquals(Config.getValue("expectedValue"), mvn.firstResult.getText());
	}
	
	@When("user searches for {string}")
	public void user_searches_for(String searchValue) {
	    mvn.searchBox.sendKeys(searchValue + Keys.ENTER);
	}

	@Then("user should get {string} in first result")
	public void user_should_get_in_first_result(String expectedValue) {
	    Assert.assertEquals(expectedValue, mvn.firstResult.getText());
	}
}
