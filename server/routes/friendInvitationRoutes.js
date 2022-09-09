const express = require('express');
const router = express.Router()
const auth = require('../middleware/auth')
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const friendInvitationControllers = require('../controllers/friendInvitation/friendInvitationControllers')

const postInvitationSchema = Joi.object({
    targetMailAddress : Joi.string().email()
});

const inviteDecisionSchema = Joi.object({
    id : Joi.string().required(),
})

router.post('/invite', auth, validator.body(postInvitationSchema), friendInvitationControllers.postInvite)
router.post('/accept', auth, validator.body(inviteDecisionSchema), friendInvitationControllers.postAccept)
router.post('/reject', auth, validator.body(inviteDecisionSchema), friendInvitationControllers.postReject)

module.exports = router