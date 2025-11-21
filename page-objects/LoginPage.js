class LoginPage{
    constructor(page){
        this.page=page
        this.loginButton=page.locator("//a[text()='Log in']")
        this.username=page.locator('#loginusername')
        this.password=page.locator('#loginpassword')
        this.loginBtn=page.locator("//button[text()='Log in']")
    }
    async clickLogin(){
        await this.loginButton.click()
    }
    async enterUsername(usernameValue){
        await this.username.fill(usernameValue)
    }
    async enterPassword(passwordValue){
        await this.password.fill(passwordValue)
    }
    async login(){
        await this.loginBtn.click()
    }
}
module.exports=LoginPage