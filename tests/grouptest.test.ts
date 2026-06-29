import { test, expect } from '@playwright/test';
test.beforeEach(async ({page})=>{
        await page.goto(process.env.base_urld!);

})
test.describe("login_tests @smoke",{tag:"@log group"},async()=>{

test('Login demoblaze1', async ({ page }) => {
    await page.click('#login2');
    await page.fill('#loginusername', "admin");
    await page.fill('#loginpassword', "admin");
    await page.click("//button[text()='Log in']");
    await expect.soft(page.getByRole("link",{name:"Log out"})).toBeVisible()
        await expect.soft(page.getByRole("link",{name:"Log out"})).toHaveText("Log out")
    await expect.soft(page.getByRole("link",{name:"Log out"})).toBeVisible()


});
test('Login demoblaze2', async ({ page }) => {
    await page.click('#login2');
    await page.fill('#loginusername', process.env.unamed!);
    await page.fill('#loginpassword', process.env.pwordd!);
    await page.click("//button[text()='Log in']");
});
test('Login demoblaze3', async ({ page }) => {
    test.skip(true,"test is skipped due to maintenance")
    await page.click('#login2');
    await page.fill('#loginusername', process.env.unamed!);
    await page.fill('#loginpassword', process.env.pwordd!);
    await page.click("//button[text()='Log in']");
});
})

test.afterEach(async({page})=>{
  console.log("demoblaze test completed")
})