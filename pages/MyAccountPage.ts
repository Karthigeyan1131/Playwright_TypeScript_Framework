import { Page, Locator } from "@playwright/test";
import { privateDecrypt } from "node:crypto";

export class Myaccount {

    private readonly page: Page
    private readonly myaccheader: Locator

    constructor(page: Page) {
        this.page = page
        this.myaccheader = this.page.locator('#content>h2:has-text("My Account")')

    } 

    async isaccountpage()
    {
        try {
            const accheader = await this.myaccheader.innerText()
            if(accheader.includes('My Account'))
            {
                return true
            } 
            return false
        } catch (error) {
            console.log("Account Not Shown.."+ error)
        }
    }
}