const { Op } = require("sequelize");
const { NotificationTicket } = require("../models/");

class TicketRepository {
  async getAll() {
    try {
      const tickets = await NotificationTicket.findAll();
      return tickets;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }

  async create(data) {
    try {
      const ticket = await NotificationTicket.create(data);
      return ticket;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }

  async get(filter) {
    try {
      const ticket = await NotificationTicket.findAll({
        where: {
          [Op.and]: {
            status: filter.status,
            notificationTime: {
              [Op.lte]: new Date(),
            },
          },
        },
      });
      return ticket;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }

  async update(ticketId, data) {
    try {
      const ticket = await NotificationTicket.findByPk(ticketId);
      console.log(">>>>>>>>>>>>>>>>>> debugging: ", ticket);
      if (data.status) ticket.status = data.status;
      await ticket.save();
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }
}

module.exports = TicketRepository;
