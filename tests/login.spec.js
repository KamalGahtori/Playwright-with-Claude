import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";

let loginpage;

test("Login", async ({ page }) => {
    loginpage = new LoginPage(page);
    await loginpage.login(process.env.USERNAME, process.env.PASSWORD);
})