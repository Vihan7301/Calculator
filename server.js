const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const fileURLtoPath = require("url")
const path = require("path")
const app = express();
dotenv.config();


const PORT = 8000;
app.use(express.json())
app.use(express.static(path.resolve(__dirname,"./public")))
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname,"./public", "index.html"));
  });

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.bgYellow.white);
});