const { test, expect } = require('@playwright/test');

test('Homepage loads', async ({ page }) => {
  await page.goto('https://ansuman2105.github.io/');
  await expect(page).toHaveTitle(/Portfolio/i);
});

test('Body is visible', async ({ page }) => {
  await page.goto('https://ansuman2105.github.io/');
  await expect(page.locator('body')).toBeVisible();
});

test('Navigation exists', async ({ page }) => {
  await page.goto('https://ansuman2105.github.io/');
  await expect(page.locator('nav')).toBeVisible();
});

test('Main content exists', async ({ page }) => {
  await page.goto('https://ansuman2105.github.io/');
  await expect(page.locator('main')).toBeVisible();
});

test('Footer exists', async ({ page }) => {
  await page.goto('https://ansuman2105.github.io/');
  await expect(page.locator('footer')).toBeVisible();
});

test('Intentional Failure', async ({ page }) => {
  await page.goto('https://ansuman2105.github.io/');

  await expect(page.locator('#this-element-does-not-exist')).toBeVisible();
});
