import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { Customworld } from "../world/world";
import { logger } from "../../../utilities/logger";
Given("the user Launches the application", async function (this: Customworld) {
  logger.info("application has started")
    console.log("Application started");
});

When("the user enters valid credentials",async function (this: Customworld) {
      logger.info("application has started")

   await  this.HomePage.usernamefill("problem_user")
     logger.info("application has started")

    await this.HomePage.passwordfill("secret_sauce")
  }
);

When("the user clicks on Login button",async function (this: Customworld) {
      logger.info("application has started")

   await this.HomePage.clicklogin()
  }
);

Then("the user should be redirected to the products list page",async function (this: Customworld) {
      logger.info("application has started")

    await this.HomePage.checkproduct("Products")
  }
);
When("User enters username {string}",async function (this: Customworld, username: string) {
      logger.info("application has started")

    await  this.HomePage.usernamefill(username)
  }
);

When("User enters password {string}",
  async function (this: Customworld, password: string) {
      logger.info("application has started")

        await this.HomePage.passwordfill(password)

  }
);

When("User clicks on Login button",async function (this: Customworld) {
      logger.info("application has started")

       await this.HomePage.clicklogin()

  }
);
Then("User should see {string}",async function (this: Customworld, result: string) {
  logger.info("application has started")

    await this.HomePage.checkproduct(result)
  }
);