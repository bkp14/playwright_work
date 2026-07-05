import {setWorldConstructor,World} from "@cucumber/cucumber"
import {Browser, BrowserContext, Page} from "@playwright/test"
import { BasePage } from "../pages/BasePage"
import { homepage } from "../pages/homepage"
export class Customworld extends World{
browser! : Browser
context!: BrowserContext
page!: Page
BasePage!:BasePage
HomePage!:homepage
}
setWorldConstructor(Customworld)