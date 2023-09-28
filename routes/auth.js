const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {
  signout,
  signup,
  signin,
  isSignedIn,
} = require("../controllers/auth");

router.get("/signout", signout);
router.post(
  "/signup",
  [
    check("name")
      .isLength({ min: 3 })
      .withMessage(
        "name must be at least 3 chars long"
      ),
    check("email")
      .isEmail()
      .withMessage("email is required"),
    check(
      "password",
      "The password must be 5+ chars long and contain a number"
    )
      .not()
      .isIn(["123456789", "password", "god"])
      .withMessage(
        "Do not use a common word as the password"
      )
      .isLength({ min: 5 })
      .matches(/\d/),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("name")
      .isLength({ min: 3 })
      .withMessage(
        "name must be at least 3 chars long"
      ),
    check("email")
      .isEmail()
      .withMessage("email is required"),
    check(
      "password",
      "The password must be 5+ chars long and contain a number"
    )
      .isLength({ min: 5 })
      .matches(/\d/),
  ],
  signin
);

router.get(
  "/testroute",
  isSignedIn,
  (req, res) => {
    res.json(req.auth);
  }
);

module.exports = router;
