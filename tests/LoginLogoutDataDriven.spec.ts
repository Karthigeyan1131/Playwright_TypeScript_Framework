import { test, expect } from '@playwright/test'

import { TestConfig } from '../testconfig'
import { Home } from '../pages/Homepage'
import { Login } from '../pages/Loginpage'
import { Myaccount } from '../pages/MyAccountPage'
import { Logout } from '../pages/Logoutpage'
import { Dataprovider } from '../utils/dataprovider'

let config: TestConfig
let homepage: Home
let login: Login
let logout: Logout
let account: Myaccount

const jsonPath = "data/logindata.json";
const jsonTestData: any = Dataprovider.gettestDatafromJSON(jsonPath);
let loginsuccss = false
for (const data of jsonTestData) {
    test(`Login Test with JSON Data: ${data.testName} `, async ({ page }) => {
        config = new TestConfig()
        homepage = new Home(page)
        login = new Login(page)
        logout = new Logout(page)
        account = new Myaccount(page)
        await page.goto(config.appUrl)

        await homepage.clickmyacctlink()
        await homepage.clicklogin()
        await login.entermailid(data.email)
        await login.enterpassword(data.password)
        await login.clickloginbtn()

        if (data.expected === 'success') {
            const verfiyaccpage = await account.isaccountpage()
            expect(verfiyaccpage).toBe(true)
            loginsuccss = true
        }
        else {
            expect(login.getwarningmsg()).toBeTruthy()
            loginsuccss = false
        }

       if (loginsuccss == true) {
            await homepage.clickmyacctlink()
            await logout.clicklogout()
            await logout.clickcontinue()
       }

    })
}


