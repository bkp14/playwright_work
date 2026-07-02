import { setWorldConstructor, World } from "@cucumber/cucumber";
import {Browser,Page,BrowserContext} from "@playwright/test";
export class Customworld extends World{
browser!: Browser
context!: BrowserContext
page!:Page

}
setWorldConstructor(Customworld)