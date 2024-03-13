import jobModel from "../models/job.model.js"
import userModel from"../models/user.model.js"
const JobModel = new jobModel();
export default class FromController{
    registerUserPage(req, res){
        res.render('postjob', {"bg_color":"","title":'easily' });
    }
    jobData(req, res){
        jobModel.addJob(req.body.job_category, req.body.designation, req.body.job_location, req.body.c_name, req.body.salary,req.body.apply_by_date, req.body.skills, req.body.total_positions, Date.now().toString(), 0);
        // console.log(req.body);
        res.redirect('/jobs');
    }
    registerUser(req, res){
        const obj = req.body;
        userModel.addUser(obj.name, obj.email, obj.password);
        res.redirect("/login");
    }
    loginUser(req, res){
        const obj = req.body;
        let ans = userModel.getUser(obj.email, obj.password);
        // console.log(ans);
        res.render('viewjobs', {"jobs":JobModel.get(),"bg_color":"body-background", "title":"easily"});
    }
    applyJob(req, res){
        const obj = req.body;
        const jobId = req.params.id;
        // const jobObj = jobModel.getJobData();
        console.log(obj);
        res.redirect('/jobs');
    }
}