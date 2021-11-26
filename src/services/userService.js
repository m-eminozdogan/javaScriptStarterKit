export default class UserService{
    constructor(loggerService){
        this.users=[]
        this.loggerService=loggerService
    }
    add(user){
        console.log("kullanıcı eklendi" + user);
        this.users.push(user)
        this.loggerService.log(user)

    }
    list(){
       // console.log("kullanıcılar listelendi");
       return this.users
       
    }
    getById(id){
       // console.log("kullanıcı getirildi");
       return this.users.find(u=>u.id===id)
       
    }
}