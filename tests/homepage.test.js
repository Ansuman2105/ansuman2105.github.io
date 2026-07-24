const { test, expect } = require('@playwright/test');

const URL = "https://ansuman2105.github.io";

test.beforeEach(async ({ page }) => {
    await page.goto(URL);
});

test("TC001 - Verify Portfolio Title", async ({ page }) => {
    await expect(page).toHaveTitle("Ansuman Nayak | Program Manager");
});

test("TC002 - Verify Hero Heading", async ({ page }) => {
    await expect(page.locator("h1")).toHaveText("Ansuman Nayak");
});

test("TC003 - Verify Navigation Menu", async ({ page }) => {

    await expect(page.locator('a[href="#about"]')).toBeVisible();
    await expect(page.locator('a[href="#projects"]')).toBeVisible();
    await expect(page.locator('a[href="#contact"]')).toBeVisible();

});

test("TC004 - Verify Stats Section", async ({ page }) => {

    await expect(page.locator("#stats")).toBeVisible();
    await expect(page.locator("text=3.5+")).toBeVisible();

});

test("TC005 - Verify Contact Section", async ({ page }) => {

    await page.locator("#contact").scrollIntoViewIfNeeded();

    await expect(page.locator("text=nansuman2@gmail.com")).toBeVisible();

});

test("TC006 - Verify Resume Download Button (Intentional Fail)", async ({ page }) => {

    // This id DOES NOT EXIST
    await expect(page.locator("#downloadResume")).toBeVisible();

});
