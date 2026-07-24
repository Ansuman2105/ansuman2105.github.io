const { test, expect } = require('@playwright/test');

test('Portfolio homepage loads', async ({ page }) => {
  await page.goto('https://ansuman2105.github.io/');
  await expect(page).toHaveTitle(/Ansuman/);  // adjust to match your page title
});
