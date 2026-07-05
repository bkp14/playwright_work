import{expect,Locator, Page} from "@playwright/test"
export class BasePage{
    constructor(protected page:Page){
     this.page=page
    }
    async click(locator:string){
      await this.page.locator(locator).click()
    }
    async sendtext(locator:string,value:string){
        await this.page.locator(locator).fill(value)
    }
   async checkproducttitle(locator:string,value:string){
   console.log( this.page.locator(locator).innerText())
    return await expect(this.page.locator(locator)).toHaveText(value)
   }
   
}