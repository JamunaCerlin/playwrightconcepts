const { test } = require('@playwright/test')

test("uplaod a file", async ({ page }) => {

    await page.goto("https://demoqa.com/upload-download")

    await page.screenshot({ path: 'website.png' });

    const filename = "sampleFile.jpeg"

    const upload = page.locator('#uploadFile');

    const enabled = await upload.isEnabled()

    console.log("Upload button is enabled : " +enabled  );
    
    await upload.setInputFiles('/Users/apple123/Downloads/' + filename)
    
    await page.locator('#uploadedFilePath').waitFor()

    const pathelement = page.locator('#uploadedFilePath')

    const visible  =  await pathelement.isVisible()
    
    console.log(" Path of the file is displayed : " +visible);

    const path = await pathelement.textContent()

    const url =  page.url();// synchronous Playwright tracks the URL internally, so no need to query the browser.

    const title = await page.title();// Asynchronous Needs to execute JavaScript in the page (document.title) to fetch the value.

    
    if (path.includes(filename)) {

        console.log("File uploaded");
        
    }

    

})