package steps;

import org.junit.Assert;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.MyStoreHomePage;
import utilities.Config;
import utilities.Driver;

public class ShoppingDressTypes_steps {
	
	MyStoreHomePage myStore = new MyStoreHomePage();
	Actions action = new Actions(Driver.getDriver());
	
	@Given("user goes to shopping homepage")
	public void user_goes_to_shopping_homepage() {
	    Driver.getDriver().get(Config.getValue("casualurl"));;
	}

	@Given("user hovers over on Dresses")
	public void user_hovers_over_on_Dresses() {
	    
	    
	    action.moveToElement(myStore.dressesLink).perform();
	}

	@When("user click on Casual Dresses")
	public void user_click_on_Casual_Dresses() {
	    myStore.casualDressesLink.click();
	}

	@Then("page should display {string} header")
	public void page_should_display_header(String expectedText) {
	    String actual = myStore.headerText.getText().trim();
	    Assert.assertEquals("Shopping casual dresses verification", expectedText, actual);
	}
	
	@When("user click on Evening Dresses")
	public void user_click_on_Evening_Dresses() {
		action.moveToElement(myStore.dressesLink).perform();
		myStore.eveningDressesLink.click();
	}
}
