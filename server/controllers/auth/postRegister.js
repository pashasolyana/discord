const User = require('../../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const postRegister = async (req, res) =>{
    try {
        const {username, mail, password } = req.body;

        //check if user exists
        const candidate = await User.exists({
            mail : mail
        })
        if(candidate){
            return res.status(409).send("Email already in use")
        }
        const encryptedPassword = await bcrypt.hash(password, 10)
        
        //save user in db

        const user = await User.create({
            username,
            mail : mail.toLowerCase(),
            password : encryptedPassword
        });

        //create JWT token

        const token = jwt.sign({
            userId : user._id,
            mail
        }, process.env.JWT_TOKEN, {
            expiresIn : '24h'
        })

        res.status(201).json({
            userDetail : {
                mail : user.mail,
                token : token,
                username : user.username,
            },
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send("Please try again")
    }
}

module.exports = postRegister