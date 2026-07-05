import { basePage } from "./basePage";

export class ReviewPage extends basePage {

    private name = "//input[@id='name']";
    private email = "//input[@id='email']";
    private message = "//textarea[@id='review']";
    private submit = "//button[@id='button-review']";
    private confirmMessage = "//span[normalize-space()='Thank you for your review.']";

    async setName(name: string) {
        await this.fill(this.name, name);
    }

    async setEmail(email: string) {
        await this.fill(this.email, email);
    }

    async setReview(message: string) {
        await this.fill(this.message, message);
    }

    async clickSubmit() {
        await this.click(this.submit);
    }

    async getConfirmationMessage() {
        return await this.getText(this.confirmMessage);
    }

    async confirmationMessageVisible() {
        await this.isVisible(this.confirmMessage);
    }
}