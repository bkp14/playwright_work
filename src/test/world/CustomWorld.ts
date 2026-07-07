import { Browser, BrowserContext, Page } from '@playwright/test';
import { World } from '@cucumber/cucumber';
import { basePage } from '../pages/basePage';
import { homePage } from '../pages/homePage';
import { contactPage } from '../pages/contactPage';


export class CustomWorld extends World{
    browser!:Browser;
    page!:Page;
    context!:BrowserContext
    bp!:basePage
    hp!:homePage
    cp!:contactPage
    loginUsername!: string

}
