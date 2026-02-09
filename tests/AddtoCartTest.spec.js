const {test,expect}=require('@playwright/test')
const data=JSON.parse(JSON.stringify(require("../utils/testData.json")))
const ObjectManager =require('../page-objects/ObjectManager')
const LoginPage=require('../page-objects/LoginPage')
//const AddtoCartPage=require('../page-objects/AddtoCartPage')
const {customtest} = require('../utils/test-base')
test.describe('Add to Cart Test',()=>{
    test.beforeEach(async({page})=>{
        await page.goto('https://demoblaze.com/')
    })
test.only('Add product to Cart',async({page})=>{
    
    const objManager = new ObjectManager(page);
    const username=data[0].username
    const password=data[0].password
    //await page.goto('https://demoblaze.com/')
    await page.pause()
    const loginPage=objManager.getLoginPage(page)
    await loginPage.clickLogin()
    //await page.pause()
    console.log(username)
    await loginPage.enterUsername(username)
    await loginPage.enterPassword(password)
    await loginPage.login()

    const addToCartPage = objManager.getAddToCartPage()
    await page.pause()
    addToCartPage.select_product()
    await page.pause()
    await addToCartPage.addToCartBtn()
    page.on('dialog', dialog => dialog.accept());
    await addToCartPage.selectCart()
    await page.pause()
    await addToCartPage.placeOrderClick()
    await addToCartPage.addcustomername()
    await addToCartPage.addcountry()
    await addToCartPage.addcity()
    await addToCartPage.addCreditCardData()
    await addToCartPage.addMonth()
    await addToCartPage.addYear()
    await addToCartPage.purchaseProduct()
});

test('Add phone product to Cart',async({page})=>{
    const username=data[0].username
    const password=data[0].password
   // await page.goto('https://demoblaze.com/')
    const loginPage=new LoginPage(page)
    await loginPage.clickLogin()
    await loginPage.enterUsername(username)
    await loginPage.enterPassword(password)
    await loginPage.login()

    const addToCartPage = objManager.getAddToCartPage()
    addToCartPage.select_phone()
    addToCartPage.select_product()
    await page.pause()
    await addToCartPage.addToCartBtn()
    page.on('dialog', dialog => dialog.accept());
    await addToCartPage.selectCart()
    await page.pause()
    await addToCartPage.placeOrderClick()
    await addToCartPage.addcustomername()
    await addToCartPage.addcountry()
    await addToCartPage.addcity()
    await addToCartPage.addCreditCardData()
    await addToCartPage.addMonth()
    await addToCartPage.addYear()
    await addToCartPage.purchaseProduct()
});
test('Add monitor product to Cart',async({page})=>{
    const username=data[0].username
    const password=data[0].password
    //await page.goto('https://demoblaze.com/')
    const loginPage=new LoginPage(page)
    await loginPage.clickLogin()
    await loginPage.enterUsername(username)
    await loginPage.enterPassword(password)
    await loginPage.login()

    const addToCartPage = objManager.getAddToCartPage()
    addToCartPage.selectMonitor()
    addToCartPage.select_product()
    await page.pause()
    await addToCartPage.addToCartBtn()
    page.on('dialog', dialog => dialog.accept());
    await addToCartPage.selectCart()
    await page.pause()
    await addToCartPage.placeOrderClick()
    await addToCartPage.addcustomername()
    await addToCartPage.addcountry()
    await addToCartPage.addcity()
    await addToCartPage.addCreditCardData()
    await addToCartPage.addMonth()
    await addToCartPage.addYear()
    await addToCartPage.purchaseProduct()
});
customtest.only('Parameterized data driven',async({page,testDataForOrder})=>{
    //const username=data[0].username
    //const password=data[0].password
    //await page.goto('https://demoblaze.com/')
     const objManager = new ObjectManager(page);
    const loginPage = objManager.getLoginPage();
    await loginPage.clickLogin()
    await loginPage.enterUsername(testDataForOrder.username)
    await loginPage.enterPassword(testDataForOrder.password)
    await loginPage.login()

    const addToCartPage = objManager.getAddToCartPage(page)
    addToCartPage.selectMonitor()
    addToCartPage.select_product()
    await page.pause()
    await addToCartPage.addToCartBtn()
    page.on('dialog', dialog => dialog.accept());
    await addToCartPage.selectCart()
    await page.pause()
    await addToCartPage.placeOrderClick()
    await addToCartPage.addcustomername()
    await addToCartPage.addcountry()
    await addToCartPage.addcity()
    await addToCartPage.addCreditCardData()
    await addToCartPage.addMonth()
    await addToCartPage.addYear()
    await addToCartPage.purchaseProduct()
});

});
