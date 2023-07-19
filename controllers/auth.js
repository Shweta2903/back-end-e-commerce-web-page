const User = require("../models/user");

exports.signout = (req, res) => {
  console.log("user signout");
};

exports.signup = (req, res, next) => {
  const user = new User(req.body);
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
