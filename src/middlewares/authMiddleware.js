function authMiddleware(req,res,next){
    console.log(req.session)
    if(!req.session.userLogged){
        console.log("esta")
        return res.redirect("/users/login");
    }
    next();
}
module.exports=authMiddleware