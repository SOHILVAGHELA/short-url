const express = require("express");
const router = express.Router();
const {
  handleGenerateNewShortUrl,
  handleshortIDController,
} = require("../controllers/Url.controller");

router.post("/", handleGenerateNewShortUrl);
router.get("/:shortid", handleshortIDController);

module.exports = router;
