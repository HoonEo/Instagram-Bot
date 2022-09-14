const { Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');


const DRIVER_PATH = path.resolve(__dirname, 'chromedriver.exe');
const service = new chrome.ServiceBuilder(DRIVER_PATH);
const driver = new Builder().forBrowser('chrome').setChromeService(service).build();


const USER_INFO = {
    ID : "ministerskydev",
    PW : "@ministersky77100"
};

// elements info
const LAVEL_CLASS = "f0n8F FATdn";

(async function example(){
    // working test
    await driver.get("https://www.instagram.com/");
    let title = await driver.getTitle();
    console.log(title);
    // await driver.manage().setTimeouts({implicit : 10000});
    await driver.wait(until.elementLocated(By.name("username")), 3000);

    // Auth
    let UserIDBox = await driver.findElement(By.name("username"));
    UserIDBox.sendKeys(USER_INFO["ID"]);
    console.log("send id")
    let UserPWBox = await driver.findElement(By.name("password"));
    console.log("send pw")
    UserPWBox.sendKeys(USER_INFO["PW"]);

    let submitBtn = await driver.findElement(By.className("sqdOP  L3NKy   y3zKF     "));
    submitBtn.click();

    // wait initialized after auth
    await driver.wait(until.elementLocated(By.className("_aalv _aalx")), 10000);

    await driver.wait(until.elementLocated(By.className("_a9-- _a9_1")), 10000);
    let firstPopUp = await driver.findElements(By.className("_a9-- _a9_1"));
})();