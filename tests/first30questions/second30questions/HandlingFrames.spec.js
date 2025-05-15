const { test, expect } = require('@playwright/test')

test("Handing", async ({ browser }) => {

    const context = await browser.newContext()

    const page = await context.newPage()

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    const frame = await page.frameLocator('#courses-iframe');

    const emailid = frame.locator('a[class="new-navbar-highlighter"]').first();

    await emailid.waitFor()

    const enabled = await emailid.isEnabled();

    console.log('All access plan:', enabled);

    await expect(emailid).toBeVisible()
    
    await emailid.click()

    await expect(frame.locator('.text span')).toHaveText('13,522')
    

    await browser.close();



})