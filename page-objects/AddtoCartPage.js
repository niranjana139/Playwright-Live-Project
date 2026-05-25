import TestDataGenerator from "../helpers/RandomDataGenerator.js"; 
class AddtoCartPage {
  constructor(page) {
    this.page = page;
    this.product = page.locator("//a[text()='Samsung galaxy s6']");
    this.phoneProduct = page.locator("//a[text()='Phones']");
    this.addtocartbutton = page.locator("//a[text()='Add to cart']");
    this.cart=page.locator("//a[text()='Cart']")
    this.placeOrder=page.locator("//button[@data-target='#orderModal']")
    this.custname=page.locator("//input[@id='name']")
    this.countryname=page.locator("//input[@id='country']")
    this.cityname=page.locator("//input[@id='city']")
    this.creditcard=page.locator("//input[@id='card']")
    this.month=page.locator("//input[@id='month']")
    this.year=page.locator("//input[@id='year']")
    this.purchasebtn=page.locator("//button[text()='Purchase']")
    this.monitor=page.locator("//a[text()='Monitors']")
    this.monitorproduct=page.getByText("Apple monitor 24")
    this.randomDataGenerator = new TestDataGenerator();
  }

  async select_monitor_product(){
    await this.monitorproduct.click()
  }
  async select_phone() {
    await this.phoneProduct.click(); 
  }

  async select_product() {
    await this.product.click();      
  }

  async addToCartBtn() {
    
    await this.addtocartbutton.click();
  }

  async selectCart(){
    await this.cart.click()
  }

  async placeOrderClick(){
    await this.placeOrder.click()
  }

  async addcustomername(){
    await this.custname.fill(this.randomDataGenerator.generateRandomFullName())
   // await this.custname.fill("abc")
  }

  async addcountry(){
    await this.countryname.fill(this.randomDataGenerator.generateCountry())
  }

  async addcity(){
    await this.cityname.fill(this.randomDataGenerator.generateCityName())
  }

  async addCreditCardData(){
    await this.creditcard.fill(this.randomDataGenerator.generateFormattedCardNumber())
  }

  async addMonth(){
    await this.month.fill(this.randomDataGenerator.generateRandomMonthMM())
  }

  async addYear(){
    await this.year.fill(this.randomDataGenerator.generateRandomYear())
  }
  async purchaseProduct(){
    await this.purchasebtn.click()
  }
  
  async selectMonitor(){
    await this.monitor.click()
  }
}


module.exports = AddtoCartPage;
