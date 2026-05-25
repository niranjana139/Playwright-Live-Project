const {test,expect} = require('@playwright/test')
const data=JSON.parse(JSON.stringify(require("../utils/testData.json")))
const LoginPage=require('../page-objects/LoginPage')
const ObjectManager = require('../page-objects/ObjectManager')
test.describe('Login Test',()=>{
    test.beforeEach(async({page})=>{
        await page.goto('https://demoblaze.com/')
    })
test('Successful Login' ,async ({page})=>{
    const username=data[0].username
    const password=data[0].password
    //await page.goto('https://demoblaze.com/')
    const objManager = new ObjectManager(page);
    const loginPage = objManager.getLoginPage();
    await loginPage.clickLogin()
    await page.waitForTimeout(2000)
    await loginPage.enterUsername(username)
    await loginPage.enterPassword(password)
    await page.waitForTimeout(2000)
    await loginPage.login()
    const expectedURL="https://demoblaze.com/"
    await expect(page).toHaveURL(expectedURL)
});
test('UnSuccessful Login with invalid username' ,async ({page})=>{
    const invalidusername=data[1].invalidusername
    const invalidpassword=data[1].validpassword
    //await page.goto('https://demoblaze.com/')
    const objManager = new ObjectManager(page);
    const loginPage = objManager.getLoginPage();
    await loginPage.clickLogin()
    await loginPage.enterUsername(invalidusername)
    await loginPage.enterPassword(invalidpassword)
    await loginPage.login()
    //const expectedURL="https://demoblaze.com/"
    //await expect(page).toHaveURL(expectedURL)
});
test('UnSuccessful Login with invalid password' ,async ({page})=>{
    const validusername=data[2].validusername
    const invalidpassword=data[2].invalidpassword
    const objManager = new ObjectManager(page);     

    //await page.goto('https://demoblaze.com/')
    const loginPage = objManager.getLoginPage();
    await loginPage.clickLogin()
    await loginPage.enterUsername(validusername)
    await loginPage.enterPassword(invalidpassword)
    await loginPage.login()
    //const expectedURL="https://demoblaze.com/"
    //await expect(page).toHaveURL(expectedURL)
});

test('UnSuccessful Login with invalid username and password' ,async ({page})=>{
    const validusername=data[3].invalidusername
    const invalidpassword=data[3].invalidpassword
    //await page.goto('https://demoblaze.com/')
    const objManager = new ObjectManager(page);
    const loginPage = objManager.getLoginPage();
    await loginPage.clickLogin()
    await loginPage.enterUsername(validusername)
    await loginPage.enterPassword(invalidpassword)
    await loginPage.login()
    //const expectedURL="https://demoblaze.com/"
    //await expect(page).toHaveURL(expectedURL)
});
});
