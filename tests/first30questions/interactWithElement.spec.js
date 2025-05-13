const { test, expect } = require('@playwright/test')
const { waitForDebugger } = require('inspector')

//test.use({viewportSize : {width:1943, height :934}})

test("Using normal flow", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")

    console.log(await page.viewportSize().width);

    console.log(await page.viewportSize().height);

   await page.setViewportSize({ width: 1943, height: 943 });

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

    await page.close()
})