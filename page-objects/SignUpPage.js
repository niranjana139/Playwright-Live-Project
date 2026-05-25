import TestDataGenerator from "../helpers/RandomDataGenerator"  
class SignUpPage{
    constructor(page){
        this.page=page
        this.signUpButton=page.locator('//a[text()="Sign up"]')
        this.usernameField=page.locator('#sign-username')
        this.passwordField=page.locator('#sign-password')
        this.signUpBtn=page.locator("//button[text()='Sign up']")
        this.close = page.getByRole('button', { name: 'Close' }).nth(0);
        this.randomDataGenerator = new TestDataGenerator();
    }
    async clickSignUpButton(){
        await this.signUpButton.click()
    }
    async enterUsername(){
        this.randomUsername = this.randomDataGenerator.generateUsername();
        await this.usernameField.fill(this.randomUsername)
    }
    async enterPassword(){
        this.randomPassword = this.randomDataGenerator.generatePassword();
        await this.passwordField.fill(this.randomPassword)
    }
    async signUp(){
        await this.signUpBtn.click()
    }

    async closeWindow(){
        await this.close.click(); 
    }
}
module.exports=SignUpPage