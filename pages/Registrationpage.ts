import { Page, Locator } from "@playwright/test";

export class Register {

    private readonly page: Page
    private readonly txtfirstname: Locator
    private readonly txtlastname: Locator
    private readonly txtemail: Locator
    private readonly txtphone : Locator
    private readonly txtpassword: Locator
    private readonly txtconfirmpassword: Locator
    private readonly privacypolicy: Locator
    private readonly continuebtn: Locator
    private readonly confirmationmessage: Locator

    constructor(page: Page) {
        this.page = page
        this.txtfirstname = this.page.locator('#input-firstname')
        this.txtlastname = this.page.locator('#input-lastname')
        this.txtemail = this.page.locator('#input-email')
        this.txtphone = this.page.locator('#input-telephone')
        this.txtpassword = this.page.locator('#input-password')
        this.txtconfirmpassword = this.page.locator('#input-confirm')
        this.privacypolicy = this.page.locator('input[name="agree"]')
        this.continuebtn = this.page.locator('div>input[value="Continue"]')
        this.confirmationmessage = this.page.locator('#content>h1')
    }


    async enterfirstname(firstname: string) {
        try {
            await this.txtfirstname.clear()
            await this.txtfirstname.fill(firstname)
        } catch (error) {
            console.log(error)
        }
    }

    async enterlastname(lastname: string) {
        try {
            await this.txtlastname.clear()
            await this.txtlastname.fill(lastname)
        } catch (error) {
            console.log(error)
        }
    }

    async entermail(mailid: string) {
        try {
            await this.txtemail.clear()
            await this.txtemail.fill(mailid)
        } catch (error) {
            console.log(error)
        }
    }
    async enterphone(phone: string) {
        try {
            await this.txtphone.clear()
            await this.txtphone.fill(phone)
        } catch (error) {
            console.log(error)
        }
    }
    async enterpassword(password: string) {
        try {
            await this.txtpassword.clear()
            await this.txtpassword.fill(password)
        } catch (error) {
            console.log(error)
        }
    }
      async enterconfirmpassword(password: string) {
        try {
            await this.txtconfirmpassword.clear()
            await this.txtconfirmpassword.fill(password)
        } catch (error) {
            console.log(error)
        }
    }
    async clickprivacypolicy() {
        try {
            await this.privacypolicy.check()
        } catch (error) {
            console.log(error)
        }
    }
    async clickcontinuebtn() {
        try {
            await this.continuebtn.click()
        } catch (error) {
            console.log(error)
        }
    }
    async getconfirmationmessage() :Promise<string> {
        return await this.confirmationmessage.innerText()
    }

    async completeregistration(userdata: {
        fistname: string
        lastname: string
        email: string
        password: string
    }) {
        await this.enterfirstname(userdata.fistname)
        await this.enterlastname(userdata.lastname)
        await this.entermail(userdata.email)
        await this.enterpassword(userdata.password)
        await this.clickprivacypolicy()
        await this.clickcontinuebtn()
        await this.getconfirmationmessage()
    }
}