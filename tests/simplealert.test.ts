import { test, expect } from "@playwright/test";
test.beforeEach(async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/",{
        waitUntil:"networkidle"
    });
})
test("simplealert", async ({ page }) => {


    page.on("dialog", async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });

    const but = page.locator("//p[text()='JavaScript Alerts']/button");

    await but.click();
});
 
  test("confirmation",async({page})=>{
    page.on("dialog", async dialog => {
        console.log(dialog.message());
        await dialog.dismiss();
    });

    const but = page.getByRole('paragraph').filter({ hasText: 'Confirm box:Click Me' }).getByRole('button')
    await but.click();
    const msg = page.locator("//p[@id='confirm-demo']")
    await expect(await msg.innerText()).toContain("You pressed Cancel!")
   
  });
  test("promptalert",async({page})=>{
    page.on ("dialog",async dialog=>{
        console.log(await dialog.type())
        const text = dialog.defaultValue()
        console.log(text)
        await dialog.accept("krishna")
    })
    const but =  page.getByRole('paragraph').filter({ hasText: 'Prompt box:Click Me' }).getByRole('button')
    await but.click();
         const msg = page.locator("//p[@id='prompt-demo']")
             await expect(await msg.textContent()).toContain("krishna")



  })
