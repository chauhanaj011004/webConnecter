
 const authAdmin = (req,res,next)=>{
    console.log("Admin auth middleware checked!!")
    const token = "Khulja"
    const isadminAuthorized = token === "Khulja1";
    if(!isadminAuthorized)
        {
            res.send("Admin is not authorized");
        } 
    else{
        next();
    }
}

module.exports ={authAdmin}