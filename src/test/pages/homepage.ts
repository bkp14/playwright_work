import {Location, Locator, Page} from "@playwright/test"
import { BasePage } from "./BasePage";

export class homepage extends BasePage{

    
        private username="#user-name"
        private password="#password"
        private loginbutton= "#login-button"
        private producttitle =".title"
        private errmsg = "[data-test='error']"
    
    async usernamefill(uname:string){
        await this.sendtext(this.username,uname)
    }
    async passwordfill(pword:string){
       await  this.sendtext(this.password,pword)
    }
    async clicklogin(){
        await this.click(this.loginbutton)
    }
    async checkproduct(product:string){
        await this.checkproducttitle(this.producttitle,product)
    }
}