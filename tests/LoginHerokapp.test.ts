import {test,expect} from '@playwright/test';
test.beforeEach(async({page})=>{
    await page.goto(process.env.base_url!)
} )
test.describe('Login Module',()=>{
test('valid Login Test',async ({page}) => {
    await page.fill('#username',process.env.unae!);
    await page.fill('#password',process.env.pword!);
    await page.click('.fa.fa-2x.fa-sign-in');
    await page.isVisible('.icon-2x.icon-signout')
    await expect(page.locator('.flash.success')).toBeVisible();
});

test ('invalid login test',async({page}) => {
  await page.fill('#username',"kn");
    await page.fill('#password','n kh');
    await page.click('.fa.fa-2x.fa-sign-in'); 
    await expect(page.locator("//div[@id='flash']"))
    .toContainText('Your username is invalid!');


})
})
test.afterEach(async({page})=>{
  console.log("Herokapp test completed")
})