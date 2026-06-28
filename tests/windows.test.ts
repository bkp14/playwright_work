import { expect,test } from "@playwright/test";
test("handle new window",async({page,context})=>{
    await page.goto("https://demoqa.com/browser-windows")

    console.log("win url", page.url());

    const [newWindow] = await Promise.all([
       context.waitForEvent("page"),
       page.locator("#windowButton").click(),
    ]);
    
    await newWindow.waitForLoadState("domcontentloaded")

    console.log("new window url", newWindow.url());

    const heading = await newWindow.locator("#sampleHeading").textContent();

    console.log("heading: ", heading);

    await expect(newWindow.locator("#sampleHeading"))
    .toHaveText("This is a sample page");

    await newWindow.close();

});
 
test ("iterate windows", async({page,context})=>{
    await page.goto("https://demoqa.com/browser-windows")

    const [tab] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#tabButton").click()
     
    ]);

    await tab.waitForLoadState();

    const[window] = await Promise.all([
           context.waitForEvent("page"),
        page.locator("#windowButton").click()
    ]);
        await window.waitForLoadState();

        const pages = context.pages();
        console.log("number of pages: ",pages.length);

        for(const p of pages){
            console.log("url",p.url())
            console.log("title:" ,await p.title())
        }
    })
test ("iterate attributes",async({page,context})=>{
       await page.goto("https://demoqa.com/browser-windows")

    const [tab] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#tabButton").click()
     
    ]);

    await tab.waitForLoadState();

    const[window] = await Promise.all([
           context.waitForEvent("page"),
        page.locator("#windowButton").click()
    ]);
        await window.waitForLoadState();

        const pages = context.pages();
        console.log("number of pages: ",pages.length);

        for(const p of pages){
            console.log("url",p.url())
            if(p.url().includes("sample")){
    const text = await p.locator("#sampleHeading").textContent()
    console.log("sample page Heading: ", text)
            }
        } 
})

