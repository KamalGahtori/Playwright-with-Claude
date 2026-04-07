import { expect } from "@playwright/test"

export class Logout {
    constructor(page) {
        this.page = page;
        this.userMenu = this.page.locator('[class="oxd-userdropdown-name"]');
        this.logoutButton = this.page.getByText('Logout');
    }

    async logout() {
        await this.userMenu.click();
        await this.logout.click();

    }
}