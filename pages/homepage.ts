import {Page, Locator} from "@playwright/test"
export class homepage{
    readonly page:Page;
    readonly myacbut:Locator;
    readonly logbut:Locator;
    readonly searchbutton:Locator
readonly searchbar:Locator
readonly regbut : Locator
    constructor(page:Page){
        this.page =page
        this.myacbut=page.locator("//span[normalize-space()='My Account']");
        this.logbut=page.locator("//a[normalize-space()='Login']") 
        this.searchbar= page.locator("//input[@placeholder='Search']")
        this.searchbutton=page.locator("//*[@id='search']/span/button")
        this.regbut=page.locator("//a[normalize-space()='Register']")
        
    }
    async navigate(){
        await this.page.goto(process.env.baseurl!)


    }
    async register(){
        await this.regbut.click()
    }
    async clickacc(){
        await this.myacbut.click()

    }
     async clciklog(){
        await this.logbut.click()

    }
    async searchproduct(product:string){
        await this.searchbar.fill(product)
        await this.searchbutton.click()
    }

}