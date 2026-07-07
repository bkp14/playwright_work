import { Page } from "@playwright/test";

export class basePage {
    constructor(protected page: Page) {}

    async navigate() {
        await this.page.goto(process.env.BASEURL ?? "https://www.demoblaze.com/", {
            waitUntil: "domcontentloaded",
            timeout: 60000,
        });
    }

    async click(locator: string) {
        await this.page.locator(locator).click({ timeout: 30000 });
    }

    async fill(locator: string, value: string) {
        await this.page.locator(locator).fill(value);
    }

    async type(locator: string, value: string) {
        await this.page.locator(locator).pressSequentially(value);
    }

    async getText(locator: string) {
        return await this.page.locator(locator).textContent();
    }

    async isVisible(locator: string) {
        return await this.page.locator(locator).isVisible();
    }

    async handleAlert(trigger: () => Promise<void>): Promise<string> {
        const dialogPromise = new Promise<string>((resolve, reject) => {
            const timeout = setTimeout(() => reject(new Error("Alert was not shown")), 15000);

            this.page.once("dialog", async (dialog) => {
                clearTimeout(timeout);
                try {
                    const message = dialog.message();
                    await dialog.accept();
                    resolve(message);
                } catch (error) {
                    reject(error);
                }
            });
        });

        await trigger();
        return dialogPromise;
    }
}

