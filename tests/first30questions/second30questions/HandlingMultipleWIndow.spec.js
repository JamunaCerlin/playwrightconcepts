const { test, expect } = require('@playwright/test')

test("Child window in new tab", async ({ browser }) => {

    const context = await browser.newContext()

    const page = await context.newPage()

    await page.goto("https://testautomationpractice.blogspot.com/")

    const [newpage] = await Promise.all(
        [
             context.waitForEvent('page'), //listen for new page,

             page.locator("button[onclick='myFunction()']").click()
        ])
    console.log(await newpage.locator("div h1").textContent())

    await page.pause()

    await page.close()

    //console.log(await page.locator("button[onclick='myFunction()']").textContent())
})

test("Child window in new pop up window", async ({ browser }) => {

    const context = await browser.newContext()

    const page = await context.newPage()

    await page.goto("https://testautomationpractice.blogspot.com/")

    const [newpage] = await Promise.all(
        [
             context.waitForEvent('page'), //listen for new page,

             page.locator("#PopUp").click()
        ])
    console.log(await newpage.locator("h4[class*='alert-heading']").textContent())

    await page.pause()

    await page.close()

    //console.log(await page.locator("button[onclick='myFunction()']").textContent())
})