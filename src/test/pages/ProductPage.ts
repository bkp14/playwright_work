import { basePage } from "./basePage";

export class ProductPage extends basePage{
    private searchBar="//input[@id='search_product']"
    private searchIcon="//button[@id='submit_search']"
    private shirt="//p[normalize-space()='Men Tshirt']"
    private viewProduct="//div[@class='col-sm-9 padding-right']//div[2]//div[1]//div[2]//ul[1]//li[1]//a[1]"
    async setKeyword(keyword:string){
        await this.fill(this.searchBar,keyword)
    }
    async clicksearchIcon(){
        await this.click(this.searchIcon)
    }
    async getShirt(){
        await this.getText(this.shirt)
    }
    async clickViewProduct(){
        await this.click(this.viewProduct)
    }
}