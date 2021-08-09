const delay = require('delay');
const chrome = require('selenium-webdriver/chrome');
require('dotenv').config();
const { day_selector, activity_selector } = require("../helpers/selectors.js");
const {
  Builder,
  By,
  until
} = require('selenium-webdriver');

const defaultWait = 5000;

//WebElements
const emailField = 'email', passwordFiled = 'password', acceptCookiesButton = 'ccc-notify-accept', loginButton = '.global-nav__account-login > span', nextButton = 'next'

//Userinputs
const ui_email = process.env.USER_EMAIL, ui_passowrd = process.env.USER_PASSWORD, day_of_booking = process.env.DAY, activity = process.env.ACTIVITY, website_address = process.env.WEBSITE;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const navigateToWebsite = async () => {
  driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().addArguments('--headless', '--disable-dev-shm-usage', '--no-sandbox', 'headless'))
    .build();
  await driver.get("https://www.nuffieldhealth.com/")
  await driver.manage().window().setRect(1200, 973)
  await driver.manage().window().setRect(1200, 973)
}


const acceptCookies = async () => {
  await driver.wait(until.elementLocated(By.id(acceptCookiesButton)), defaultWait);
  await driver.findElement(By.id(acceptCookiesButton)).click()
}


const loginToAccount = async () => {
  await driver.findElement(By.css(loginButton)).click()
  await driver.wait(until.elementLocated(By.id(emailField)), defaultWait);
  await driver.findElement(By.id(emailField)).click()
  await driver.findElement(By.id(emailField)).sendKeys(ui_email)
  await driver.findElement(By.id(passwordFiled)).click()
  await driver.findElement(By.id(passwordFiled)).sendKeys(ui_passowrd)
  await driver.findElement(By.id(nextButton)).click()
  await driver.wait(until.elementLocated(By.xpath("//a[contains(text(),'Your bookings')]")), defaultWait);
}


const navigateToBookClassPage = async () => {
  await driver.executeScript("window.scrollTo(0,700)")
  await driver.wait(until.elementLocated(By.xpath("//div[2]/button")), defaultWait);
  await driver.findElement(By.xpath("//div[2]/button")).click();
  await driver.wait(until.elementLocated(By.css(".rTapNumber223005")), defaultWait);
}

const selectDay = async () => {
  await sleep(1000); // I know that sleeps() are an automation sin but this is a hack project please excuse me 🙏
  await driver.executeScript("window.scrollTo(0,500)")
  await driver.wait(until.elementLocated(By.css(day_selector[day_of_booking])), defaultWait);
  await driver.findElement(By.css(day_selector[day_of_booking])).click();
  await sleep(5000); // I know that sleeps() are the an automation sin but this is a hack project please excuse me 🙏
}

const selectActivity = async () => {
  await sleep(1000) // I know that sleeps() are the an automation sin but this is a hack project please excuse me 🙏
  await driver.executeScript("window.scrollTo(0,1000)")
  await driver.wait(until.elementLocated(By.css(activity_selector[activity])), defaultWait);
  await driver.findElement(By.css(activity_selector[activity])).click()
  await driver.navigate().refresh();
}


module.exports = {
  navigateToWebsite,
  acceptCookies,
  loginToAccount,
  navigateToBookClassPage,
  selectDay,
  selectActivity,
}
