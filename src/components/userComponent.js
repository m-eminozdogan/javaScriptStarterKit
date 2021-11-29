import User from '../models/user.js'
import UserService from "../services/userService.js";
import { BaseLogger } from "../crossCuttingConcerns/logger/logger.js";

console.log("user komponent sayfan geldi");
let logger1=new BaseLogger();

let userService=new UserService(logger1)

/*
let logger1=new BaseLogger();

let userService=new UserService(logger1)
let user1=new User(1,"Emin","Özdoğan","Samsun")
let user2=new User(2,"Can","Kan","Kripton")

userService.add(user1)
userService.add(user2)

console.log(userService.list());

console.log(userService.getById(2));

console.log("----------------------------------------");
*/
userService.load()
/*
console.log(userService.customers);
console.log(userService.employees);*/

console.log("---------CUSTOMERS SORTED BY NAME--------");
console.log(userService.sortCustomersByFirstName());

console.log("------ERROR LOGS-------");
console.log(userService.errors);
