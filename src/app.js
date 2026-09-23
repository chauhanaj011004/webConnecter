const express = require("express");
const { dbConnect } = require("./config/database");
const app = express();
const User = require("./model/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    const userwa = new User({
      firstName: "Ajay1",
      lastName: "Chauhanq",
      // emailId: "aassjay@gmail211.com",
      password: "dwfdwfgewghrhg",
      gender: "Malebv",
      age: "21",
      phoneNumber: "1234567890b",
    });
    await userwa.save();
    res.send("User added sucessfuilly!");
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Can't create user please try again!",
      massageError: error.message,
    });
  }
});

app.get("/getUserOne", async (req, res) => {
  try {
    const user = req.body;
    const email = user.emailId;

    const userDetails = await User.find({ emailId: email });
    res.send(userDetails);
  } catch (e) {
    return res.status(500).json({
      success: false,
      messsage: "some thing went wrong while geting UserOne",
      errorMessage: e.message,
    });
  }
});

app.get("/allUsers", async (req, res) => {
   const userDetails= await User.find({});
   res.send(userDetails);
});

app.get("/UserById" ,async (req,res)=>{
  const userId = req.body.id
  const userDetail=await User.findById(userId);
  res.send(userDetail);
})

dbConnect()
  .then(() => {
    console.log("db connected sucessfully!");
    app.listen(777, () => {
      console.log("App is running on port number 777");
    });
  })
  .catch((err) => {
    console.log("Database cannot connected there is problem");
    console.log("Database cannot connected there is problem");
  });
