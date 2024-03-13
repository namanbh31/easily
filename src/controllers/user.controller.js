export default class UserController{
    loginPage(req, res){
    res.render('login', {"bg_color":"", "title":'login'});
    }
}