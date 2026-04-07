import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";
import { Dashboard } from "../pages/dashboard";

let loginpage;
let dashboard;

test.describe("Validate Dashboard Data", () => {

    test.beforeEach("Login", async ({ page }) => {
        loginpage = new LoginPage(page);
        await loginpage.login(process.env.USERNAME, process.env.PASSWORD);
    })

    test.skip("Validate Dashboard Cards", async ({ page }) => {
        dashboard = new Dashboard(page);
        await dashboard.validateDashboardCardCount();
        await dashboard.validateDashboardCardTitle();
    })
})