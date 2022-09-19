const {Given, When,Then , defineStep, BeforeAll, AfterAll} = require('@cucumber/cucumber')
const playwright = require("playwright")
const {AddProduct} = require('../page-objects/Addproduct')
const { CommonLogin } = require('../utils/CommonAuthentication')
const Product_Add = new AddProduct()
const DemoDev = new CommonLogin()
const demodevproperties = require("../utils/properties")
const Prop = new demodevproperties()
const { TestBaseClass } = require('../utils/Testbase')
const Testbase = new TestBaseClass()


Given('Login to the demo dev site',{timeout: 1000 * 1000},  async function()
{   
    await Testbase.LanunchBrowser();
    await DemoDev.LoginToDemDevSite()
})

Given('Launch the product grid url',{timeout: 10000 * 10000},  async function()
{
    await Product_Add.GototheProductgrid();
})

When('Click on the add product button',{timeout: 10000 * 10000},  async function()
{
    await Product_Add.ClickonAddproduct();
} )

Then(/^Enter the product name "([^\"]*)"$/,{timeout: 10000 * 10000},  async function(name)
{
   await Product_Add.Enterproductname(name);
})

Then(/^Enter the product sku "([^\"]*)"$/,{timeout: 10000 * 1000},  async function(sku)
{
   await Product_Add.Enterproductsku(sku);
})

Then(/^Enter the product Weight "([^\"]*)"$/,{timeout: 1000 * 1000},  async function(weight)
{
    await Product_Add.Enterproductweight(weight);
})

Then(/^Enter the product description "([^\"]*)"$/,{timeout: 1000 * 1000},  async function(des)
{
   await Product_Add.Enterproductdes(des);
})

When('Click on the save button',{timeout: 1000 * 1000},  async function()
{
    await Product_Add.Clicksavebtn();
})

Then('Product should be listed on the product grid',{timeout: 1000 * 1000},  async function()
{
    await Product_Add.ProductVerification();
})

Given('Logout from the demo dev site',{timeout: 1000 * 1000}, async function()
{
    await DemoDev.Logout()
    await Testbase.Closebrowser()
})