import { test, expect } from "@playwright/test";
import { LoginPage } from "../pageObject/login";


let loginpage;
test.describe("Validate Dashboard Data", () => {
    test.beforeEach("Visit URL", async ({ page }) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await expect(page.locator('[alt="company-branding"]')).toBeVisible();
    })

    test("Login", async ({ page }) => {
        loginpage = new LoginPage(page);
        await loginpage.login("Admin", "admin123");
    })
})