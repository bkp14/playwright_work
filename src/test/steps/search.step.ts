import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../world/CustomWorld";
import search from '../test-data/search.json'
Given('user on the homepage', async function (this: CustomWorld) {
  await this.bp.navigate();
});

When('click the products button', async function (this: CustomWorld) {
  await this.hp.clickProduct();
});

When('enter the product in the search bar', async function (this: CustomWorld) {
  await this.pp.setKeyword(search.ValidKeyword.keyword);
});

When('click search icon', async function (this: CustomWorld) {
  await this.pp.clicksearchIcon();
});

Then('enter product should be displayed', async function (this: CustomWorld) {
  
});