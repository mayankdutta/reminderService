const sender = require("../config/emailConfig.js");
const TicketRepository = require("../repository/ticket-repository.js");

const ticketRepository = new TicketRepository();

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
  try {
    const response = await sender.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: mailSubject,
      text: mailBody,
    });

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const fetchPendingEmails = async (timeStamp) => {
  try {
    const response = await ticketRepository.get({ status: "PENDING" });
    return response;
  } catch (error) {
    console.log(error);
    throw { error };
  }
};

const createNotification = async (data) => {
  try {
    const response = await ticketRepository.create(data);
    return response;
  } catch (error) {
    console.log(error);
    throw { error };
  }
};

const updateTicket = async (ticketId, data) => {
  try {
    return await ticketRepository.update(ticketId, data);
  } catch (error) {
    console.log(error);
    throw { error };
  }
};

const testingQueue = async (data) => {
  console.log("inside service layer, passed data: ", data);
};

const subscribedEvents = async (payload) => {
  let service = payload.service;
  let data = payload.data;

  console.log("data: ", data);

  switch (service) {
    case "CREATE_TICKET":
      await createNotification(data);
      break;
    case "SEND_BASIC_MAIL":
      await sendBasicEmail(data);
      break;
    default:
      console.log("NO VALID EVENT RECEIVED");
      break;
  }
};

module.exports = {
  sendBasicEmail,
  fetchPendingEmails,
  createNotification,
  updateTicket,
  testingQueue,
  subscribedEvents,
};
