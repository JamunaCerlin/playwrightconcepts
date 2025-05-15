const { test, expect } = require('@playwright/test')



test("Mouse action", async ({ browser }) => {

    const context = await browser.newContext()

    const page = await context.newPage()

    await page.goto("https://the-internet.herokuapp.com/key_presses")

    const field = page.locator('#target')

    await field.fill('Playwright Testing')

    await field.press('Backspace')

    await page.waitForTimeout(1000)

    await field.press('Home')

    await page.waitForTimeout(1000)

    await field.press('Delete')

    await page.waitForTimeout(1000)

    await field.press('Meta+A')

    await page.waitForTimeout(1000)

    await field.press('Meta+X')

    await page.waitForTimeout(1000)

    await field.press('Meta+V')

    await page.waitForTimeout(1000)

   

})