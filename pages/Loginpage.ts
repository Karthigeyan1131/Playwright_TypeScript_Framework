import { Page,Locator } from "@playwright/test"; 
import { asyncWrapProviders } from "node:async_hooks";

export class Login{
 
    private readonly page:Page
    private readonly logincustomertext : Locator 
    private readonly txtemail : Locator
    private readonly txtpassword : Locator 
    private readonly btnlogin : Locator 
    private readonly messagewarning : Locator

    constructor(page:Page)
    {
        this.page = page 
        this.logincustomertext = this.page.locator("div>h2:has-text('Returning Customer')")
        this.txtemail = this.page.locator('#input-email')
        this.txtpassword = this.page.locator('#input-password')
        this.btnlogin = this.page.locator("input[type='submit']")
        this.messagewarning = this.page.locator("#account-login>div.alert")
    }

    async isloginpage()
    {
        const txt = await this.logincustomertext.innerText()
        if(txt === 'Returning Customer')
        {
           return true
        }
        return false
    } 
 
async entermailid(email:string)
{
    try {
        await this.txtemail.clear()
        await this.txtemail.fill(email)
    } catch (error) {
        console.log(error)
    }
} 

async enterpassword(password:string)
{
    try {
        await this.txtpassword.clear()
        await this.txtpassword.fill(password)
    } catch (error) {
        console.log(error)
    }
} 
async clickloginbtn()
{
    try {
        await this.btnlogin.click()
    } catch (error) {
        console.log(error)
    }
}

async getwarningmsg()
{
try {
  (await this.messagewarning.innerText()).
  includes('Warning: No match for E-Mail Address and/or Password.') ? true : false
} catch (error) {
    console.log(error)
}
}
}