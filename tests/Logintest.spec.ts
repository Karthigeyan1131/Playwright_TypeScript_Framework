import { test, expect } from '@playwright/test'

import { Home } from '../pages/Homepage'
import { Login } from '../pages/Loginpage'
import { TestConfig } from '../testconfig'
import { RandomDataUtil } from '../utils/randomDataGenerator'
import { Myaccount } from '../pages/MyAccountPage'
let home: any
let login: any
let config: any
let accountpage:any

test.beforeEach('Launch Application..', async ({ page }) => {

    config = new TestConfig()
    home = new Home(page)
    login = new Login(page)
    accountpage = new Myaccount(page)
    await page.goto(config.appUrl)
})

test.afterEach('Close Application', async ({ page }) => {
    await page.close()
})


test('Login to application', async () => {

    await home.clickmyacctlink()
    await home.clicklogin() 
    const verifypage = await login.isloginpage()
    expect(verifypage).toBeTruthy()
    await login.entermailid(config.email)
    await login.enterpassword(config.password)
    await login.clickloginbtn() 
    const reachedaccpage = await accountpage.isaccountpage()
    expect(reachedaccpage).toBe(true)

})