const mongoose = require("mongoose");
require("dotenv").config();

//const MONGOOSE_LOCAL_URL = process.env.DB_LOCAL_URL;
const mongooseURL = process.env.DATABASE_SERVER_URL;

const db = async () => {
  try {
    await mongoose.connect(mongooseURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected..");
  } catch (e) {
    console.log(e);
  }
};

db(mongoose.connection);
module.exports = db;
