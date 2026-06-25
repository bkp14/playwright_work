import { expect, test } from "@playwright/test";

test("objcmd", async ({ page }) => {
    test.setTimeout(60000);

    await page.goto("https://automationexercise.com/");
    await expect(page).toHaveURL("https://automationexercise.com/");

    const addToCartButton = page.locator('.productinfo .add-to-cart').first();
    await expect(addToCartButton).toBeVisible();
    await addToCartButton.dispatchEvent("click");
    await expect(page.locator(".modal-content")).toBeVisible();
    await page.getByText("Continue Shopping").click();

    await Promise.all([
        page.waitForURL(/\/view_cart$/),
        page.getByRole("link", { name: 'Cart' }).first().click(),
    ]);
    await expect(page).toHaveTitle(/Automation Exercise - Checkout/);

    await page.getByText("Proceed To Checkout").click();
    await expect(page.getByText("Register / Login account to proceed on checkout.")).toBeVisible();

    await page.locator("//a[@href='/login']/child::u").click();
    await expect(page.locator('input[data-qa="login-email"]')).toHaveAttribute("placeholder", "Email Address");

    await page.locator('input[data-qa="login-email"]').fill("demo09@gmail.com");
    await page.locator('input[data-qa="login-password"]').fill("121");
    await page.locator("//*[@id='form']/div/div/div[1]/div/form/button").click();
    await expect(page.getByText("Logged in as")).toContainText("Logged in as");

    await Promise.all([
        page.waitForURL(/\/view_cart$/),
        page.getByRole("link", { name: 'Cart' }).first().click(),
    ]);
    await expect(page.locator("#cart_info_table")).toBeVisible();
    const cartProductCount = await page.locator("#cart_info_table tbody tr").count();
    expect(cartProductCount).toBeGreaterThan(0);

    await Promise.all([
        page.waitForURL(/\/checkout$/),
        page.locator(".check_out", { hasText: "Proceed To Checkout" }).click(),
    ]);
    expect(page.url()).toContain("/checkout");

    await page.locator('textarea[name="message"]').fill('products are of fine quality');
    await expect(page.locator('textarea[name="message"]')).toHaveValue('products are of fine quality');

    await Promise.all([
        page.waitForURL(/\/payment$/),
        page.locator('a[href="/payment"]', { hasText: "Place Order" }).click(),
    ]);
    await expect(page).toHaveURL(/\/payment$/);

    await page.locator('input[data-qa="name-on-card"]').fill("venkatesh prasanna");
    await page.locator('input[data-qa="card-number"]').fill("12345");
    await page.locator('input[data-qa="cvc"]').fill("125");
    await page.locator('input[data-qa="expiry-month"]').fill("1");
    await page.locator('input[data-qa="expiry-year"]').fill("2027");
    await Promise.all([
        page.waitForURL(/\/payment_done\/\d+$/),
        page.locator('button[data-qa="pay-button"]').click(),
    ]);
    const successMsgLocator = page.locator('[data-qa="order-placed"]');
    await expect(successMsgLocator).toHaveText('Order Placed!');
});
