const User = require("../models/user");

exports.getUserById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No user found in DB",
      });
    }
    req.profile = user;
    next();
  });
};

exports.getUser = (req, res) => {
  console.log(req.profile);
  req.profile.salt = undefined;
  req.profile.secure_password = undefined;
  req.profile.updatedAt = undefined;
  req.profile.createdAt = undefined;

  return res.json(req.profile);
};

exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { new: true, userFindAndModify: false },
    (err, user) => {
      if (err) {
        return res.status(400).json({
          error:
            "You are not authorized to update the information",
        });
      }
      user.salt = undefined;
      user.secure_password = undefined;
      res.json(user);
    }
  );
};
