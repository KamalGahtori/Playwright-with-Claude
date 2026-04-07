import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login'

let loginpage;

test.beforeEach("Login", async ({ page }) => {
    loginpage = new LoginPage(page);
    loginpage.login(process.env.USERNAME, process.env.PASSWORD)

})