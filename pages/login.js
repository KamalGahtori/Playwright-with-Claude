import { expect } from "@playwright/test";

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameinputbox = page.locator('[name="username"]');
        this.passwordinputbox = page.locator('[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
        this.logo = page.locator('[alt="client brand banner"]');
    }
    async login(username, password) {
        await this.usernameinputbox.fill(username)
        await this.passwordinputbox.fill(password);
        await this.loginButton.click();
        await expect(this.logo).toBeVisible();
    }
}
