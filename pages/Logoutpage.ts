import { Page,Locator } from "@playwright/test"; 

export class Logout{

    private readonly page: Page 
    private readonly linklogut : Locator 
    private readonly txtlogut :Locator 
    private readonly btncontinue : Locator
    constructor(page:Page)
    {
        this.page = page 
        this.linklogut = this.page.locator('ul>li>a:has-text("Logout")')
        this.txtlogut = this.page.locator('#content>h1')
        this.btncontinue = this.page.locator('.pull-right>a')
    } 

    async clicklogout()
    {
        try {
            await this.linklogut.click()
        } catch (error) {
            console.log(error)
        }
    } 

    async logoutmessage()
    {
        try {
            await this.txtlogut.innerText() == 'Account Logout'? true : false
        } catch (error) {
            console.log(error)
        }
    }
    
    async clickcontinue()
    {
        try {
            await this.btncontinue.click()
        } catch (error) {
            console.log(error)
        }
    }
}