import {Locator, Page} from "@playwright/test";
export default class BasePage{
    constructor(protected page:Page){}
    async navigate (url:string){
        await this.page.goto(url);
    }
    async click(selector:string){
        await this.page.click(selector);
    }
    async getText(selector:string){
        return await this.page.textContent(selector);

    }}
