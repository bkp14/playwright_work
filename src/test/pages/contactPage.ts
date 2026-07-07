import { basePage } from "./basePage";

export class contactPage extends basePage {
    private contactLink = "//a[normalize-space()='Contact']";
    private contactEmail = "#recipient-email";
    private contactName = "#recipient-name";
    private message = "#message-text";
    private sendMessageButton = "//button[normalize-space()='Send message']";
    private lastAlertMessage = "";

    async openContactDialog() {
        await this.click(this.contactLink);
    }

    async enterContactDetails(email: string, name: string, message: string) {
        await this.fill(this.contactEmail, email);
        await this.fill(this.contactName, name);
        await this.fill(this.message, message);
    }

    async sendbutton(): Promise<string> {
        this.lastAlertMessage = await this.handleAlert(async () => {
            await this.click(this.sendMessageButton);
        });
        return this.lastAlertMessage;
    }

    async verifyContactSuccessPopup(): Promise<string> {
        return this.lastAlertMessage;
    }
}
