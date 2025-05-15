const { test, expect } = require('@playwright/test')



test("Mouse action", async ({ browser }) => {

    const context = await browser.newContext()

    const page = await context.newPage()

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('.dropbtn').hover()

    await page.locator('a[href="#"]').last().click()

    console.log(("Hovered and clicked on Laptops"));

    await page.getByRole('button', { name: 'Copy Text' }).dblclick();

    const drag = page.locator('#draggable')
    
    const drop = page.locator('#droppable')

    await drag.dragTo(drop)

})


test.only('Right click', async ({ page }) => {
    
    await page.goto('https://the-internet.herokuapp.com/context_menu')
    
    
    
    page.on('dialog', async dialog => {
        
        await console.log(`Dialog message is ${dialog.message()}`);

        await dialog.accept()


    })

    await page.locator('#hot-spot').click({ button: "right" })

})