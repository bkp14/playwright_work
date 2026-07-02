import { Given,When,Then } from "@cucumber/cucumber";
import {chromium,Page,expect, Browser} from '@playwright/test';
import { Customworld } from "../../hooks/world";


Given('the user is on the url', async function (this:Customworld) {
  // Write code here that turns the phrase above into concrete actions
      
        await this.page.goto("https://tutorialsninja.com/demo/",{
            waitUntil:'domcontentloaded',
        })
});

Given('user clicks on the myacc link', async function (this:Customworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.page.locator("//span[normalize-space()='My Account']").click();
});

Given('user clicks on the loginlink', async function (this:Customworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.page.locator("//ul[@class='dropdown-menu dropdown-menu-right']//a[normalize-space()='Login']").click();
});

Given('user enters the valid email as {string}', async function (this:Customworld,string) {
  // Write code here that turns the phrase above into concrete actions
  await this.page.locator("//input[@id='input-email']").fill(string);
});

Given('user enters password as {string}', async function (this:Customworld,string) {
  // Write code here that turns the phrase above into concrete actions
  await this.page.locator("//input[@id='input-password']").fill(string);
});

When('user clicks on the login button', async function (this:Customworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.page.locator("//input[@value='Login']").click();
});

Then('user should be loggedin successfully', async function (this:Customworld) {
  // Write code here that turns the phrase above into concrete actions
  await expect(this.page.locator("//h2[normalize-space()='My Account']")).toHaveText("My Account");

});

Then('user should not be loggedin successfully', async function (this:Customworld) {
  // Write code here that turns the phrase above into concrete actions
  await expect(this.page.locator("//div[@class='alert alert-danger alert-dismissible']")).toHaveText("Warning: No match for E-Mail Address and/or Password.");
  
});