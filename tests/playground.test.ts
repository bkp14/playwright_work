import {test,expect} from "@playwright/test"

test("textassert", async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/",{waitUntil:"networkidle"})
    const val1=page.getByPlaceholder("Please enter your Message")
    console.log(await val1.inputValue())
    await val1.fill("krishna")
    console.log(await val1.inputValue())
     await page.locator("//button[@id='showInput']").click()

 console.log("URL:", page.url());
console.log("Input after click:", await val1.inputValue());
 console.log("Message:", await page.locator("#message").textContent());

  await expect(page.locator("//p[@id='message']")).toContainText("krishna")
    


})