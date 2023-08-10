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

module.exports = {
  sendBasicEmail,
  fetchPendingEmails,
  createNotification,
  updateTicket,
};
