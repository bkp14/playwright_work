import {Given,Then,When,setDefaultTimeout} from "@cucumber/cucumber"
import {chromium,Browser,Page,expect} from "@playwright/test"
import { Customworld } from "../../hooks/world";
setDefaultTimeout(60 * 1000); 

Given('the user launches the application', async function (this:Customworld) {
  // Write code here that turns the phrase above into concrete actions

     await this.page.goto("https://bookcart.azurewebsites.net/")
});

Given('User clicked the login Link', async function (this:Customworld) {
  // Write code here that turns the phrase above into concrete actions
   await this.page.locator("//span[normalize-space()='Login']").click()
});

Given('the user clicks on the Register button', async function (this:Customworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.page.locator("//span[text()='Register']/ancestor::button").click()
});

Given('the user fills all the required details', async function (this:Customworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.page.locator("//input[@placeholder='First name']").fill("mohammada")
    await this.page.locator("//input[@placeholder='Last Name']").fill("rasiquea")
  await this.page.locator("//input[@placeholder='User name']").fill("johnwick")
  await this.page.locator("//input[@placeholder='Password']").fill("Moha12345")
  await this.page.locator("//input[@placeholder='Confirm Password']").fill("Moha12345")
  await this.page.locator("//input[@value='Male']").click()

});

Given('user click on  login button', async function (this:Customworld) {
  // Write code here that turns the phrase above into concrete actions
await this.page.locator('mat-card-actions button:has-text("Register")').click();
});

Then('the user should see account registered', async function (this:Customworld) {
  // Write code here that turns the phrase above into concrete actions
  await expect(this.page.locator("//mat-card-title")).toHaveText(" Login ")
});