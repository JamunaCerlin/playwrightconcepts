import { devices } from '@playwright/test';
//console.log(Object.keys(devices));

const { test, expect } = require("@playwright/test")

//test.use(devices['Pixel 5'])

test("Emulate mobile devices", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")

    await page.screenshot({ path: 'Saucelab.jpeg' });
    
})

test("Emulate mobile devices using in the test file level", async ({ page }) => {

    await page.goto("https://www.travis-ci.com/")

    await page.screenshot({ path: 'note3-emulation.png' });
    
})