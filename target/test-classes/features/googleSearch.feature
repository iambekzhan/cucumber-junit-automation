	@regression
	Feature: Google Search
	
	Scenario: Search result verification on Google
	
	Given user goes to google.com
	When user searches for “apple”
	Then user should see “apple” related result