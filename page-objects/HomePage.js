class HomePage{
    constructor(page){
        this.logout=page.locator("//a[text()='Log out']")
    }
    async performLogout(){
        await this.logout.click()
    }
}
module.exports=HomePage