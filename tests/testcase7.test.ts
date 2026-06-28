import { test,chromium,expect,Page,Browser } from '@playwright/test';

test("testcase page visibility ",async({page})=>{
   
    await page.goto("https://automationexercise.com/")

    await expect(page).toHaveTitle("Automation Exercise");

    await page.click("//a[contains(text(),'Test Cases')]")

    await expect(page).toHaveURL("https://automationexercise.com/test_cases")

});