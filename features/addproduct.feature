Feature: Create Product Functionality


@LoginDemodev
Scenario:  Login to the demo dev site
Given  Login to the demo dev site

@CreateProduct
Scenario Outline:  Create Product Functionality
Given  Launch the product grid url
When   Click on the add product button
Then   Enter the product name "<ProductName>" 
Then   Enter the product sku "<ProductSKU>"
Then   Enter the product Weight "<ProductWeight>"
Then   Enter the product description "<ProductDescription>"
When   Click on the save button
Then   Product should be listed on the product grid

Examples:
|ProductName                | ProductSKU            | ProductWeight    | ProductDescription |  
|	AutomationProduct6  	|	AutomationProduct6	| 300              | PlayAutoTest1 |	
|	AutomationProduct7  	|	AutomationProduct7	| 300              | PlayAutoTest1 |	
|	AutomationProduct8   	|	AutomationProduct8	| 300              | PlayAutoTest1 |	

@Logout
Scenario: Logout from the demo dev site
Given Logout from the demo dev site