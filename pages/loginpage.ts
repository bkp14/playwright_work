import {Page,Locator} from "@playwright/test"

export class loginpage{
    readonly page :Page
  readonly email:Locator
  readonly password:Locator
  readonly loginbutton:Locator
  readonly errormsg:Locator
  

  constructor(page:Page){
    this.page=page
    this.email=page.locator("//input[@id='input-email']")
    this.password=page.locator("//input[@id='input-password']")
    this.loginbutton=page.locator("//input[@value='Login']")
    this.errormsg =page.locator("//div[@class='alert alert-danger alert-dismissible']")
    
  }
  async login(email:string,password:string){
   await this.email.fill(email)
   await this.password.fill(password)
    await this.loginbutton.click()

  }
}