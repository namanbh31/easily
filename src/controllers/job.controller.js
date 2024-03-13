import jobModel from '../models/job.model.js';
const JobModel = new jobModel();
export default class JobController{
    getAllJobs(req, res){
        res.render('viewjobs', {"jobs":JobModel.get(),"bg_color":"body-background", "title":"easily"});
    }
    getJob(req, res){
        let jobid = parseInt(req.params.id);
        // let job = jobModel.getJobData(jobid);
        // console.log(jobModel.getJobData(jobid));
        this.getJobData(1, JobModel.get());
        res.render('jobdetails', {"job":this.getJobData(jobid, JobModel.get()),"bg_color":"", "title":"easily"});
    }
    getJobData(_id, jobs){
        let index = jobs.findIndex((j)=>j.id === _id);
        console.log(index);
        return jobs[index];
    }
    deleteJob(req, res){
        let jobid = parseInt(req.params.id);
        JobModel.getJobData(jobid);
        
    }
}