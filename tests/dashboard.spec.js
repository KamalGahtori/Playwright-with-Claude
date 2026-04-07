import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";
import { Dashboard } from "../pages/dashboard";

let loginpage;
let dashboard;

test.describe("Validate Dashboard Data", () => {
    test.beforeEach("Visit URL", async ({ page }) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await expect(page.locator('[alt="company-branding"]')).toBeVisible();
    })

    test.beforeEach("Login", async ({ page }) => {
        loginpage = new LoginPage(page);
        await loginpage.login(process.env.USERNAME, process.env.PASSWORD);
    })

    test("Validate Dashboard Cards", async ({ page }) => {
        dashboard = new Dashboard(page);
        await dashboard.validateDashboardCardCount();
        await dashboard.validateDashboardCardTitle();
    })
})