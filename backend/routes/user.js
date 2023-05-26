const express = require("express");
const {
  register,
  activateAccount,
  login,
  auth,
} = require("../controllers/user");
const { authUser } = require("../middlewares/auth");

const router = express.Router();

router.post("/register", register);
router.post("/activate", authUser, activateAccount);
router.post("/login", login);

module.exports = router;