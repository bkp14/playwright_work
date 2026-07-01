import {test as base, expect} from "@playwright/test"
import { homepage } from "../pages/homepage"
import { loginpage } from "../pages/loginpage"
import { productpage } from "../pages/productpage"
import { registerpage } from "../pages/registerpage"
type Fixtures={
    hp:homepage
    lp:loginpage
    pp:productpage
    rp:registerpage
}
export const test = base.extend<Fixtures>({
    
    hp : async ({page}, use) => {
        await use(new homepage(page))
    },
    lp:async({page},use)=>{
        await use(new loginpage(page))
    },
    pp:async({page},use)=>{
        await use (new productpage(page))
    },
    rp: async({page},use)=>{
         await use (new registerpage(page))
    }
    
})
export{expect}