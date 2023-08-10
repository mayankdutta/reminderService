const cron = require("node-cron");
const EmailService = require("../services/email-service");
const sender = require("../config/emailConfig");

const setupJobs = () => {
  console.log("IN SETUP JOBS");

  cron.schedule("*/2 * * * *", async () => {
    console.log("REQUSTING");
    const response = await EmailService.fetchPendingEmails("abc");

    response.forEach((email) => {
      const response = sender.sendMail(
        {
          to: email.recepientEmail,
          subject: email.subject,
          text: email.content,
        },
        async (err, data) => {
          if (err) console.log(err);
          else {
            console.log(data);
            await EmailService.updateTicket(email.id, { status: "SUCCESS" });
          }
        }
      );

      console.log("RESPONSE: ", response);
    });
  });
};

module.exports = setupJobs;
