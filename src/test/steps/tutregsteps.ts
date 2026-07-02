import { Given, Then, When } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, expect, Page } from '@playwright/test';

let browser: Browser;
let context: BrowserContext;
let page: Page;

Given('user navigate to the tutorialsninja website', async function () {
  browser = await chromium.launch({headless: false,});

  page = await browser.newPage();

  await page.goto("https://tutorialsninja.com/demo/", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
});

Given('user click the register link', async function () {
  await page.locator('a[title="My Account"]').click({ timeout: 10000 });
  await page.locator('a[href*="route=account/register"]').click({ timeout: 10000 });
});

When('user enter the first name as {string}', async function (string) {
  await page.locator('#input-firstname').fill(string);
});

When('user enter the last name as {string}', async function (string) {
  await page.locator('#input-lastname').fill(string);
});

When('user enter the register email as {string}', async function (string) {
  await page.locator('#input-email').fill(string);
});

When('user enter the telephone as {string}', async function (string) {
  await page.locator('#input-telephone').fill(string);
});

When('user enter the register password as {string}', async function (string) {
  await page.locator('#input-password').fill(string);
});

When('user enter the confirm password as {string}', async function (string) {
  await page.locator('#input-confirm').fill(string);
});

When('user select the privacy policy checkbox', async function () {
  await page.locator('input[name="agree"]').check();
});

When('user click the continue button', async function () {
  await page.locator('input[value="Continue"]').click();
});

Then('user should see the register success message {string}', async function (string) {
  const heading = page.locator('#content h1');
  await expect(heading).toHaveText(string, { timeout: 10000 });
  page.close();
})