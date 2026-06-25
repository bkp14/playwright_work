import { test, expect } from '@playwright/test';

test('demoblaze cart flow test', async ({ page }) => {

  // 1. Open application
  await page.goto('https://www.demoblaze.com/');

  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();

  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();

  page.once('dialog', async dialog => {
    console.log('Alert:', dialog.message());
    await dialog.accept();
  });

  // 4. Add to cart
  await page.getByRole('link', { name: 'Add to cart' }).click();

  // small wait to ensure alert is handled
  await page.waitForTimeout(1000);

  // 5. Go to cart
  await page.getByRole('link', { name: 'Cart', exact: true }).click();

  // 6. Verify product in cart (stable check)
  await expect(page.locator('#tbodyid')).toContainText('Samsung galaxy s6');

  // 7. Delete item
  await page.getByRole('link', { name: 'Delete' }).click();

  // 8. Verify cart is empty
  await expect(page.locator('#tbodyid')).not.toContainText('Samsung galaxy s6');

  // 9. Go back home
  await page.getByRole('link', { name: 'Home (current)' }).click();

  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();

  // 10. Navigate categories
  await page.getByRole('link', { name: 'Phones' }).click();

  await expect(page.locator('#tbodyid')).toBeVisible();

  await page.getByRole('link', { name: 'Laptops' }).click();

  await expect(page.locator('#tbodyid')).toBeVisible();

  await page.getByRole('link', { name: 'Sony vaio i5' }).click();

  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();

  page.once('dialog', async dialog => {
    console.log('Alert:', dialog.message());
    await dialog.accept();
  });

  await page.getByRole('link', { name: 'Add to cart' }).click();

  await page.waitForTimeout(1000);

  await page.getByRole('link', { name: 'Cart', exact: true }).click();

  await expect(page.locator('#tbodyid')).toContainText('Sony vaio i5');
});