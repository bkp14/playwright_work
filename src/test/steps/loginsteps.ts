import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../world/CustomWorld";
import { readLoginData } from "../utils/csvReader";

Given("the user opens the login dialog", async function (this: CustomWorld) {
  await this.hp.openLoginDialog();
});

When("the user enters login credentials from csv", async function (this: CustomWorld) {
  const [credentials] = readLoginData();
  this.loginUsername = credentials.username;
  await this.hp.enterLoginCredentials(credentials.username, credentials.password);
});

When("the user clicks on the login button", async function (this: CustomWorld) {
  await this.hp.clickLoginButton();
});

Then("the user should be logged in successfully", async function (this: CustomWorld) {
  await this.hp.verifyLoggedIn(this.loginUsername);
});
