import { test, expect } from '@playwright/test'

import { TestConfig } from '../testconfig'
import { Home } from '../pages/Homepage'
import { Register } from '../pages/Registrationpage'
import { RandomDataUtil } from '../utils/randomDataGenerator'

let homepage: any
let config: any
let registrationpage: any
let randomutil: any

test.beforeEach(async ({ page }) => {
    config = new TestConfig()
    homepage = new Home(page)
    registrationpage = new Register(page)
    randomutil = new RandomDataUtil()

    await page.goto(config.appUrl)
})

test.afterEach('Closing the Application', async ({ page }) => {
    await page.close()
})

test('Register new user', async ({ page }) => {

    await homepage.clickmyacctlink()
    await homepage.clickregister()
    await registrationpage.enterfirstname(RandomDataUtil.getFirstName())
    await registrationpage.enterlastname(RandomDataUtil.getlastName())
    await registrationpage.entermail(RandomDataUtil.getEmail())
    await registrationpage.enterphone(RandomDataUtil.getPhoneNumber())
    const password = RandomDataUtil.getPassword()
    await registrationpage.enterpassword(password)
    await registrationpage.enterconfirmpassword(password)
    await registrationpage.clickprivacypolicy()
    await registrationpage.clickcontinuebtn()
    const message = await registrationpage.getconfirmationmessage()
    expect(message).toContain('Your Account Has Been Created!')
})