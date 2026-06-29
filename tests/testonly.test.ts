import { test, expect } from '@playwright/test';
test.beforeEach(async ({page})=>{
        await page.goto('https://www.demoblaze.com/');

})

test.only('Login demoblaze1', async ({ page }) => {
    test.setTimeout(60000);
    page.setDefaultNavigationTimeout(50000);
    
    await page.click('#login2');
    await page.fill('#loginusername', "admin");
    await page.fill('#loginpassword', "admin");
    await page.click("//button[text()='Log in']");
    await expect.soft(page.getByRole("link",{name:"Log out"})).toBeVisible({timeout:5000})
        await expect.soft(page.getByRole("link",{name:"Log out"})).toHaveText("Log out")
    await expect.soft(page.getByRole("link",{name:"Log out"})).toBeVisible()


});
test('Login demoblaze2', async ({ page }) => {
    await page.click('#login2');
  await page.fill('#loginusername', "admin");
    await page.fill('#loginpassword', "admin");
    await page.click("//button[text()='Log in']");
});
test('Login demoblaze3', async ({ page }) => {
    test.skip(true,"test is skipped due to maintenance")
    await page.click('#login2');
    await page.fill('#loginusername', "admin",{timeout:5000});
    await page.fill('#loginpassword', "admin");
    await page.click("//button[text()='Log in']");
});
test.afterEach(async({page})=>{
  console.log("demoblaze test completed")
})