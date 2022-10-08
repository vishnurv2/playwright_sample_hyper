import { expect } from "@playwright/test";
import test from "../lambdatest-setup";

test("create a room from admin perspective", async ({ page }) => {
  // Go to https://automationintesting.online/
  await page.goto("https://automationintesting.online/");
  // Click text=Let me hack!
  await page.locator("text=Let me hack!").click();
  for (let i = 0; i < 50; i++) {
    // Go to https://automationintesting.online/#/admin
    await page.goto("https://automationintesting.online/#/admin");
    // Click [data-testid="username"]
    await page.locator('[data-testid="username"]').click();
    // Fill [data-testid="username"]
    await page.locator('[data-testid="username"]').fill("admin");
    // Press Tab
    await page.locator('[data-testid="username"]').press("Tab");
    // Fill [data-testid="password"]
    await page.locator('[data-testid="password"]').fill("password");
    // Click [data-testid="submit"]
    await page.locator('[data-testid="submit"]').click();
    // Click [data-testid="roomName"]
    await page.locator('[data-testid="roomName"]').click();
    // Fill [data-testid="roomName"]
    await page.locator('[data-testid="roomName"]').fill("102");
    // Select Twin
    await page.locator("#type").selectOption("Twin");
    // Select true
    await page.locator("#accessible").selectOption("true");
    // Click #roomPrice
    await page.locator("#roomPrice").click();
    // Fill #roomPrice
    await page.locator("#roomPrice").fill("150");
    // Check #wifiCheckbox
    await page.locator("#wifiCheckbox").check();
    // Check #safeCheckbox
    await page.locator("#safeCheckbox").check();
    // Check #viewsCheckbox
    await page.locator("#viewsCheckbox").check();
    // Click button:has-text("Create")
    await page.locator('button:has-text("Create")').click();
    // Click text=Front Page

    // Click p:has-text("twin")
    await page.locator('p:has-text("twin")').first().click();
    // Click text=Type: single
    await expect(page.locator("text=Type: twin")).toBeVisible();
    await expect(page.locator("text=Room price: 150")).toBeVisible();
    await expect(
      page.locator("text=Features: WiFi, Safe, Views")
    ).toBeVisible();
    // Click text=Logout
    await page.locator("text=Logout").click();
  }
});
