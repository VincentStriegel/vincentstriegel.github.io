import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/projects");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Projects/);
});

test("project listings are visible", async ({ page }) => {
  await page.goto("/projects");
  // Verify at least one project listing exists
  const projectListings = page.getByRole("article");
  await expect(projectListings.first()).toBeVisible();
});

test("project links work", async ({ page }) => {
  await page.goto("/projects");
  // Click the first project link
  const firstProjectLink = page.getByRole("link", { name: /project/i }).first();
  await firstProjectLink.click();
  // Expects page to have a heading with the project title
  const projectTitle = await firstProjectLink.textContent();
  await expect(
    page.getByRole("heading", { name: projectTitle! }),
  ).toBeVisible();
});
