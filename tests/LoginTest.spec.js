const {test,expect} = require('@playwright/test')
const data=JSON.parse(JSON.stringify(require("../utils/testData.json")))
const LoginPage=require('../page-objects/LoginPage')
test('Successful Login' ,async ({page})=>{
    const username=data.username
    const password=data.password
    await page.goto('https://demoblaze.com/')
    const loginPage=new LoginPage(page)
    await loginPage.clickLogin()
    await loginPage.enterUsername(username)
    await loginPage.enterPassword(password)
    await loginPage.login()
    const expectedURL="https://demoblaze.com/"
    await expect(page).toHaveURL(expectedURL)
});
test('UnSuccessful Login with invalid username' ,async ({page})=>{
    const invalidusername=data[1].invalidusername
    const invalidpassword=data[1].validpassword
    await page.goto('https://demoblaze.com/')
    const loginPage=new LoginPage(page)
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
    await page.goto('https://demoblaze.com/')
    const loginPage=new LoginPage(page)
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
    await page.goto('https://demoblaze.com/')
    const loginPage=new LoginPage(page)
    await loginPage.clickLogin()
    await loginPage.enterUsername(validusername)
    await loginPage.enterPassword(invalidpassword)
    await loginPage.login()
    //const expectedURL="https://demoblaze.com/"
    //await expect(page).toHaveURL(expectedURL)
});

