	@mvnSearch @smokeTest @regression @unique
	Feature: MVNRepository Search
	
	User Story: CTB-4423
	
#	@mvnSearch
	Scenario: Mvn Repo Search verification - POSITIVE
	
	User should search for cucumber java in Mvn Repo and find the result
	
	Given user goes to mvnrepository application
	When user searches for "cucumber java"
	Then user should get "Cucumber JVM: Java" in first result
	
#	@mvnSearch
	Scenario: Mvn Repo Search verification - POSITIVE
	
	User should search for selenium java in Mvn Repo and find the result
	
	Given user goes to mvnrepository application
	When user searches for "selenium java"
	Then user should get "Selenium Java" in first result
	
#	@mvnSearch
	Scenario: Mvn Repo Search verification - POSITIVE
	
	User should search for testng in Mvn Repo and find the result
	
	Given user goes to mvnrepository application
	When user searches for "testng"
	Then user should get "TestNG" in first result