import { test, expect } from '@playwright/test';
test.beforeEach(async ({page})=>{
        await page.goto("https://www.demoblaze.com/");

})

test("Login demoblaze1 @smoke", async ({ page }) => {
    await page.click('#login2');
    await page.fill('#loginusername', "admin");
    await page.fill('#loginpassword', "admin");
    await page.click("//button[text()='Log in']");
    await expect.soft(page.getByRole("link",{name:"Log out"})).toBeVisible()
        await expect.soft(page.getByRole("link",{name:"Log out"})).toHaveText("Log out")
    await expect.soft(page.getByRole("link",{name:"Log out"})).toBeVisible()


});
test("Login demoblaze2 @smoke", async ({ page }) => {
    await page.click('#login2');
    await page.fill('#loginusername', "admin");
    await page.fill('#loginpassword', "admin");
    await page.click("//button[text()='Log in']");
});
test("Login demoblaze3",{tag:["@sanity","@login"]}, async ({ page }) => {
    await page.click('#login2');
      await page.fill('#loginusername', "admin");
    await page.fill('#loginpassword', "admi");
    await page.click("//button[text()='Log in']");
});
test.afterEach(async({page})=>{
  console.log("demoblaze test completed")
})