	Feature: Account Holder withdraws cash
		In order to get money when the bank is closed
		As an Account Holder
		I want to withdraw cash from an ATM
	@test
	Scenario Outline: Account has sufficient funds
		Given the account balance is "$100"
		  And the machine contains enough money
		  And we introduce a "<card_type>"
		  And the card is valid
		When the Account Holder request "<amount>"
		Then the ATM should dispense "<amount>"
		  And the account balance should be "<ending_balance>"
		  And the card should be returned
		
		Examples:
		  | amount | ending_balance | card_type | hiptest-uid |
		  | $100 | $0 | Visa |  |
		  | $50 | $50 | AMEX |  |
		  | $20 | $80 | Mastercard |  |
		  
	Scenario: Account has insufficient funds
		Given the accound balance is "$10"
		  And the card is valid
		  And the machine contains enough money
		When the Account Holder requests "$20"
		Then the ATM should not dispense any money
		  And the ATM should say there are insufficient funds
		
	Scenario: Card has been disabled
		Given the card is disabled
		When the Account Holder requests "$10"
		Then the ATM should retain the card
		  And the ATM should say the card has been retained