import { chromium, test } from "@playwright/test";

test("login test" ,async ()=>{
    const browser = await chromium.launch({
        headless:false
    })
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.demoblaze.com/");

    await page.click('#login2');
    await page.fill('#loginusername', "admin");
    await page.fill('#loginpassword', "admin");
    await page.click("//button[text()='Log in']");
    await page.waitForTimeout(5000);


    const page1 = await context.newPage();
    await page1.goto("https://www.demoblaze.com/cart.html");

   await  page.waitForTimeout(5000);

   const Newcontext = await browser.newContext();
   const newpage = await Newcontext.newPage();
   await newpage.goto("https://www.demoblaze.com/cart.html")



})