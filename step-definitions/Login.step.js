const {Given, When, Then , defineStep, Before, After} = require('@cucumber/cucumber')
const {LoginPage} = require('../page-objects/login-page')
const Login = new LoginPage()
const playwright = require("playwright")
const demodevproperties = require("../utils/properties")
const Prop = new demodevproperties()
const { TestBaseClass } = require('../utils/Testbase')
const Testbase = new TestBaseClass()


Given('Launch the demo-dev url',{timeout: 1000 * 1000},  async function()
{   
    await Testbase.LanunchBrowser();
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
    await Testbase.Closebrowser()
})

