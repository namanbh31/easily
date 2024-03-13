import Applicant from "./applicant.model.js";
export default class JobModel{
    constructor(_id, _category, _designtion, _location, _companyName, _salary, _applyby, _skills, _openings, _jobPosted, _applicants){
        this.id=_id;
        this.jobCategory = _category;
        this.jobDesignation = _designtion;
        this.jobLocation = _location;
        this.companyName = _companyName;
        this.salary = _salary;
        this.applyBy = _applyby; 
        this.skillsRequired = _skills;
        this.openings = _openings;
        this.jobPosted = _jobPosted;
        this.applicants = _applicants;
    }
    get(){
        return jobs;
    }
    addJob( _category, _designtion, _location, _companyName, _salary, _applyby, _skills, _openings, _jobPosted, _applicants){
        jobs.push(new JobModel(jobs.length+1,  _category, _designtion, _location, _companyName, _salary, _applyby, _skills, _openings, _jobPosted, _applicants));
    }
    getJobData(_id){
        let index = jobs.findIndex((j)=>j.id === _id);
        return jobs[index];
    }
    addApplicant(){
        
    }
}
var jobs = [new JobModel(1, "Tech", "HR", "Jind HR IND", "Thunder Enterprises", 
            "14-15", "2017-06-01", ['angular', 'node'], 5, "12-12-12-12:00:00", [new Applicant(1, "Honey Singh", "honeysingh@gmail.com", "9999999999", "./"), new Applicant(2, "Honey Singh", "honeysingh@gmail.com", "9999999999", "./")]),
        new JobModel(2, "Tech", "HR", "Gurgoan HR IND Remote", "Thunder Enterprises", 
        "14-15", "2017-06-01", ['web framework', 'deep learning'], 5, "12-12-12-12:00:00", [new Applicant(1, "Honey Singh", "honeysingh@gmail.com", "9999999999", "./"), new Applicant(2, "Alfaz Singh", "honeysingh@gmail.com", "9999999999", "./")]),
        ];
