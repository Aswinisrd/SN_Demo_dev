const {Given, When, Then , defineStep} = require('@cucumber/cucumber')
const {LoginPage} = require('../page-objects/login-page')

const Login = new LoginPage()

Given('Launch the demo-dev url',{timeout: 1000 * 1000},  async function()
{
    await Login.LaunchUrl()
})

When(/^Enter the emailaddress "([^"]*)"$/, {timeout: 1000 * 1000},async function(Emailaddress)
{
    await Login.EnterEmailAddress(Emailaddress)
})

When(/^Enter the password "([^"]*)"$/, {timeout: 1000 * 1000}, async function(Password)
{
    await Login.EnterPassword(Password)
})

When('Click on the login button',{timeout: 1000 * 1000}, async function()
{
    await Login.ClickLoginBtn()
})

Then(/^It should redirect to the dashboard "([^"]*)"$/,{timeout: 1000 * 1000}, async function(usertype)
{
    await Login.VerifyLogin(usertype)
})