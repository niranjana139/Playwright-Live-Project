const {test,expect}=require('@playwright/test')
const data=JSON.parse(JSON.stringify(require("../utils/testData.json")))
const LoginPage=require('../page-objects/LoginPage')
const HomePage = require('../page-objects/HomePage')
const ObjectManager = require('../page-objects/ObjectManager')
const { beforeEach } = require('node:test')
test.beforeEach(async({page})=>{
    await page.goto('https://demoblaze.com/')
})
test('Logout functionality', async({page})=>{
    const objManager = new ObjectManager(page);
    const username=data[0].username
    const password=data[0].password
   // await page.goto('https://demoblaze.com/')
    await page.pause()
    const loginPage=objManager.getLoginPage();
    await loginPage.clickLogin()
    //await page.pause()
    await loginPage.enterUsername(username)
    await loginPage.enterPassword(password)
    await loginPage.login()

    const homePage=objManager.getHomePage();
    await homePage.performLogout();

})