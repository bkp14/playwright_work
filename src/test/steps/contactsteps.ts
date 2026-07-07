import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../world/CustomWorld";
import { readContactData } from "../utils/excelReader";
import { expect } from "@playwright/test";

Given("the user opens the contact dialog", async function (this: CustomWorld) {
  await this.cp.openContactDialog();
});

When("the user enters contact details from excel", async function (this: CustomWorld) {
  const [contactData] = readContactData();
  await this.cp.enterContactDetails(
    contactData.email,
    contactData.name,
    contactData.message
  );
});

When("the user sends the contact message", async function (this: CustomWorld) {
  await this.cp.sendbutton();
});

Then("the user should see contact success popup", async function (this: CustomWorld) {
    const message = await this.cp.verifyContactSuccessPopup();
    expect(message).toBe("Thanks for the message!!");
});
