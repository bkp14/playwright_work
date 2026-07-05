import { Browser, BrowserContext, Page } from '@playwright/test';
import { World } from '@cucumber/cucumber';
import { basePage } from '../pages/basePage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { ProductPage } from '../pages/ProductPage';
import { RegisterPage } from '../pages/RegisterPage';
import { ReviewPage } from '../pages/ReviewPage';

export class CustomWorld extends World{
    browser!:Browser;
    page!:Page;
    context!:BrowserContext
    bp!:basePage
    hp!:HomePage
    lp!:LoginPage
    dp!:DashboardPage
    pp!:ProductPage
    rp!:RegisterPage
    arp!:ReviewPage
}