const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT | 3004,
  EMAIL_ID: process.env.EMAIL_ID,
  EMAIL_PASS: process.env.EMAIL_PASS

};
