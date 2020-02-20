const express = require("express");
const router = express.Router();
const oAuth = require("../mpesaAuthMiddleware/oAuth");

// Route         api/c2b
// Type          Get
// Access        Private
// Desc          Get Access Token

router.get("/", oAuth, (req, res) => {
  if (!req.token) return res.status(401).send("Authorization Failed");
  res.status(200).json({ token: req.token });
});
