const express = require("express");
const logger = require("morgan");
const dotenv = require('dotenv')
const compression = require("compression");
const connectDB = require('./config/db.js')

const PORT = process.env.PORT || 3000;

dotenv.config()
const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

connectDB()

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});