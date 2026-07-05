import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../world/CustomWorld";
import { readRegisterData, RegisterData } from "../utils/excelReader";
import { expect } from "@playwright/test";
const users: RegisterData[] = readRegisterData();
Given('user is on the homepage',async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.hp.navigate();

});

When('user clicks on the loginpage',async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.hp.clickLogin()
});

When('user enters valid name and email', async function (this: CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.lp.setName("Tamil");
  await this.lp.setemail("tamil@"+Date.now())
});

When('user clicks on signup', async function (this: CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.lp.clickSignUp();
});

When('user enters registration details', async function (this: CustomWorld) {

  const user = users[0];

  await this.rp.setPassword(String(user.password));
  await this.rp.setFirstName(user.firstName);
  await this.rp.setLastName(user.lastName);
  await this.rp.setAddress(user.address);
  await this.rp.setState(user.state);
  await this.rp.setCity(user.city);
  await this.rp.setZipCode(String(user.zipcode));
  await this.rp.setMobile(String(user.mobile));
});

When('user clicks on create account', async function (this: CustomWorld) {
  await this.rp.clickCreateAccount();
});

Then('account should be created successfully', async function (this: CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await expect("Account Created!").toBe(await this.rp.getCreated())
});