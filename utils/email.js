const nodemailer = require('nodemailer')

module.exports = class Email {
  constructor (user, url) {
    this.to = user.email
    this.username = user.username
    this.url = url
    this.from = 'edofus <smootok.mail@gmail.com>'
  }

  newTransport () {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    })
  }

  // Send the actual email
  async send (subject, html) {
    // 2) Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html
    }

    // 3) Create a transport and send email
    await this.newTransport().sendMail(mailOptions)
  }

  async sendPasswordReset () {
    await this.send(
      'Reset your password for edofus',
      `
        <h2>Hi ${this.username}</h2>
        <p>Follow this link to reset your edofus password for your ${this.to} account.</p>
        <div><a href="${this.url}">Reset your password</a></div>
        <p>If you didn’t ask to reset your password, please ignore this email.</p>
        <p>Thanks</p>
      `
    )
  }
}
