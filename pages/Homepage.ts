import { th } from '@faker-js/faker'
import { Page, Locator } from '@playwright/test'
import { error } from 'node:console'

export class Home {

    private readonly page: Page
    private readonly myaccountlink: Locator
    private readonly registerlink: Locator
    private readonly loginlink: Locator
private readonly txtsearch: Locator
private readonly searchbtn: Locator
    constructor(page: Page) {
        this.page = page
        this.myaccountlink = this.page.locator("a[title='My Account']")
        this.registerlink = this.page.locator('a:has-text("Register")')
        this.loginlink = this.page.locator('a:has-text("Login")')
        this.txtsearch = this.page.locator('#search>input')
        this.searchbtn = this.page.locator('#search>span>button')

    }

    async homepageexist()
    {
        if(await this.page.title())
        {
            return true
        }
        return false
    }
    async clickmyacctlink() {
        try {
            await this.myaccountlink.click()
        } catch (error) {
            console.log(error)
        }
    }

    async clickregister() {
        try {
            await this.registerlink.click()
        } catch (erro) {
            console.log(error)
        }
    }
    async clicklogin() {
        try {
           await this.loginlink.click()
        } catch (error) {
            console.log(error)
        }
    }
    async searchinput(product:string)
    {
        try {
            await this.txtsearch.clear()
            await this.txtsearch.fill(product)
        } catch (error) {
             console.log(error)
        }
    }
    async clicksearchbtn()
    {
        try {
            await this.searchbtn.click()
        } catch (error) {
            console.log(error)
        }
    }
}
