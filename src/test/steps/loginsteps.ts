import {Given,When,Then,setDefaultTimeout} from "@cucumber/cucumber";
import {expect} from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture"; // 🌟 Fixed casing here

setDefaultTimeout(60 * 1000); 

Given('User navigates to the application', async function () {
   await pageFixture.page.goto("https://bookcart.azurewebsites.net/")
});

Given('User Clicks on the login Link', async function () {
   await pageFixture.page.locator("//span[normalize-space()='Login']").click()
});

Given('User enter the username as {string}', async function (string) {
   await pageFixture.page.locator("input[placeholder='Username']").fill(string);
});

Given('User enter the password as {string}', async function (string) {
   await pageFixture.page.getByPlaceholder("Password").fill(string);
});

When('User click on the login button', async function () {
   await pageFixture.page.locator("(//span[@class='mdc-button__label'])[6]").click();
});

Then('the login should be successful', async function () {
   const msg=await pageFixture.page.locator("//span[@class='mdc-button__label']/span[text()=' kpk']").textContent()
   expect(msg).toBe(" kpk")
});

Then('the user should see a required message', async function () {
  const errmsg=await pageFixture.page.locator("//mat-error").textContent()
   expect(errmsg).toBe("Password is required")
});