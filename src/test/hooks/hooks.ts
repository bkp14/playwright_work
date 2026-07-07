import { After, AfterAll, Before, BeforeAll, Status } from "@cucumber/cucumber";
import { Browser, chromium } from "@playwright/test";
import { CustomWorld } from "../world/CustomWorld";

import { setDefaultTimeout } from "@cucumber/cucumber";
import { basePage } from "../pages/basePage";
import { homePage } from "../pages/homePage";
import { contactPage } from "../pages/contactPage";

setDefaultTimeout(60000);
let browser: Browser;

BeforeAll(async () => {
    
    browser = await chromium.launch({
        headless: false
    });
});

Before(async function (this: CustomWorld) {
    this.browser = browser;
    this.context = await browser.newContext();
    this.page = await this.context.newPage();
    this.bp = new basePage(this.page);
    this.hp = new homePage(this.page);
    this.cp = new contactPage(this.page);
});

After(async function (this: CustomWorld, { result, pickle }) {

    console.log(result?.status);

    if (result?.status === Status.FAILED && this.page && !this.page.isClosed()) {
        try {
            const img = await this.page.screenshot({
                path: `test-results/screenshots/${pickle.name}.png`,
                type: "png"
            });

            await this.attach(img, "image/png");
        } catch (error) {
            console.log(`Screenshot capture skipped: ${error}`);
        }
    }

    await this.page.close();
    await this.context.close();
});

AfterAll(async () => {
    await browser.close();
});
