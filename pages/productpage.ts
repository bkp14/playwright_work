import {Page,Locator} from "@playwright/test"

export class productpage{
    readonly page :Page
    readonly prod :Locator

    constructor(page:Page){
        this.page=page
        this.prod=page.locator("//h4/a")
    }

}