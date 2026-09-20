const express = require("express");
const {authAdmin} = require("./middleware/auth")

const app = express();
// app.use("/hello",(req,res)=>{
//     res.send("Hello hello hello!");
// });
// app.use("/hello/2",(req,res)=>{
//     res.send("2Hello hello2 hello2!")
// })
// // app.use("/", (req, res) => {
// //   res.send("hellow jia kaise ho aap ");
// // });
// app.get("/user/:userId/:name",(req,res)=>{
//     res.send({
//         firstName:"Ajay",
//         LastName : "Chauhan",
//     })
//     console.log(req.params);
// })

app.get("/admin",authAdmin,(req,res)=>{
    console.log("admin data send in console");
    res.send("User data sent through ,response!")

})
app.post("/admin",authAdmin,(req,res)=>{
    console.log("admin post some data consolq!");

    res.send("Response:Admin post data");
})

app.listen(777, () => {
  console.log("App is running on port number 777");
});
