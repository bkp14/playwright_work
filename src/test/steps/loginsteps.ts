import {Given,When,Then,setDefaultTimeout} from "@cucumber/cucumber";
import {expect} from "@playwright/test"
import { pageFixture } from "../../hooks/pagefixture";
setDefaultTimeout(60 * 1000); 
Given('User navigates to the application', async function () {
  // Write code here that turns the phrase above into concrete actions

   await pageFixture.page.goto("https://bookcart.azurewebsites.net/")
});

Given('User Clicks on the login Link', async function () {
  // Write code here that turns the phrase above into concrete actions
   await pageFixture.page.locator("//span[normalize-space()='Login']").click()
});

Given('User enter the username as {string}', async function (string) {
  // Write code here that turns the phrase above into concrete actions
await pageFixture.page.locator("input[placeholder='Username']").fill(string);});

Given('User enter the password as {string}', async function (string) {
  // Write code here that turns the phrase above into concrete actions
await pageFixture.page.getByPlaceholder("Password").fill(string);});

When('User click on the login button', async function () {
  // Write code here that turns the phrase above into concrete actions
await pageFixture.page.locator("(//span[@class='mdc-button__label'])[6]").click();
});

Then('the login should be successful', async function () {
  // Write code here that turns the phrase above into concrete actions
   const msg=await pageFixture.page.locator("//span[@class='mdc-button__label']/span[text()=' kpk']").textContent()
   expect(msg).toBe(" kpk")

});

Then('the user should see a required message', async function () {
  // Write code here that turns the phrase above into concrete actions
  const errmsg=await pageFixture.page.locator("//mat-error").textContent()
   expect(errmsg).toBe("Password is required")
});