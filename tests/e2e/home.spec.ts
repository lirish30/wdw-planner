import { expect, test } from "@playwright/test";

test("renders the WDW Planner home shell", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("WDW Planner");
  await expect(page.getByRole("heading", { name: "One calm plan for every day." })).toBeVisible();
  await expect(page.getByRole("link", { name: "Design system" })).toHaveAttribute(
    "href",
    "/specimen",
  );
});
