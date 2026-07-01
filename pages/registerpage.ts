import {Page,Locator} from "@playwright/test"
export class registerpage{
    readonly page:Page
    readonly fname :Locator
    readonly lname :Locator
    readonly email :Locator
    readonly telephone :Locator
    readonly password :Locator
    readonly cpassword :Locator
    readonly privacypolicy :Locator
    readonly continue :Locator

    constructor(page:Page){
        this.page=page
        this.fname=page.locator("//input[@id='input-firstname']")
        this.lname=page.locator("//input[@id='input-lastname']")
        this.email=page.locator("//input[@id='input-email']")
        this.telephone=page.locator("//input[@id='input-telephone']")
        this.password=page.locator("//input[@id='input-password']")
        this.cpassword=page.locator("//input[@id='input-confirm']")
        this.privacypolicy=page.locator("//input[@name='agree']")
        this.continue=page.locator("//input[@value='Continue']")
    }

    async register(fn:string,ln:string,em:string,tp:string,pw:string,cpw:string){
       await this.fname.fill(fn)
       await this.lname.fill(ln)
       await this.email.fill(em)
       await this.telephone.fill(tp)
       await this.password.fill(pw)
       await this.cpassword.fill(cpw)
       await this.privacypolicy.click()
       await this.continue.click()
    }
}