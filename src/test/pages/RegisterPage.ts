import { basePage } from "./basePage";

export class RegisterPage extends basePage {

    private password = "//input[@id='password']";
    private firstName = "//input[@id='first_name']";
    private lastName = "//input[@id='last_name']";
    private address = "//input[@id='address1']";
    private state = "//input[@id='state']";
    private city = "//input[@id='city']";
    private zipcode = "//input[@id='zipcode']";
    private mobile = "//input[@id='mobile_number']";
    private createAccount = "//button[normalize-space()='Create Account']";
    private accountCreated="//b[normalize-space()='Account Created!']"
    async setPassword(password: string) {
        await this.fill(this.password, password);
    }

    async setFirstName(firstName: string) {
        await this.fill(this.firstName, firstName);
    }

    async setLastName(lastName: string) {
        await this.fill(this.lastName, lastName);
    }

    async setAddress(address: string) {
        await this.fill(this.address, address);
    }

    async setState(state: string) {
        await this.fill(this.state, state);
    }

    async setCity(city: string) {
        await this.fill(this.city, city);
    }

    async setZipCode(zipcode: string) {
        await this.fill(this.zipcode, zipcode);
    }

    async setMobile(mobile: string) {
        await this.fill(this.mobile, mobile);
    }

    async clickCreateAccount() {
        await this.click(this.createAccount);
    }
    async register(password:string,fn:string,ln:string,address:string,state:string,city:string,pin:string,mobile:string){
        await this.setPassword(password);
        await this.setFirstName(fn);
        await this.setLastName(ln);
        await this.setAddress(address);
        await this.setState(state);
        await this.setCity(city);
        await this.setZipCode(pin);
        await this.setMobile(mobile);
        
    }
    async getCreated(){
        return await this.getText(this.accountCreated)
    }
}