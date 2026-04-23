import { test, expect, type Locator, type Page } from '@playwright/test';

test('handling table', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const table =page.locator('#productTable');

 const columns =  table.locator('thead tr th');

 await expect(columns).toHaveCount(4);

 const rows =table.locator('tbody tr');

 await expect(rows).toHaveCount(5);

 await SelectProduct(rows,page,'Tablet ');

 await SelectProduct(rows,page,'Smartwatch');

for(let i=0;i<await rows.count();i++){ //each row 

    const row = rows.nth(i);// rows
    const tds=row.locator('td');
    for(let j=0;j<await tds.count()-1;j++){  //inner for loop 
     
console.log(await tds.nth(j).textContent());
    }
}
});
//Select the product by name 
async function SelectProduct(rows:Locator ,page:Page , name:string){
    const matchedRow= rows.filter({has:page.locator('td'),
        hasText: name,});
        await matchedRow.locator('input[type="checkbox"]').check();
}


