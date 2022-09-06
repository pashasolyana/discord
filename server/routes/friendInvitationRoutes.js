const express = require('express');
const router = express.Router()
const auth = require('../middleware/auth')
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const friendInvitationControllers = require('../controllers/friendInvitation/friendInvitationControllers')

const postInvitationSchema = Joi.object({
    targetMailAddress : Joi.string().email()
})

router.post('/invite', auth, validator.body(postInvitationSchema), friendInvitationControllers.postInvite)


module.exports = router