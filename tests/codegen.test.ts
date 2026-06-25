import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
  await page.getByText('You logged into a secure area').click();
  await page.getByRole('link', { name: 'Logout' }).click();
  await page.getByText('You logged out of the secure').click();
  await expect(page.locator('#login')).toContainText('Username');
  await expect(page.locator('#flash')).toMatchAriaSnapshot(`
    - text:  You logged out of the secure area!
    - link "×":
      - /url: "#"
    `);
  await expect(page.getByText('You logged out of the secure')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Login Page' })).toBeVisible();
  await expect(page.locator('#login')).toMatchAriaSnapshot(`- text: Username`);
});