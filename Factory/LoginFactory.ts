import { faker } from "@faker-js/faker";
export class LoginFactory{
    static invalidUser(){
        return{
             uname: faker.internet.email(),
            pword: faker.internet.password()
        }
    }
}