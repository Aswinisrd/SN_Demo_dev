const  demodevprooperties = require('../utils/properties')
const dev= new demodevprooperties()
const { CommonLogin } = require('../utils/CommonAuthentication')
const DemoDev = new CommonLogin()
 
 let addproduct ={

    productURL : "https://demo-dev.skunexus.com/products",
	//ProductGrid: "//*[@id='sidebar-menu-item']/span[3]",
	emailid:"//input[@id='email']",
	password :"//input[@id='password']",
	Loginbtn :"//button[@class='btn btn-primary']", 
	Productbtn:"//*[@id='root']/div[2]/div[3]/div/div/div/div/div/div[1]/div[1]/div[2]/button[1]/span",
	Productname:"//input[@id='name']",
	Productsku:"//input[@id='sku']",
	Productweight:"//input[@id='weight']",
	Productdescription:"//textarea[@id='description']",
	Parentmaster:"#react-select-8-input",
	Savebtn:"text=Save",    
    notificationmessage :"//*[@id='root']/div[1]/div/div/div",
    ProductName: null,
    Emailaddress: '//*[@id="email"]',
    Password: '//*[@id="password"]',
    loginbutton: '//*[@id="root"]/div[2]/div[2]/div/form/button',
	Filtericon: '//*[@id="root"]/div[2]/div[3]/div/div/div/div/div/div[1]/div[2]/div[2]/div/button',
	Skufield: '//*[@id="root"]/div[2]/div[3]/div/div/div/div/div/div[1]/div[2]/div[2]/div[2]/div/ul/li[1]/div/div[2]/input',
    productsku: null,
	Skuresult: '//*[@id="root"]/div[2]/div[3]/div/div/div/div/div/div[2]/div/div/div[1]/div/table[1]/tbody/tr/td[2]/a'
}




class AddProduct
{  
    
	async GototheProductgrid()
	{   
		await sleep(3000)
	    await page.goto(addproduct.productURL);
		//await page.click(addproduct.ProductGrid);
		await sleep(1000)
	}
	
	async ClickonAddproduct() 
	{
	    await page.click(addproduct.Productbtn);
		await sleep(1000)
	}
    
	async Enterproductname(name)
	{   
	    await page.fill(addproduct.Productname,name);
	    addproduct.ProductName = name;

	}
	
	async Enterproductsku(sku)
	{   
	    await page.fill(addproduct.Productsku,sku);
		addproduct.productsku = sku
		console.log("product sku is captured "+ addproduct.productsku);

	}
	
	async Enterproductweight( weight)
	{   
	    await page.fill(addproduct.Productweight,weight);


	}
	
	async Enterproductdes(des)
	{   
	    await page.fill(addproduct.Productdescription,des);

	}
	
	
	async Clicksavebtn()
	{   
      
	    await page.locator(addproduct.Savebtn).click();
        await sleep(2000)

	}
	
	async ProductVerification()
	{   
	    await page.goto(addproduct.productURL);
		await sleep(5000)
		await page.locator(addproduct.Filtericon).click();
		await sleep(2000)
		await page.locator(addproduct.Skufield).fill(addproduct.productsku);
		await sleep(4000)
		console.log(await page.locator(addproduct.Skuresult).textContent());
		let SKU = await page.locator(addproduct.Skuresult).textContent();
		if( SKU == addproduct.productsku)
        {
			console.log("Product "+addproduct.productsku+"  successfully added");
		}
		else
		{
			console.log("Product "+addproduct.productsku+" is not added");
		}


	}
  
}	

function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {AddProduct}
