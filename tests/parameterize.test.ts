import {test,expect} from "@playwright/test"
const searchdata=[
    {keyword:"playwright", expectedTitle: "playwright"},
    {keyword:"selenium", expectedTitle: "selenium"},
    {keyword:"cypress", expectedTitle: "cypress"}

]

test.beforeEach(async({page})=>{
    await page.goto("https://www.bing.com")
})
test.describe("google search",()=>{
    for (const data of searchdata){
test(`searchtest -${data.keyword}`,async({page})=>{
await page.getByRole('searchbox').fill(data.keyword); 
  await page.keyboard.press("Enter")
  await page.waitForLoadState("networkidle");

   await  expect(page).toHaveTitle(new RegExp(data.expectedTitle,"i"))
})
}
})
