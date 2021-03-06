require('dotenv').config();
const { navigateToWebsite,
  acceptCookies,
  loginToAccount,
  navigateToBookClassPage,
  selectDay,
  selectActivity, } = require("../helpers/testHelper");

describe('book activity', () => {
  it('navigate to ' + process.env.WEBSITE + 'and accept cookies', async () => {
    await navigateToWebsite()
    await acceptCookies()
  })

  it('login to account ' + process.env.USER_EMAIL, async () => {
    await loginToAccount()
  })

  it('navigate to Book Class Page ', async () => {
    await navigateToBookClassPage()
  })

  it('select day: ', async () => {
    await selectDay()
  })

  it('select activity', async () => {
    await selectActivity()
  })

  it('closes browser', async () => {
    driver.quit()
  })

});
