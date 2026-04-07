import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";

let loginpage;

test.describe("Validate Dashboard Data", () => {
    test.beforeEach("Visit URL", async ({ page }) => {
        await page.goto(process.env.BASEURL);
        await expect(page.locator('[class="orangehrm-login-branding"]')).toBeVisible();
    })

    test("Login", async ({ page }) => {
        loginpage = new LoginPage(page);
        await loginpage.login(process.env.USERNAME, process.env.PASSWORD);
    })
})