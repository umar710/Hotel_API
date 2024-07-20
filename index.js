const express = require("express");
const db = require("./db");

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

require("dotenv").config();
const PORT = process.env.PORT || 3000;

const router = require("./routes/hotelRoutes");
app.use("/hotel", router);

app.listen(PORT, () => {
  console.log("Server Runing on 3000");
});
