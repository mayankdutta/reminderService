const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");

const app = express();

async function listenAndStartServer() {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", (req, res) => {
    res.send("yes");
  });

  app.listen(PORT, () => {
    console.log(`Server is listening @${PORT}`);
  });
}

listenAndStartServer();
