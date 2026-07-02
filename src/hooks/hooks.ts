import { Before, After, Status } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import { Customworld } from "./world";

Before({timeout:30000},async function (this: Customworld) {
    this.browser = await chromium.launch({
        headless: false,
    });

    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    await this.page.goto("https://www.saucedemo.com/");
});

After(async function (this: Customworld, { pickle, result }) {
    console.log(result?.status);

    if (result?.status === Status.FAILED) {
        const img = await this.page.screenshot({
            path: `./test-result/screenshots/${pickle.name}.png`,
            type: "png",
        });

        await this.attach(img, "image/png");
    }

    await this.page.close();
    await this.context.close();
    await this.browser.close();
});