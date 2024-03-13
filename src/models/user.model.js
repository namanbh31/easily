export default class Users{
    constructor(_id,_name, _email, _password){
        this.name=_name;
        this.email = _email;
        this.password = _password;
        this.id =_id;
    }
    static getUser(e_mail, pass){
        let index = users.findIndex((user)=>{
            if(user.email === e_mail){
                if(user.password === pass){
                    return true;
                }
                return false;
            }  
            return false;
        })
        if(index!=-1){
            return users[index];
        }
        return -1;
    }
    static addUser(n_ame, e_mail, pass){
        users.push(new Users(users.length+1, n_ame, e_mail, pass));
    }
}
var users = [new Users(1, "naman", "honeysingh@gmail.com", "honey"), new Users(2, "Pallav", "honeysingh1@gmail.com", "honey")];