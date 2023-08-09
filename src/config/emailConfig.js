const nodemailer = require('nodemailer')
const { EMAIL_ID, EMAIL_PASS } = require('./serverConfig')

console.log('>>>>>>>>>>>>>> debugging: ', EMAIL_ID, EMAIL_PASS);

const sender = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_ID, 
    pass: EMAIL_PASS
  }
})


module.exports = sender;
