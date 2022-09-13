const  demodevprooperties = require('../setup/properties')

let loginpage=
{
    Emailaddress: '//*[@id="email"]',
    Password: '//*[@id="password"]',
    loginbutton: '//*[@id="root"]/div[2]/div[2]/div/form/button',
    Dashboard: '//*[@id="root"]/div[2]/div[3]/nav/div[1]/div[1]/h1',
    Username: '//*[@id="root"]/div[2]/div[3]/nav/div[1]/div[2]/div/div[1]'
}

const dev= new demodevprooperties()

class LoginPage 
{  
    async LaunchUrl()
    {
    await page.goto(dev.url)
    }

    async EnterEmailAddress(emailaddress)
    {
    await page.fill(loginpage.Emailaddress,emailaddress)
    }

    async EnterPassword(password)
    {
    await page.fill(loginpage.Password,password)
    }

    async ClickLoginBtn()
    {
    await page.click(loginpage.loginbutton)
    }
   
    async VerifyLogin(usertype)
    { 
           
            await page.locator(loginpage.Dashboard)
            console.log("Login as a "+usertype+"  "+await page.locator(loginpage.Username).textContent())        
    }   

    async pause()
    {
        await page.waitForTimeout(5000)   
    }

}

module.exports = {LoginPage}
