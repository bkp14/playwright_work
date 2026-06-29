import { test, expect } from '@playwright/test';

test.describe("Login Modules", () => {

    test.beforeEach(async ({ page }) => {

        page.setDefaultTimeout(30000);
        page.setDefaultNavigationTimeout(30000);

        await page.goto("https://demoblaze.com/");
    });

    test("Valid Login @Smoke", async ({ page }, testInfo) => {

        console.log(page.url());
        console.log(await page.title());
        console.log("Test Name :", testInfo.title);

        const login_btn = page.locator("#login2");

        await login_btn.click();

        await expect(page.locator("#logInModal")).toBeVisible();

        await page.locator("#loginusername").click();

        await page.keyboard.type("admin");

        await page.keyboard.press("Tab");

        await page.keyboard.type("admin");

        await page.locator("//button[text()='Log in']").focus();

        await page.keyboard.press("Enter");

        await expect(page.locator("#nameofuser")).toContainText("Welcome");

        await expect.soft(page.getByRole("link", {name: "Log out"})).toHaveText("Log out");

        await expect(page.getByRole("link", {name: "Log out"})).toBeVisible();

    });

    const invalid_login = [

        {title: "Invalid Username",username: "tfgewud h",password: "admin",expected: "User does not exist."},

        {title: "Invalid Password",username: "admin",password: "xyz",expected: "Wrong password."}

    ];

    for (const data of invalid_login) {

        test(`${data.title} @Regression`, async ({ page }, testInfo) => {

            console.log(testInfo.title);

            await page.locator("#login2").click();

            await expect(page.locator("#logInModal")).toBeVisible();

            await page.locator("#loginusername").click();

            await page.keyboard.type(data.username);

            await page.keyboard.press("Tab");

            await page.keyboard.type(data.password);

            let msg = "";

            page.once("dialog",async dialog => {
                msg = dialog.message();
                console.log("Alert :",msg);
                await dialog.accept();
            });

            await page.locator("//button[text()='Log in']").focus();

            await page.keyboard.press("Enter");

            await expect.poll(() => msg).toBe(data.expected);
        });

    }

    test.afterEach(() => {
        console.log("Test Completed");
    });

});