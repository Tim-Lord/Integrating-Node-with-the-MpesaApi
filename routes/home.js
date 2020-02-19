const express = require("express");
const router = express.Router();
const auth = require("../mpesaAuthMiddleware/auth");

// Route              api/test
// Type                Get
// Access              Private
// Desc                Get Auth Token

router.get("/", auth, (req, res) => {
  res.status(200).json({ token: req.token });
});

module.exports = router;
