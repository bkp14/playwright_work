import { expect } from "@playwright/test";
import { basePage } from "./basePage";

export class homePage extends basePage {
    private signupLink = "//*[@id='signin2']";
    private signupUsername = "#sign-username";
    private signupPassword = "#sign-password";
    private signupButton = "//button[normalize-space()='Sign up']";
    private loginLink = "#login2";
    private loginUsername = "#loginusername";
    private loginPassword = "#loginpassword";
    private loginButton = "//button[normalize-space()='Log in']";
    private welcomeUser = "#nameofuser";
    private logoutLink = "#logout2";
    private lastAlertMessage = "";

    async openSignupDialog() {
        await this.click(this.signupLink);
    }

    async enterSignupCredentials(username: string, password: string) {
        await this.fill(this.signupUsername, username);
        await this.fill(this.signupPassword, password);
    }

    async clickSignupButton(): Promise<string> {
        this.lastAlertMessage = await this.handleAlert(async () => {
            await this.click(this.signupButton);
        });
        return this.lastAlertMessage;
    }

    async popupmessage(): Promise<string> {
        return this.lastAlertMessage;
    }

    async openLoginDialog() {
        await this.click(this.loginLink);
    }

    async enterLoginCredentials(username: string, password: string) {
        await this.fill(this.loginUsername, username);
        await this.fill(this.loginPassword, password);
    }

    async clickLoginButton() {
        await this.click(this.loginButton);
    }

    async verifyLoggedIn(username: string) {
        await expect(this.page.locator(this.welcomeUser)).toContainText(username, {
            timeout: 15000,
        });
        await expect(this.page.locator(this.logoutLink)).toBeVisible({ timeout: 15000 });
    }
}
