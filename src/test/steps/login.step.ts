import { Given,When,Then } from "@cucumber/cucumber";
import { CustomWorld } from "../world/CustomWorld";
import { expect } from "@playwright/test";
import { readLoginData,loginData } from "../utils/csvReader";
const users: loginData[]=readLoginData();
Given('user is on the home page',async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
     await this.bp.navigate();
});

When('user clicks on the login page', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
    await this.hp.clickLogin();
});

When('user enters valid username and password',async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.lp.setUsername(users[0].username);
  await this.lp.setPassword(users[0].password)
});

When('user clicks on login',async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.lp.clickLoginButton()
});

Then('user can see the username in the dashboard', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.dp.usernameVisible();
});
When('user enters username {string} and password {string}',async function (this:CustomWorld,string, string2) {
  // Write code here that turns the phrase above into concrete actions
  await this.lp.setUsername(string);
  await this.lp.setPassword(string2)
});

Then('user should see the error message {string}',async function (this: CustomWorld, expectedMessage: string) {
    const actualMessage = await this.lp.getInvalidMessage();
    expect(actualMessage).toBe(expectedMessage);
  }
);