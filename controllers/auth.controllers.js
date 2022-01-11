const User = require('../models/auth.model')
const expressJwt = require('express-jwt')
const_ = require('lodash')
const { OAuth2Client } = require('google-auth-library')
const fetch = require('cross-fetch');
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const { erroHandler, errorHandler } = require('../helpers/dbErrorHandling')
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.MAIL_KEY)



exports.registerController = (req, res) => {
    const { name, email, password } = req.body
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        const firstError = errors.array().map(error => error.msg)[0]
        return res.status(422).json({
            error: firstError
        })
    } else {
        User.findOne({
            email
        }).exec((err, user) => {
            if (user) {
                return res.status(400).json({
                    error: "Email is taken"
                })
            }
        })
        const token = jwt.sign(
            {
                name,
                email,
                password
            },
            process.env.JWT_ACCOUNT_ACTIVATION,
            {
                expiresIn: '15m'
            }
        )
        const emailData = {
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: 'Account activation link',
            html: `
            <h1>Please Click this link to activate your account</h1>
            <p>${process.env.CLIENT_URL}/users/activate/${token}</p>
            <hr/>
            <p>This E-mail contains sensitive information
            <p>${process.env.CLIENT_URL}</p>
            `

        }
        sgMail.send(emailData).then(sent => {
            return res.json({
                message: `E-mail has been sent to ${email}`
            })
        }).catch(err => {
            return res.status(400).json({
                error: errorHandler(err)
            })
        })
    }


}