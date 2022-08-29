const express = require('express');
const router = express.Router()
const authControllers = require('../controllers/auth/authController')
const auth = require('../middleware/auth')
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});

const signupSchema = Joi.object({
    username : Joi.string().min(3).max(12).required(),
    password : Joi.string().min(6).max(12).required(),
    mail : Joi.string().email().required()
})

const signinSchema = Joi.object({
    password : Joi.string().min(6).max(12).required(),
    mail : Joi.string().email().required()
})
router.post('/signup',validator.body(signupSchema), authControllers.controllers.postRegister)

router.post('/signin',validator.body(signinSchema), authControllers.controllers.postLogin)

router.get('/test',auth, (req, res) =>{
    res.send('request passed')
})
module.exports = router