exports.signout = (req, res) => {
  console.log(req.body);
  res.json({
    message: "user Signout success",
  });
};

exports.signup = (req, res) => {
  res.json({
    message: "user signup successfully",
  });
};
