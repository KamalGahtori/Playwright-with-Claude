import { expect } from "@playwright/test"

export class Dashboard {
    constructor(page) {
        this.page = page;
        this.dashboardCard = this.page.locator('[class="orangehrm-dashboard-widget-header"]');
        this.dashboardCardTitle = this.page.locator('[class="oxd-sheet oxd-sheet--rounded oxd-sheet--white orangehrm-dashboard-widget"] div div p[class="oxd-text oxd-text--p"]');
    }
    async validateDashboardCardCount() {
        let count = await this.dashboardCard.count();
        console.log(count);
        expect(count).toBe(7);
    }
    async validateDashboardCardTitle() {
        let dashboardCardTitleCount = this.dashboardCardTitle.count();
        for (let i = 0; i <= dashboardCardTitleCount; i++) {
            let title = this.dashboardCardTitle.nth(i).text();
            if (title = "Time at Work") {
                console.log("Title has a match");
            }
        }

    }
}
