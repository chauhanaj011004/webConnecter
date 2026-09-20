const express = require("express");

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

app.use(
  "/user",
  (req, res, next) => {
    console.log("Hello this is  console of 1st route");
    // res.send("Response  -> 1st !!")
    next();
  },
  (req, res, next) => {
    console.log("Hello this is  console of 2nd route");
    // res.send("Response  -> 2nd !!");
    next();
  },
  (req, res) => {
    console.log("Hello this is  console of 3rdwa route");
    res.send("Response  -> 3rd !!");
  },
);

app.listen(777, () => {
  console.log("App is running on port number 777");
});
