	@regression1
	Feature: Casual Dress Finding
	
	Background: Go to homepage
		Given user goes to shopping homepage
		And user hovers over on Dresses
		
	@shopping
	Scenario: Verification of Casual Dresses
		
		When user click on Casual Dresses
		Then page should display "CASUAL DRESSES" header
		
	@uniqueID
	Scenario: Verification of Evening Dresses
		
		When user click on Evening Dresses
		Then page should display "EVENING DRESSES" header
		