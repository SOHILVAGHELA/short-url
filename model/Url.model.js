const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
  shortID: { type: String, required: true },
  redirectUrl: { type: String, required: true },
});

const URL = mongoose.model("URL", UrlSchema);

module.exports = URL;
