Feature: Login action

@Login
Scenario Outline: Login with different user type credential
Given Launch the demo-dev url
When Enter the emailaddress "<Emailaddress>"
When Enter the password "<Password>"
When Click on the login button
Then It should redirect to the dashboard "<usertype>"

Examples:
|Emailaddress                 | Password              | usertype             |
|developer@skunexus.com       |ChangeMe2021!          | Systemadmin          |
|aswini+regularuser1@skunexus.com    |Test@123               | Regularuser          |
|aswini+vendoruser1@skunexus.com |Test@123            | Vendoruser           |    
