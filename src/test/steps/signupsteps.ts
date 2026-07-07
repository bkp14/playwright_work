import { DataTable, Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../world/CustomWorld";
import {expect} from "@playwright/test"
Given("the user navigates to the Demoblaze application", async function (this: CustomWorld) {
  await this.bp.navigate();
});

Given("the user opens the signup dialog", async function (this: CustomWorld) {
  await this.hp.openSignupDialog();
});

When("the user enters the credentials", async function (this: CustomWorld, dataTable: DataTable) {
  const credentials = dataTable.hashes()[0];
  const username = `${credentials.username}${Date.now()}`;
  await this.hp.enterSignupCredentials(username, credentials.password);
});

When("the user clicks on  the signup button", async function (this: CustomWorld) {
  await this.hp.clickSignupButton();
});

Then("the user should see a success popup", async function (this: CustomWorld) {
    const message = await this.hp.popupmessage();
    expect(message).toBe("Sign up successful.");
});