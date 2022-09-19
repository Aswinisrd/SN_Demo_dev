const playwright = require("playwright")
const demodevproperties = require("../utils/properties")
const Prop = new demodevproperties()

class TestBaseClass
{    

    async LanunchBrowser()
    {   
		switch(Prop.Browser)
		{
		case "chromium":
		    global.browser = await playwright[Prop.Browser].launch({headless: false})
    

			break;

		case "firefox":
		    global.browser = await playwright[Prop.Browser].launch({headless: false})
			break;

		default: 
			System.out.println("Please pass the right browser name");
			break;
		}
    
        global.context = await global.browser.newContext()
        global.page = await global.context.newPage()    
    }

	async Closebrowser()
	{   
		await page.close()	
		await context.close()
		await browser.close()
	}

	async wait(ms) {
		return new Promise(resolve => {
		   setTimeout(() => { resolve(ms);}, ms);
	   });
  
}
}

function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {TestBaseClass}
