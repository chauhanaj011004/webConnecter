const express = require("express");
const { dbConnect } = require("./config/database");
const app = express();
const User = require("./model/user");
const { validateSignup } = require("./utill/signupValidation");
const bcrypt = require("bcrypt");
app.use(express.json());

app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    //check email exist or not
    const user =await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Invalid Cradential!");
    }
    const isPasswordValid = await bcrypt.compare(password,user.password);

    if (isPasswordValid) {
      res.send("User login successfully!!");

    } else {
      throw new Error("Invalid Cradentail!");
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Can't create user please try again!",
      massageError: error.message,
    });
  }
});

app.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, emailId, password, gender, age, phoneNumber } =
      req.body;

    //Validate the data
    validateSignup(req);

    const hashedPassword = await bcrypt.hash(password, 11);

    const user = new User({
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
      password: hashedPassword,
      gender: gender,
      age: age,
      phoneNumber: phoneNumber,
    });

    await user.save();
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
  const userDetails = await User.find({});
  res.send(userDetails);
});

app.get("/UserById", async (req, res) => {
  const userId = req.body.id;
  const userDetail = await User.findById(userId);
  res.send(userDetail);
});
//delete
app.delete("/deleteUser", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.body.id);
    if (!user) {
      return res.status(404).send("User not found or already deleted");
    }
    res.send("User deleted sucessfully");
  } catch (error) {
    res.send("Error while Deteting user");
  }
});
//update user
app.put("/update", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.body.id,
      { firstName: "Vijay", lastName: "Singh Chauhan" },
      { returnDocument: "after" },
    );
    console.log("User Updated sucessfully");
    res.send("User  uupdated successfully Done !!");
  } catch (error) {
    res.send("eroor while updating user");
  }
});
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
