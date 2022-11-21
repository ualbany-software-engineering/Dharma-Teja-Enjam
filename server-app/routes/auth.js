// routes/auth.js
const express = require("express");
const router = express.Router();
const {verify} = require("../middleware/verify");

const {
    SignInUser,
    SignUpUser
} = require("../controllers/auth");

/**
 * @route GET api/auth/SignIn
 * @description SignIn user
 * @access public
 */
router.post("/signin", SignInUser);

/**
 * @route GET api/auth/Signup
 * @description SignUp user
 * @access public
 */
 router.post("/signup", SignUpUser);

module.exports = router;