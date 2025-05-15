const { test, expect } = require('@playwright/test')

test("Handing", async ({ browser }) => {

    const context = await browser.newContext()

    const page = await context.newPage()

    await page.goto('https://www.saucedemo.com/')

    const value = await page.inputValue('#user-name')
    
    console.log(value);


})