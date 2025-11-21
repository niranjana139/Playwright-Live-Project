const {test,expect}=require('@playwright/test')
const SignUpPage=require('../page-objects/SignUpPage');

test('Sign Up Verification',async({page})=>{
    await page.goto('https://demoblaze.com/index.html')
    const signup=new SignUpPage(page)
    await signup.clickSignUpButton()
    await signup.enterUsername()
    await signup.enterPassword()
    await signup.signUp()
    
    page.once('dialog', async dialog => {
  expect(dialog.message()).toBe('Sign up successful.');
  await dialog.accept();
});
});
test.only('Sign Up and Close',async({page})=>{
    await page.goto('https://demoblaze.com/index.html')
    const signup=new SignUpPage(page)
    await signup.clickSignUpButton()
    await signup.enterUsername()
    await signup.enterPassword()
    await signup.closeWindow()
    await expect(page).toHaveURL("https://demoblaze.com/index.html")
});