import { readregisterdata } from "../utilities/csvreader";
import {test , expect} from "../fixtures/basefixtures"
 const data = readregisterdata()

test.describe("register", ()=>{
   test.beforeEach(async({hp})=>{
  await hp.navigate()
  await hp.clickacc()
  await hp.register()
   })
for (const i of data){
test(i.testname, async({hp,rp,page})=>{
     await rp.register(i.firstname,i.lastname,i.email,i.mobile,i.password,i.retype)
      expect(await page.url()).toContain("success")
})
}
   
})