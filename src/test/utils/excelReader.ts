import * as XLSX from "xlsx";
import path from "path";

export interface RegisterData {
    password: string;
    firstName: string;
    lastName: string;
    address: string;
    state: string;
    city: string;
    zipcode: string;
    mobile: string;
}
export function readRegisterData(): RegisterData[] {
    const filePath = path.resolve(__dirname,"../test-data/RegisterData.xlsx");
    const workbook = XLSX.readFile(filePath);
    const worksheet = workbook.Sheets["Sheet1"];
    return XLSX.utils.sheet_to_json<RegisterData>(worksheet);
}

export interface ContactData {
    email: string;
    name: string;
    message: string;
}

export function readContactData(): ContactData[] {
    const filePath = path.resolve(__dirname, "../test-data/contactData.xlsx");
    const workbook = XLSX.readFile(filePath);
    const worksheet = workbook.Sheets["Sheet1"];
    return XLSX.utils.sheet_to_json<ContactData>(worksheet);
}
