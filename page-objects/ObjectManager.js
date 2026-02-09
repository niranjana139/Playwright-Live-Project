const SignUpPage = require('./SignUpPage')
const LoginPage = require('./LoginPage')
const HomePage = require('./HomePage')
const AddToCartPage = require('./AddToCartPage')

class ObjectManager {
  constructor(page) {
    this.page = page
  }
  getSignUpPage() {
    return new SignUpPage(this.page);
  }

  getLoginPage() {
    return new LoginPage(this.page);
  }

  getHomePage() {
    return new HomePage(this.page);
  }

  getAddToCartPage() {
    return new AddToCartPage(this.page);
  }
}

module.exports = ObjectManager