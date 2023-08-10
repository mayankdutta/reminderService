const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const { sendBasicEmail } = require("./services/email-service");
const cron = require('node-cron')

const app = express();

async function listenAndStartServer() {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", (req, res) => {
    res.send("yes");
  });

  app.listen(PORT, () => {
    console.log(`Server is listening @${PORT}`);
    // sendBasicEmail(
    //   "support@admin.com",
    //   "smayankdutt@gmail.com",
    //   "testing email",
    //   "hi how are you !!"
    // );
  });

  cron.schedule('*/1 * * * *', () => {
    console.log('running this task every two minute')
  })
}

listenAndStartServer();
