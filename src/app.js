const express= require("express");

const app = express();
app.use("/",(req,res)=>{
    res.send("hellow jia kaise ho aap ");
})

app.listen(777,()=>{
    console.log("App is running on port number 777")
});