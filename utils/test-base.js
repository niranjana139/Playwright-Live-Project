const base = require('@playwright/test');//Import test file

exports.customtest = base.test.extend({//Extend lets you add our own fixtures (Here,name of fixture is "testDataForOrder")
  testDataForOrder:{
    username: "standard_user",
    password: "secret_sauce",
    productName: "Sauce Labs Backpack"  
  }  
});//Anyone who writes a test with customtest gets access to this object automatically.