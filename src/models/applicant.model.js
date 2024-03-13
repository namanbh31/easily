export default class Applicant{
    constructor(_id, _name, _email, _contact, _resumePath){
        this.id =_id;
        this.name = _name;
        this.email = _email;
        this.contact=  _contact;
        this.resumePath = _resumePath;
    }   
    static get(){
        return applicants;
    }

    static addApplicant(_id, _name, _email, _contact, _resumePath){
        applicants.push(new Applicant(_id, _name, _email, _contact, _resumePath));
    }
}
var applicants = [new Applicant(1, "Honey Singh", "honeysingh@gmail.com", "9999999999", "./"), new Applicant(2, "Honey Singh", "honeysingh@gmail.com", "9999999999", "./")];