$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/kurtCheckout.feature");
formatter.feature({
  "line": 1,
  "name": "Checkout at Kurt Geiger",
  "description": "",
  "id": "checkout-at-kurt-geiger",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Add product and go to checkoutPage",
  "description": "",
  "id": "checkout-at-kurt-geiger;add-product-and-go-to-checkoutpage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I select men category from the header",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on PDP",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I select any colour and size for the chosen men category",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I add the product to the bag",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I can see the bag with single item",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click \u0027Proceed to Checkout\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should be on checkout page",
  "keyword": "Then "
});
formatter.match({
  "location": "checkOutSteps.i_select_men_category_from_the_header()"
});
formatter.result({
  "duration": 25957652155,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"kg_kgmen_kgmenshoes\"]/a\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10.08 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Dell\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:61516}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38), userDataDir\u003dC:\\Users\\WelCome1\\AppData\\Local\\Temp\\scoped_dir3240_7866}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 1dcff908a8c7eebc6017b7cb5ba3a616\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"kg_kgmen_kgmenshoes\"]/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat Utils.clickOnElement(Utils.java:30)\r\n\tat checkOutSteps.i_select_men_category_from_the_header(checkOutSteps.java:14)\r\n\tat ✽.Given I select men category from the header(src/test/resources/features/kurtCheckout.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "checkOutSteps.i_am_on_PDP()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "checkOutSteps.i_select_any_colour_and_size_for_the_chosen_men_category()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "checkOutSteps.i_add_the_product_to_the_bag()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "checkOutSteps.i_can_see_the_bag_with_single_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "checkOutSteps.i_click_Proceed_to_Checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "checkOutSteps.i_should_be_on_checkout_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "check Payment credentials",
  "description": "",
  "id": "checkout-at-kurt-geiger;check-payment-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I checkout as a guest",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter all the billing and delivery details",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click \u0027Continue to Payment\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should be on the payment summary page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I select to pay by card",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter credit card no with expiry date",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter CVC code",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see \"Your card number has failed our validity checks and appears to be incorrect. Please check and re-enter.”",
  "keyword": "Then "
});
formatter.match({
  "location": "checkOutSteps.i_checkout_as_a_guest()"
});
formatter.result({
  "duration": 10030932064,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"co-register-guest-form\"]/div/button/span/span\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10.03 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Dell\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:61516}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38), userDataDir\u003dC:\\Users\\WelCome1\\AppData\\Local\\Temp\\scoped_dir3240_7866}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.100, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 1dcff908a8c7eebc6017b7cb5ba3a616\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"co-register-guest-form\"]/div/button/span/span}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat Utils.clickOnElement(Utils.java:30)\r\n\tat checkOutSteps.i_checkout_as_a_guest(checkOutSteps.java:66)\r\n\tat ✽.Given I checkout as a guest(src/test/resources/features/kurtCheckout.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "checkOutSteps.i_enter_all_the_billing_and_delivery_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "checkOutSteps.i_click_Continue_to_Payment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "checkOutSteps.i_should_be_on_the_payment_summary_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "checkOutSteps.i_select_to_pay_by_card()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "checkOutSteps.iEnterCreditCardNoWithExpiryDate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "checkOutSteps.iEnterCVCCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "checkOutSteps.i_should_see_Your_card_number_has_failed_our_validity_checks_and_appears_to_be_incorrect_Please_check_and_re_enter()"
});
formatter.result({
  "status": "skipped"
});
});