import { test, expect } from '@playwright/test';

test("Search Product", async ({ page }) => {
  await page.goto("https://automationexercise.com");
  await page.setViewportSize({ width: 1920, height: 1080 });

  await page.locator("//a[@href='/products']").click();


  await page.locator("//input[@id='search_product']").fill("Shirt");
  await page.locator("//button[@id='submit_search']").click();


  const search = await page
    .locator("//div[@class='overlay-content']//p[contains(text(),'Men Tshirt')]")
    .textContent();

  console.log(search);
});