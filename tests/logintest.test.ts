import loginData from "../testdata/loginData.json"
import {test,expect} from "../fixtures/basefixtures"

test.describe("login test",()=>{
    test.beforeEach(async({hp})=>{
        await hp.navigate()
        await hp.clickacc()
        await hp.clciklog()
    })
    test ("valid login",async({lp})=>{
        await lp.login(loginData.valid.uname,loginData.valid.pword);
    })
       test ("invalid login",async({lp})=>{
        lp.login(loginData.invalid.uname,loginData.invalid.pword);
        await expect(lp.errormsg).toHaveText("Warning: No match for E-Mail Address and/or Password.")
    })
})