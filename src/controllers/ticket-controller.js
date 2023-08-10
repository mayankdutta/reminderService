const TicketService = require("../services/email-service");

const create = async (req, res) => {
  console.log("in controller, printing body");
  console.log(req.body);
  try {
    const response = await TicketService.createNotification(req.body);
    return res.status(200).json({
      data: response,
      success: true,
      err: {},
      message: "successfully registered an email address.",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "failed to register",
    });
  }
};

module.exports = { create };
