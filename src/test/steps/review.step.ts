import { When, Then, DataTable } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../world/CustomWorld";

When('user clicks on the Products button', async function (this: CustomWorld) {
  await this.hp.clickProduct();
});

When('user clicks on View Product', async function (this: CustomWorld) {
  await this.pp.clickViewProduct();
});

When('user enters review details',async function (this: CustomWorld, dataTable: DataTable) {
    const data = dataTable.rowsHash();
    await this.arp.setName(data.name);
    await this.arp.setEmail(data.email);
    await this.arp.setReview(data.review);
  }
);

When('user clicks on Submit button', async function (this: CustomWorld) {
  await this.arp.clickSubmit();
});

Then('user should see the success message {string}',async function (this: CustomWorld, expectedMessage: string) {
    const actualMessage = await this.arp.getConfirmationMessage();
    expect(actualMessage).toBe(expectedMessage);
  }
);