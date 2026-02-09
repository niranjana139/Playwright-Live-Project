const {test,expect}=require('@playwright/test')
const SignUpPage=require('../page-objects/SignUpPage');
const ObjectManager = require('../page-objects/ObjectManager')
test.describe('Sign Up Test',()=>{
    test.beforeEach(async({page})=>{
        await page.goto('https://demoblaze.com/index.html')
    })
test('Sign Up Verification',async({page})=>{
   // await page.goto('https://demoblaze.com/index.html')
   const objManager = new ObjectManager(page);
   const signup = objManager.getSignUpPage();
    await signup.clickSignUpButton()
    await signup.enterUsername()
    await signup.enterPassword()
    await signup.signUp()
    
    page.once('dialog', async dialog => {
  expect(dialog.message()).toBe('Sign up successful.');
  await dialog.accept();
});
});
test('Sign Up and Close',async({page})=>{
    //await page.goto('https://demoblaze.com/index.html')
    const objManager = new ObjectManager(page);
    const signup = objManager.getSignUpPage();
    await signup.clickSignUpButton()
    await signup.enterUsername()
    await signup.enterPassword()
    await signup.closeWindow()
    await expect(page).toHaveURL("https://demoblaze.com/index.html")
});
});