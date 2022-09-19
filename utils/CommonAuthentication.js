const  demodevprooperties = require('./properties')
const dev= new demodevprooperties()
const { TestBaseClass } = require('./Testbase')
const Testbase = new TestBaseClass()


let loginpage=
{
    Emailaddress: '//*[@id="email"]',
    Password: '//*[@id="password"]',
    loginbutton: '//*[@id="root"]/div[2]/div[2]/div/form/button',
    Dashboard: '//*[@id="root"]/div[2]/div[3]/nav/div[1]/div[1]/h1',
    Username: '//*[@id="root"]/div[2]/div[3]/nav/div[1]/div[2]/div/div[1]',
    SettingsIcon: '//*[@id="root"]/div[2]/div[3]/nav/div[3]/button',
    LogoutLink: '//*[@id="root"]/div[2]/div[3]/nav/div[3]/ul/li[3]/a',
    LoginPageUrl: "https://demo-dev.skunexus.com/logout"

}


class CommonLogin 
{  
    async LoginToDemDevSite()
    {
    await page.goto(dev.url)
    await sleep(4000)
    await page.fill(loginpage.Emailaddress,dev.RegularUserEmail)
    await page.fill(loginpage.Password,dev.RegularUserPassword)
    await page.click(loginpage.loginbutton)
    await sleep(3000)
    await page.locator(loginpage.Dashboard)
    console.log("Login as a admin  "+await page.locator(loginpage.Username).textContent()) 
    await sleep(1000)
    }   

    async Logout()
    {    
        await sleep(2000)
        await page.click(loginpage.SettingsIcon)
        await page.click(loginpage.LogoutLink)
    }

}


function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {CommonLogin}
