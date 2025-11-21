class SignUpPage{
    constructor(page){
        this.page=page
        this.signUpButton=page.locator("//a[text()='Sign up']")
        this.usernameField=page.locator('#sign-username')
        this.passwordField=page.locator('#sign-password')
        this.signUpBtn=page.locator("//button[text()='Sign up']")
        this.close = page.getByRole('button', { name: 'Close' }).nth(0);
    }
    async clickSignUpButton(){
        await this.signUpButton.click()
    }
    async enterUsername(){
        await this.usernameField.fill('abcde')
    }
    async enterPassword(){
        await this.passwordField.fill('xyze')
    }
    async signUp(){
        await this.signUpBtn.click()
    }

    async closeWindow(){
        await this.close.click(); 
    }
}
module.exports=SignUpPage