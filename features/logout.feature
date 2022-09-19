Feature: Logout action

@logout 
Scenario Outline: Logout with different user type credential
Given Go to the demo-dev site
When Login as a "<Emailaddress>" "<Password>"
Then Click on the setting icon
When Click on logout link
Then "<usertype>" should redirect to the login page

Examples:
|Emailaddress                 | Password              | usertype            |
|developer@skunexus.com       |ChangeMe2021!          | Systemadmin          |
|aswini+user1@skunexus.com    |Test@123               | Regularuser          |
|aswini+vendoruser1@skunexus.com |Test@123            | Vendoruser           |    
