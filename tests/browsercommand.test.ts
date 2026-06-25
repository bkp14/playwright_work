import { test } from "@playwright/test";

test("browser commands", async ({ page }) => {

  await page.goto("https://www.demoblaze.com/");
  console.log(await page.title());
  console.log(page.url());

  await page.waitForTimeout(2000);

  await page.goto("https://the-internet.herokuapp.com/login");
  await page.waitForTimeout(2000);
  await page.goBack();
  await page.waitForTimeout(2000);

  await page.waitForLoadState('load');

  await page.goForward();
  await page.waitForTimeout(2000);

  await page.reload();
  await page.waitForTimeout(2000);

  await page.close();
});