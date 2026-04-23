import {test} from '@playwright/test';
test('Api request',async({request})=>{
  const resp1= await request.get('https://api.demoblaze.com/entries')  
 console.log(await resp1.json());
})