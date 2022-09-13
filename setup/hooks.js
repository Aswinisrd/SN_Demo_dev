const playwright = require("playwright")
const {Before, After, BeforeAll, AfterAll} = require('@cucumber/cucumber')

BeforeAll(async () =>
{
    global.brower = await playwright['chromium'].launch({headless: false}, { timeout: 10000 })
})

AfterAll(async () =>
{
    await global.brower.close()
})

Before(async () => {
    global.context = await global.brower.newContext()
    global.page = await global.context.newPage()
})

After(async () => {
    await global.page.close()
    await global.context.close()
})