import fs from "fs"
import {parse} from "csv-parse/sync"

interface registerData{
    testname:string
firstname:string
lastname:string
mobile:string
email:string
password:string
retype:string

}
export function readregisterdata(): registerData[]{
const filecontent = fs.readFileSync("testdata/registerData.csv","utf-8")
return  parse(filecontent,{trim:true,columns:true,skip_empty_lines:true}) as  registerData[]
}