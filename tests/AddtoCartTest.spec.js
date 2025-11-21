const {test,expect}=require('@playwright/test')
const data=JSON.parse(JSON.stringify(require("../utils/testData.json")))
const LoginPage=require('../page-objects/LoginPage')
const AddtoCartPage=require('../page-objects/AddtoCartPage')
test('Add product to Cart',async({page})=>{
    const username=data[0].username
    const password=data[0].password
    await page.goto('https://demoblaze.com/')
    await page.pause()
    const loginPage=new LoginPage(page)
    await loginPage.clickLogin()
    //await page.pause()
    console.log(username)
    await loginPage.enterUsername(username)
    await loginPage.enterPassword(password)
    await loginPage.login()

    const addToCartPage = new  AddtoCartPage(page) 
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

test.only('Add phone product to Cart',async({page})=>{
    const username=data[0].username
    const password=data[0].password
    await page.goto('https://demoblaze.com/')
    const loginPage=new LoginPage(page)
    await loginPage.clickLogin()
    await loginPage.enterUsername(username)
    await loginPage.enterPassword(password)
    await loginPage.login()

    const addToCartPage = new AddtoCartPage(page) 
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
test.only('Add monitor product to Cart',async({page})=>{
    const username=data[0].username
    const password=data[0].password
    await page.goto('https://demoblaze.com/')
    const loginPage=new LoginPage(page)
    await loginPage.clickLogin()
    await loginPage.enterUsername(username)
    await loginPage.enterPassword(password)
    await loginPage.login()

    const addToCartPage = new AddtoCartPage(page) 
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