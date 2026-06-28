import { test, expect } from "@playwright/test";
test.beforeEach(async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/", { 
        waitUntil: "networkidle" 
    });
})
test.afterEach(async({page})=>{
    page.close()
});
test("sumval", async ({ page }) => {
    const inp1 = page.locator("#sum1");
    const inp2 = page.locator("#sum2");
    await inp1.fill("2")
      await inp2.fill("3")

    const but = page.getByRole('button', { name: 'Get Sum', exact: true });
    await but.scrollIntoViewIfNeeded();
    await but.click();

    const val = page.locator("#addmessage");
    await expect(val).toHaveText("5", { timeout: 10000 });


});

