import { Before, BeforeAll, After, AfterAll, Status } from "@cucumber/cucumber";
import { chromium, Browser } from "@playwright/test";
import { Customworld } from "../world/world";
import { homepage } from "../pages/homepage";
import { BasePage } from "../pages/BasePage";
import * as dotenv from "dotenv"; // 1. Uncomment dotenv
import * as path from "path";
import { Logger } from "winston";

// 2. Point dotenv to your exact file inside the ENV folder
dotenv.config({ path: path.resolve(process.cwd(), "ENV/.env.qa") });

let browser: Browser;

BeforeAll(async () => {
    
    browser = await chromium.launch({ headless: false });
});

Before(async function(this: Customworld) {
    this.browser = browser;
    this.context = await browser.newContext();
    this.page = await this.context.newPage();
    
    // 3. This will now successfully read from ENV/.env.qa
    await this.page.goto(process.env.baseurl!);
    
    this.BasePage = new BasePage(this.page);
    this.HomePage = new homepage(this.page);
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
});

AfterAll(async () => {
    await browser.close();
});