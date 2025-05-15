const { test, expect } = require('@playwright/test')



test("Normal drop down", async ({ browser }) => {

    const context = await browser.newContext()

    const page = await context.newPage()

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('#country').selectOption({ value: 'uk' })
    
    await page.waitForTimeout(5000)
})

test("colours drop down", async ({ browser }) => {

    const context = await browser.newContext()

    const page = await context.newPage()

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('#colors').selectOption({ value: 'yellow' })
    
    await page.waitForTimeout(5000)
})

test("Sorted drop down", async ({ browser }) => {

    const context = await browser.newContext()

    const page = await context.newPage()

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('#animals').selectOption({ value: 'zebra' })
    
    await page.waitForTimeout(5000)
})

test.only("Simplify way", async ({ browser }) => {

    const context = await browser.newContext()

    const page = await context.newPage()

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.selectOption('#country', 'uk');

    await page.selectOption('#colors', 'yellow');

    await page.selectOption('#animals', 'zebra');
    
    await page.waitForTimeout(5000)
})

