import {expect , test} from "@playwright/test"
test("selecttest", async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/",{waitUntil:"networkidle"})

    await page.selectOption("#select-demo",{
        value:"Sunday"
    })
    
    await page.selectOption("#multi-select",[
           {label:"Ohio"},
            {index:1},
           { value:"Texas"}        
    ])
})