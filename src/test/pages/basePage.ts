import { Page, expect } from "@playwright/test";
import { getEnv } from "../utils/envReader";

export class basePage {
  constructor(protected page: Page) {}
  async navigate() {
    await this.page.goto(process.env.BASEURL!, {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
  }
  async click(locator: string) {
    await this.page.locator(locator).click();
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
  async verifyTitle(title: string) {
    await expect(this.page).toHaveTitle(title);
  }
  async verifyURL(url: string) {
    await expect(this.page).toHaveURL(url);
  }
}
