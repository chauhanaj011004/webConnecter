const validator = require("validator");

const validateSignup = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("Require first name and last name");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Email is not valid!!");
  } else if (!validator.isStrongPassword(password))
  {
    console.log(validator.isStrongPassword(password))
    throw new Error("Password is too weak give strong one!!")
  }
};

module.exports = { validateSignup };
