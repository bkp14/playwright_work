import { basePage } from "./basePage";

export class LoginPage extends basePage{
    private username="//input[@data-qa='login-email']";
    private password="//input[@placeholder='Password']";
    private loginButton="//button[normalize-space()='Login']"
    private invalidPassword="//p[normalize-space()='Your email or password is incorrect!']"
    private name="//input[@placeholder='Name']";
    private email="//input[@data-qa='signup-email']";
    private sigup="//button[normalize-space()='Signup']";

    async setUsername(username:string){
        await this.fill(this.username,username);
    }
    async setPassword(password:string){
        await this.fill(this.password,password)
    }
    async clickLoginButton(){
        await this.click(this.loginButton)
    }
    async getInvalidMessage(){
        return this.getText(this.invalidPassword)
    }
    async setName(name:string){
        await this.fill(this.name,name);
    }
    async setemail(email:string){
        await this.fill(this.email,email)
    }
    async clickSignUp(){
        await this.click(this.sigup)
    }
}