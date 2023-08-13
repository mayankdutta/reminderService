const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT | 3004,
  EMAIL_ID: process.env.EMAIL_ID,
  EMAIL_PASS: process.env.EMAIL_PASS,

  EXCHANGE_NAME: "AIRLINE_BOOKING",
  REMINDER_BINDING_KEY: "REMINDER_SERVICE",
  MESSAGE_BROKER_URL: "amqp://localhost",
  QUEUE_NAME: "REMINDER_QUEUE",
};
