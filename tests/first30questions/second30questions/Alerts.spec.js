const { test, expect } = require('@playwright/test')

test("Simple Alert", async ({ page }) => {
    
    await page.goto('https://testautomationpractice.blogspot.com/')

   page.on('dialog', async dialog => {
        
        console.log(`Dialog message : ${dialog.message()}`)
        await dialog.accept()
    })
    
    await page.locator('#alertBtn').click()

})

test("Confirmation Alert", async ({ page }) => {
    
    await page.goto('https://testautomationpractice.blogspot.com/')

   page.on('dialog', async dialog => {
        
        console.log(`Dialog message : ${dialog.message()}`)
        await dialog.dismiss()
    })
    
    await page.locator('#confirmBtn').click()

})

test.only("Promt alert ", async ({ browser }) => {
    
    const context = await browser.newContext({ viewport: { width: 1000, height: 934 } })
    
    const page = await context.newPage()

    await page.goto('https://testautomationpractice.blogspot.com/')

    const value  = "Jamuna"
    
    page.on('dialog', async dialog => {
        
       console.log(`Dialog message is ${dialog.message()}`);
        
        await dialog.accept(value)

    })

    await page.locator('#promptBtn').click()

    const msg = page.locator('#demo')

    await expect(msg).toBeVisible()

    await expect(msg).toHaveText(`Hello ${value}! How are you today?`)

})

