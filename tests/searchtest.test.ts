import {test,expect} from "../fixtures/basefixtures"
import searchData from "../testdata/searchData.json"
test.describe("search test", ()=>{

    test.beforeEach(async({hp})=>{
    await  hp.navigate();
    })
     for (const i of searchData){
  test(`order ${i.data}`,async({pp,hp})=>{

   
    await hp.searchproduct(i.data)
    await expect(pp.prod.first()).toHaveText(i.exp)

    
})
     }
})
