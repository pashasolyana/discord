const friendInvitation = require("../../models/friendInvitation");
const friendsUpdate = require('../../socketHandlers/updates/friends')

const postReject = async (req, res) =>{
    try {
        const {id} = req.body;
        const {userId} = req.user;

        // remove that invitation

        const invitationExists = await friendInvitation.exists({
            _id: id
        })
        if(invitationExists){
            await friendInvitation.findByIdAndDelete({_id : id})
        }
        // update pending invitations
        friendsUpdate.updateFriendsPendingInvitations(userId);
        return res.status(200).send('Succesfully rejected')
    } catch (error) {
        console.log(error);
        return res.status(500).send('Something error')
    }
}

module.exports = postReject