import { test, expect } from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto(process.env.base_urlt!);

})
test('Login test', async ({ page }) => {
    await page.fill('#input-email', process.env.unamet!);
    await page.fill('#input-password', process.env.pwordt!);
    await page.click("input[value='Login']");
    await expect(page.locator('body')).toContainText('My Account');
});
test.afterEach(async({page})=>{
  console.log("Tutorials Ninja test completed")
})