import { expect, test } from "@playwright/test";

test("home exposes the portfolio and a working sandbox", async ({ page }) => {
  const consoleErrors: string[] = [];
  page.on("console", (message) => { if (message.type() === "error") consoleErrors.push(message.text()); });
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("complicated work");
  await page.getByRole("button", { name: /vessel maintenance/i }).click();
  await page.getByRole("button", { name: /build a sample brief/i }).click();
  await expect(page.getByText(/nothing has been submitted/i)).toBeVisible();
  expect(consoleErrors).toEqual([]);
  await page.screenshot({ path: "test-results/portfolio-home.png", fullPage: true });
});

for (const viewport of [{ width: 375, height: 812 }, { width: 768, height: 1024 }, { width: 1440, height: 900 }]) {
  test(`layout avoids horizontal overflow at ${viewport.width}px`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto("/");
    const sizes = await page.evaluate(() => ({ viewport: window.innerWidth, document: document.documentElement.scrollWidth }));
    expect(sizes.document).toBeLessThanOrEqual(sizes.viewport);
  });
}

test("catalog filters and project routes work", async ({ page }) => {
  await page.goto("/work");
  await page.getByRole("button", { name: "AI & automation" }).click();
  await expect(page.getByRole("link", { name: /CodexVoice/i })).toBeVisible();
  await page.goto("/work/scrubmarine");
  await expect(page.getByRole("heading", { level: 1, name: "ScrubMarine" })).toBeVisible();
  await page.getByRole("button", { name: /dock inspection/i }).click();
  await page.getByRole("button", { name: /build preview/i }).click();
  await expect(page.getByText("Service request staged")).toBeVisible();
});
