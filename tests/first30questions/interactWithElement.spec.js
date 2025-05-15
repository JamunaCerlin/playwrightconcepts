const { test, expect } = require('@playwright/test')
const { waitForDebugger } = require('inspector')

//test.use({viewport : {width:1943, height :934}})

test("Using normal flow", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")

    console.log(await page.viewportSize().width);

    console.log(await page.viewportSize().height);

   await page.setViewportSize({ width: 1500, height: 500 });

    await page.locator('#user-name').fill('visual_user')

    await page.locator('#password').fill('secret_sauce')

    await page.locator('#login-button').click()

    //await page.locator('.app_logo').waitFor()

    await page.waitForSelector('.app_logo')

    const title = await page.locator('.app_logo').textContent()

    console.log(title);

})

test("Using view port size", async ({ page }) => {

    await page.goto("https://demoqa.com/")

    console.log( page.viewportSize().width);

    console.log( page.viewportSize().height);

    await page.setViewportSize({ width: 1000, height: 500 } )

    await page.close()
})

test.only("viewport in browser context ", async ({ browser }) => {

    const context   =     await browser.newContext({ viewport: { width: 1000, height: 500 } })
    
    const page      =    await context.newPage()
    
    await page.goto('https://www.travis-ci.com/')
    

})