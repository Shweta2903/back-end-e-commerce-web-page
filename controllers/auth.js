const User = require("../models/user");
const {
  body,
  validationResult,
} = require("express-validator");

exports.signout = (req, res) => {
  console.log("user signout");
};

exports.signup = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ errors: errors.array()[0].msg });
  }

  const user = new User(req.body);
  console.log(req.body);
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
