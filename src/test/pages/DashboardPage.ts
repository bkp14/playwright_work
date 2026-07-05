import { basePage } from "./basePage";

export class DashboardPage extends basePage{
    private loggedAs="//li[10]//a[1]"
    async usernameVisible(){
        await this.isVisible(this.loggedAs)
    }
}