import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { Customworld } from "../../hooks/world";

Given("the user Launches the application", async function (this: Customworld) {
  console.log("Application started");
});

When("the user enters valid credentials",async function (this: Customworld) {
    await this.page.locator("#user-name").fill("standard_user");
    await this.page.locator("#password").fill("secret_sauce");
  }
);

When("the user clicks on Login button",async function (this: Customworld) {
    await this.page.locator("#login-button").click();
  }
);

Then("the user should be redirected to the products list page",async function (this: Customworld) {
    await expect(this.page.locator(".title")).toHaveText("Products");
    await expect(this.page).toHaveURL(/inventory.html/);
  }
);
When("User enters username {string}",async function (this: Customworld, username: string) {
    await this.page.locator("#user-name").fill(username);
  }
);

When("User enters password {string}",
  async function (this: Customworld, password: string) {
    await this.page.locator("#password").fill(password);
  }
);

When("User clicks on Login button",async function (this: Customworld) {
    await this.page.locator("#login-button").click();
  }
);
Then("User should see {string}",async function (this: Customworld, result: string) {
    const error = this.page.locator("[data-test='error']");

    await expect(error).toBeVisible();
    await expect(error).toHaveText(result);
  }
);