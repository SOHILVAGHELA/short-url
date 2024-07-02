const URL = require("../model/Url.model");

async function handleGenerateNewShortUrl(req, res) {
  const { nanoid } = await import("nanoid");
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "URL is required" });
  }
  const shortID = nanoid();
  try {
    await URL.create({
      shortID: shortID,
      redirectUrl: body.url,
    });
    return res.json({ id: shortID });
  } catch (error) {
    console.error("Error creating short URL:", error);
    return res.status(500).json({ error: "Failed to create short URL" });
  }
}

async function handleshortIDController(req, res) {
  const shortId = req.params.shortId;
  try {
    const entry = await URL.find({ shortId });

    if (!entry) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    res.redirect(entry.redirectUrl);
  } catch (error) {
    console.error("Error retrieving short URL:", error);
    res.status(500).json({ error: "Failed to retrieve short URL" });
  }
}

module.exports = { handleGenerateNewShortUrl, handleshortIDController };
