import {expect,test} from "@playwright/test"

test.describe("actions tests",()=>{
    test.beforeEach(async ({page}, testInfo)=>{
        console.log(`Test Started ${testInfo.title}`)
     await page.goto ("https://www.demoblaze.com/index.html")
    })
    test("mouse actions",async({page})=>{
        await page.mouse.wheel(0,500)
        const interaction = page.getByText("Laptops")
        await interaction.hover();
        await interaction.click({button:"left"});

       const prod= page.locator("//*[@id='tbodyid']/div[1]/div/div/h4/a")
       await prod.click({button:"left"})
       const prod_text = page.locator("//*[@id='tbodyid']/h2")
       //await prod_text.hover()
       await expect(prod_text).toBeVisible();
       await  prod_text.dblclick()
       //await prod_text.click()

       await page.keyboard.press("Control+C");
       await page.locator("li[class='nav-item active'] a[class='nav-link']").click({button:"right"})
              await page.locator("//a[normalize-space()='Contact']").click({button:"right"})
        const textbox = await page.locator("#recipient-email")
        textbox.click()
        page.keyboard.press("Control+V")
        const val = textbox.innerText()
        
         expect(val).toContain("Sony")
        


        



    })
})