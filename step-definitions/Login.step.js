const {Given, When, Then , defineStep} = require('@cucumber/cucumber')
const {LoginPage} = require('../page-objects/login-page')

const Login = new LoginPage()

Given('Launch the demo-dev url', async function()
{
    await Login.LaunchUrl()
})

When(/^Enter the emailaddress "([^"]*)"$/, async function(Emailaddress)
{
    await Login.EnterEmailAddress(Emailaddress)
})

When(/^Enter the password "([^"]*)"$/, async function(Password)
{
    await Login.EnterPassword(Password)
})

When('Click on the login button', async function()
{
    await Login.ClickLoginBtn()
})

Then(/^It should redirect to the dashboard "([^"]*)"$/, async function(usertype)
{
    await Login.VerifyLogin(usertype)
})