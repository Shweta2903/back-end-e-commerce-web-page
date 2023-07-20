const User = require("../models/user");
<<<<<<< HEAD
const {
  body,
  validationResult,
} = require("express-validator");
=======
>>>>>>> f050ae133463bcb4838f1984791cc0b4f3935872

exports.signout = (req, res) => {
  console.log("user signout");
};

<<<<<<< HEAD
exports.signup = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ errors: errors.array()[0].msg });
  }

  const user = new User(req.body);
  console.log(req.body);
=======
exports.signup = (req, res, next) => {
  const user = new User(req.body);
>>>>>>> f050ae133463bcb4838f1984791cc0b4f3935872
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        message: "Not able to save user in DB",
      });
    }
    res.json({
      name: user.name,
      email: user.email,
      id: user._id,
    });
  });
};
