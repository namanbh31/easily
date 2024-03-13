import Applicant from "../models/applicant.model.js";
import JobModel from "../models/job.model.js";
const jobModel = new JobModel();
export default class ApplicantController{
    getApplicants(req, res){
        let appli =jobModel.getJobData(parseInt(req.params.id));
        res.render('applicants',  {"appli":appli.applicants, "jobs":"", "bg_color":"","title":'easily' });
    }
}