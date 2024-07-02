const express = require("express");
const UrlRoute = require("./routes/Url.route");
const { connectToMongoDB } = require("./connect");
const URl = require("./model/Url.model");
const app = express();
const PORT = 5051;
app.use(express.json());
connectToMongoDB("mongodb://localhost:27017/url-db")
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((error) => console.error("MongoDB connection failed:", error));

app.use("/url", UrlRoute);

app.listen(PORT, () => {
  console.log(`server is runing on port :${PORT}`);
});
