import { test, expect } from '@playwright/test';
test('Login test', async ({ page }) => {
    await page.goto(process.env.base_urlt!);
    await page.fill('#input-email', process.env.unamet!);
    await page.fill('#input-password', process.env.pwordt!);
    await page.click("input[value='Login']");
    await expect(page.locator('body')).toContainText('My Account');
});