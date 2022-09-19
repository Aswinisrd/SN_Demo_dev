const {Given, When, Then , defineStep, Before, After} = require('@cucumber/cucumber')
const {LoginPage} = require('../page-objects/Logout')
const Login = new LoginPage()
const playwright = require("playwright")
const demodevproperties = require("../utils/properties")
const Prop = new demodevproperties()
const { TestBaseClass } = require('../utils/Testbase')
const Testbase = new TestBaseClass()

Given('Go to the demo-dev site',{timeout: 1000 * 1000},  async function()
{
    await Testbase.LanunchBrowser();
    await Login.LaunchUrl()
})

When(/^Login as a "([^"]*)" "([^"]*)"$/,{timeout: 1000 * 1000}, async function(emailaddress,password)
{   
    await Login.EnterEmailAddress(emailaddress)
    await Login.EnterPassword(password)
    await Login.ClickLoginBtn()
})

Then('Click on the setting icon',{timeout: 1000 * 1000}, async function()
{
    await Login.ClickSettingsIcon()
})

When('Click on logout link',{timeout: 1000 * 1000}, async function()
{
    await Login.ClickLogoutLink()
})

Then(/^"([^"]*)" should redirect to the login page$/,{timeout: 1000 * 1000}, async function(usertype)
{
    await Login.VerifytheLogoutFunctionality(usertype)
    await Testbase.Closebrowser()
})