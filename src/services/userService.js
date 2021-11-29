import { users } from "../data/users.js";
import DataError from "../models/dataError.js";

export default class UserService {
    constructor(loggerService) {
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }
    load() {
        for (const user of users) {
            // console.log(user);
            switch (user.type) {
                case "customer":
                    if (!this.checkCustomerValidityForErrors(user)) {
                        this.customers.push(user)
                    }
                    break;
                case "employee":
                    if (!this.checkEmployeeValidityForErrors(user)) {
                        this.employees.push(user)
                    }
                    break;
                default:
                    this.errors.push(new DataError("wrong user type detected", user))
                    break;
            }
        }

        console.log("----------------employees---------------");
        console.log(this.employees)
        console.log("----------------customers---------------");
        console.log(this.customers)

    }
    checkCustomerValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city".split(" ")
        let hasError = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasError = true
                this.errors.push(new DataError(`please fill required fields -> ${field}`, user))
            }
        }
        if (Number.isNaN(Number.parseInt(user.age))) {
            hasError = true
            this.errors.push(new DataError("please type a number for age field", user))
        }
        return hasError
    }
    checkEmployeeValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let hasError = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasError = true
                this.errors.push(new DataError(`please fill required fields -> ${field}`, user))
            }
        }
        if (Number.isNaN(Number.parseInt(user.age))) {
            hasError = true
            this.errors.push(new DataError("please type a number for age field", user))
        }
        return hasError
    }

    ///////NOT A NUMBER TEKRARLAMASI VAR + REQUIREDFIELDS VE HASERROR DA TEKRARLAMA VAR
    ///////EMPLOYEE VE CUSTOMER İÇİN AYRI EKLEME FONKSİYONLARI YAZILABİLİR
    ///////AYNI ID Lİ KULLANICI OLUP OLMADIĞI KONTROLÜ YAPILABİLİR

    add(user) {
        switch (user.type) {
            case "customer":
                this.customers.push(user)
                break;
            case "employee":
                this.employees.push(user)
                break;
            default:
                this.errors.push(new DataError("wrong user type", user))
                break;
        }
        console.log("user has added" + user);
        this.loggerService.log(user)
    }
  /*   listCustomers() {
        return this.customers
    }
    listEmployees() {
        return this.employees
    }*/
    sortCustomersByFirstName() {
        return this.customers.sort((c1, c2) => {
            if (c1.firstName > c2.firstName) {
                return 1
            }
            else if (c1.firstName === c2.firstName) {
                return 0
            }
            else { return -1 }

        })

    }

    getById(id) {
        // console.log("kullanıcı getirildi");
        // return this.users.find(u=>u.id===id)

    }
}