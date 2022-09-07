const friendInvitation = require("../../models/friendInvitation");
const User = require("../../models/user");
const friendsUpdates = require('../../socketHandlers/updates/friends')

const postInvite = async (req, res) => {
    const { targetMailAddress } = req.body;

    const { userId, mail } = req.user;

    // check if friend that we would like to invite is not user
    if(mail.toLowerCase() === targetMailAddress.toLowerCase()) {
        return res.status(409).send('Sorry, you cant invite urself')
    }

    const targetUser = await User.findOne({
        mail : targetMailAddress.toLowerCase()
    })

    if(!targetUser){
        return res.status(404).send(`Friend of ${targetMailAddress} has not been found`)
    }

    // check if invitation has been already sent
    const invitationAlreadyReceived = await friendInvitation.findOne({
        senderId : userId,
        receiverId : targetUser._id
    })
    if(invitationAlreadyReceived){
        return res.status(409).send('Invitation has been already sent')
    }

    // check if user which we would like to invite is already our friend
    const usersAlreadyFriends = targetUser.friends.find(
        (friendId) => friendId.toString() === userId.toString()
    )

    if(usersAlreadyFriends){
        return res.status(409).send('Friend already added.')
    }

    // create new invitation in database
    const newInvitation = await friendInvitation.create({
        senderId : userId,
        receiverId : targetUser._id
    })
    // send pending invitations update to specific user
    friendsUpdates.updateFriendsPendingInvitations(targetUser._id.toString())
    return res.status(201).send('Invitation has been sent')
    
}

module.exports = postInvite