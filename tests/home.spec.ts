import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Home/);
});

test("navigation has expected links", async ({ page }) => {
  await page.goto("/");

  // Verify all expected nav links exist
  await expect(page.getByRole("link", { name: "About" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Projects" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Contact" })).toBeVisible();
});

test("get about link", async ({ page }) => {
  await page.goto("/");

  // Click the get about link.
  await page.getByRole("link", { name: "About" }).click();

  // Expects page to have a heading with the name of About Me.
  await expect(page.getByRole("heading", { name: "Hi" })).toBeVisible();
});

test("navigates to projects page", async ({ page }) => {
  await page.goto("/");
  // Click the get projects link.
  await page.getByRole("link", { name: "Projects" }).click();
  // Expects page to have a heading with the name of Projects.
  await expect(page.getByRole("heading", { name: "Projects" })).toBeVisible();
});

test("navigates to contact page", async ({ page }) => {
  await page.goto("/");
  // Click the get contact link.
  await page.getByRole("link", { name: "Contact" }).click();
  // Expects page to have a heading with the name of Contact.
  await expect(page.getByRole("heading", { name: "Contact Me" })).toBeVisible();
});
