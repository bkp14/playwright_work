import { test,chromium,expect,Page,Browser } from '@playwright/test';

test("Email already exists",async({page})=>{
   
    
    await page.goto("https://automationexercise.com/")

    await page.click("//a[normalize-space()='Signup / Login']");

    await page.fill("//input[@placeholder='Name']","Vetri")
    await page.fill("//input[@data-qa='signup-email']","bvetrivel@gmail.com1000")

    await page.click("//button[normalize-space()='Signup']")

    await expect(page.locator("//p[normalize-space()='Email Address already exist!']")).toContainText("Email Address already exist!")

});