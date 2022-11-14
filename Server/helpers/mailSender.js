const nodemailer = require('nodemailer')

module.exports = (message, destinatary, subject) => {
    const transporter = nodemailer.createTransport({
        service: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
            user: process.env.EMAIL_SENDER,
            pass: process.env.EMAIL_SENDER_PASS
        }
    })

    const mail = {
        from: 'noreply@daily.com.br',
        to: destinatary,
        subject: subject,
        text: message
    }

    transporter.sendMail(mail)
}