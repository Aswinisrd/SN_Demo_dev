const playwright = require("playwright")
const {Before, After, BeforeAll, AfterAll} = require('@cucumber/cucumber')

BeforeAll({timeout: 1000 * 1000},async () =>
{
    global.brower = await playwright['chromium'].launch({headless: false})
})

AfterAll(async () =>
{
    await global.brower.close()
})

Before({timeout: 1000 * 1000},async () => {
    global.context = await global.brower.newContext()
    global.page = await global.context.newPage()
})

After(async () => {
    await global.page.close()
    await global.context.close()
})