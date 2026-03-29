import{test,expect} from  '@playwright/test';
test ('locate elements', async({page})=>
{
await page.goto('https://www.demoblaze.com/index.html');
const links=await page.$$('a');//getting all the links on the page

for(const link of links)
{
    const linktext=await link.textContent();
    console.log(linktext)
}
////div[@id='tbodyid']//div//h4/a
})