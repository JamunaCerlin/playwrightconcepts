const { test, expect } = require('@playwright/test')


//test.use({viewportSize : {width:1943, height :934}})

test("Fetching input value", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")

    await page.fill('#user-name', 'visual_user');

    await page.fill('#password', 'secret_sauce');

    console.log(`Display the value displayed on the button (innerText): ${await page.locator('#user-name').inputValue()}`);
    console.log(`Display the value displayed on the button (textContent): ${await page.locator('#password').inputValue()}`);
    console.log(`Display the innerHTML of the button: ${await page.locator('#login-button').inputValue()}`);
    
    await page.locator('#login-button').click()

    await page.locator('.app_logo').waitFor()

    const cart = await page.locator('.app_logo').innerText()

    console.log(cart);


    


})