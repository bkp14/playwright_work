import { After, AfterAll, Before, BeforeAll, Status } from "@cucumber/cucumber";
import { Browser, chromium } from "@playwright/test";
import { CustomWorld } from "../world/CustomWorld";
import { basePage } from "../pages/basePage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { getEnv } from "../utils/envReader";
import { DashboardPage } from "../pages/DashboardPage";
import { ProductPage } from "../pages/ProductPage";
import { RegisterPage } from "../pages/RegisterPage";
import { ReviewPage } from "../pages/ReviewPage";
import { setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60000);
let browser: Browser;

BeforeAll(async () => {
    getEnv();
    browser = await chromium.launch({
        headless: true
    });
});

Before(async function (this: CustomWorld) {
    this.browser = browser;
    this.context = await browser.newContext();
    this.page = await this.context.newPage();
    this.bp=new basePage(this.page)
    this.hp=new HomePage(this.page)
    this.lp=new LoginPage(this.page)
    this.dp=new DashboardPage(this.page)
    this.pp=new ProductPage(this.page)
    this.rp=new RegisterPage(this.page)
    this.arp=new ReviewPage(this.page);
});

After(async function (this: CustomWorld, { result, pickle }) {

    console.log(result?.status);

    if (result?.status === Status.FAILED) {

        const img = await this.page.screenshot({
            path: `test-results/screenshots/${pickle.name}.png`,
            type: "png"
        });

        await this.attach(img, "image/png");
    }

    await this.page.close();
    await this.context.close();
});

AfterAll(async () => {
    await browser.close();
});