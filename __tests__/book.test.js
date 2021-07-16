require('dotenv').config();
const { navigateToWebsite,
  acceptCookies,
  loginToAccount,
  navigateToBookClassPage,
  selectDay,
  selectActivity, } = require("../helpers/testHelper");


describe('book courts', () => {
  const courtIds = {
    court1Id: 'c2acbb00-af02-460d-b6db-444c2f617a80',
    court2Id: '5fed3659-9c46-44c8-bd9d-1d0061e522d6'
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  it('navigate to ' + process.env.WEBSITE + 'and accept cookies', async () => {
    await navigateToWebsite()
    await acceptCookies()
  })

  it('must login to account ' + process.env.EMAIL, async () => {
    await loginToAccount()
  })

  it('navigate to Book Class Page ', async () => {
    await navigateToBookClassPage()
  })

  it('select day: ', async () => {
    await selectDay()
  })

  it('select activity', async () => {
    await selectActivity
  })

  it('closes browser', async () => {
    driver.quit()
  })

});
