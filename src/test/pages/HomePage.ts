import { basePage } from "./basePage";

export class HomePage extends basePage{
    private loginLink="//a[normalize-space()='Signup / Login']"
    private productButton="//a[@href='/products']"
    async clickLogin(){
        await this.click(this.loginLink)
    }
    async clickProduct(){
        await this.click(this.productButton)
    }
}