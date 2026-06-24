import { test, expect } from '@playwright/test';

test('Login demoblaze', async ({ page }) => {
    await page.goto(process.env.base_urld!);
    await page.click('#login2');
    await page.fill('#loginusername', process.env.unamed!);
    await page.fill('#loginpassword', process.env.pwordd!);
    await page.click("//button[text()='Log in']");
});