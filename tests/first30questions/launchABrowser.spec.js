const { test, expect } = require('@playwright/test')


test("Launch a page in differnt browser", async ({ page }) => {
    
    await page.goto("https://www.saucedemo.com/")


})

const { chromium } = require('playwright');

test.skip("Launching directly using real chrome", async () => {
    
    const browser = await chromium.launch({
        channel: 'chrome',
        headless: false,
      });
      const context = await browser.newContext();
      const page = await context.newPage();
      await page.goto('https://example.com');


})


test("open a new page with browser fixtures", async ({ browser }) => {
    
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.saucedemo.com/")
})

test("open a new page without browser fixtures", async ({ browser }) => {
    
   
    const page = await browser.newPage()
    await page.goto("https://www.saucedemo.com/")
})