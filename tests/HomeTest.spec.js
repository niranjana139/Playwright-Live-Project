const {test,expect}=require('@playwright/test')
const data=JSON.parse(JSON.stringify(require("../utils/testData.json")))
const LoginPage=require('../page-objects/LoginPage')
const HomePage = require('../page-objects/HomePage')
test('Logout functionality', async({page})=>{
    const username=data[0].username
    const password=data[0].password
    await page.goto('https://demoblaze.com/')
    await page.pause()
    const loginPage=new LoginPage(page)
    await loginPage.clickLogin()
    //await page.pause()
    await loginPage.enterUsername(username)
    await loginPage.enterPassword(password)
    await loginPage.login()

    const homePage=new HomePage(page)
    await homePage.performLogout()

})