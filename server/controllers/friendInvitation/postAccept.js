const friendInvitation = require("../../models/friendInvitation");
const User = require("../../models/user");
const friendsUpdate = require('../../socketHandlers/updates/friends')

const postAccept = async (req, res) =>{
    try {
        const { id } = req.body;
        const invitation = await friendInvitation.findById({_id : id})

        if(!invitation){
            return res.status(401).send('Error occured.Please try again')
        }

        const {senderId , receiverId} = invitation;
        // add friends to both users
        const senderUser = await User.findById({_id : senderId})
        senderUser.friends = [...senderUser.friends, receiverId]

        const receiverUser = await User.findById({_id : receiverId})
        receiverUser.friends = [...receiverUser.friends, senderId]

        await senderUser.save();
        await receiverUser.save();

        //delete invitation

        await friendInvitation.findByIdAndDelete({_id : id})

        // update list of the friends

        //update list of friends pending invitations
        friendsUpdate.updateFriendsPendingInvitations(receiverId.toString())

        return res.status(200).send('Friend succesfully added')
    } catch (error) {
        console.log(error);
        return res.status(500).send('Something error')
    }
}

module.exports = postAccept