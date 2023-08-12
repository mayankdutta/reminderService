const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const TicketController = require("./controllers/ticket-controller");

const setupJobs = require("./utils/job");
const { createChannel } = require("./utils/messageQueue");

const app = express();

async function listenAndStartServer() {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));


  const channel = await createChannel()


  app.listen(PORT, () => {
    console.log(`Server is listening @${PORT}`);
    setupJobs();

    app.post("/api/v1/tickets", TicketController.create);

    // sendBasicEmail(
    //   "support@admin.com",
    //   "smayankdutt@gmail.com",
    //   "testing email",
    //   "hi how are you !!"
    // );
  });
}

listenAndStartServer();
