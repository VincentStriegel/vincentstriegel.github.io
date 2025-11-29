import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/about");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/About/);
});

test("has tech icons", async ({ page }) => {
  await page.goto("/about");
  // Verify expected tech icons exist
  await expect(page.getByAltText("JavaScript")).toBeVisible();
  await expect(page.getByAltText("TypeScript")).toBeVisible();
  await expect(page.getByAltText("HTML")).toBeVisible();
  await expect(page.getByAltText("Python")).toBeVisible();
  await expect(page.getByAltText("Docker")).toBeVisible();
});
