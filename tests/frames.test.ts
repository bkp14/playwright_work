import {expect, test} from "@playwright/test"
test.beforeEach(async({page})=>{
    await page.goto("https://letcode.in/frame")

})
test("uframes", async({page})=>{
    const allframes = page.frames()
    console.log("frames", allframes.length);


    const frame = page.frameLocator("iframe[name='firstFr']");

    await frame.locator("input[name='fname']").fill("krishna");
    await frame.locator("input[name='lname']").fill("prasath");

    await expect(frame.locator("p")).toContainText("krishna prasath");
});

test("innerframe",async({page})=>{

        const frame = page.frameLocator("iframe[name='firstFr']");
  const innerframe = frame.frameLocator("iframe[src='/innerframe']")
  await innerframe.locator("input[name='email']").fill("kp@gmail.com")

})