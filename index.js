import express from 'express'
import path from 'path'
import expressEjsLayouts from 'express-ejs-layouts';
import JobController from './src/controllers/job.controller.js';
import FormComtroller from "./src/controllers/form.controller.js"
import ApplicantController from './src/controllers/applicant.controller.js';
import UserController from './src/controllers/user.controller.js';
const server = express();
server.set('view engine', 'ejs');
server.set('views' ,path.join(path.resolve(), 'src', 'views'));
server.use(expressEjsLayouts);
server.use(express.static('./src/assets'));
server.use(express.urlencoded({"extended":false}));
const jobController = new JobController();
const formController = new FormComtroller();
const applicantController = new ApplicantController();
const userController = new UserController();
server.get('/', (req, res)=>{
    res.render('home', {'bg_color':'body-background', 'title':'easily'});
});
server.get('/job/:id', jobController.getJob.bind(jobController));   
server.get('/login', userController.loginPage);
server.post('/login', formController.loginUser);
server.get('/postjob', formController.registerUserPage);
server.post('/register', formController.registerUser);
server.post('/postjob', formController.jobData)
server.get('/jobs', jobController.getAllJobs);
server.get('/job/:id/applicants', applicantController.getApplicants);
server.post('/job/:id', formController.applyJob);

export default server;
