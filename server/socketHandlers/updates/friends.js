const User = require('../../models/user')
const friendInvitation = require('../../models/friendInvitation')
const serverStore = require('../../serverStore');

const updateFriendsPendingInvitations = async(userId) => {
    try {
        const pendingInvitations = await friendInvitation.find({
            receiverId : userId
        }).populate('senderId', '_id username mail' )
        // find all active connections of userId
        const receiverList = serverStore.getActiveConnections(userId);
        const io = serverStore.getSocketServerInstance()
        receiverList.forEach(receiverSocketId =>{
            io.to(receiverSocketId).emit('friends-invitations', {
                pendingInvitations : pendingInvitations ? pendingInvitations : []
            })
        })


    } catch (error) {
        console.log(error)
    }
}

const updateFriends = async (userId) =>{
    try {
        const receiverList = serverStore.getActiveConnections(userId);

        if(receiverList.length > 0) {
            const user = await User.findById(userId, {_id :1, friends : 1}).populate(
                'friends', '_id username mail'
            );
            if(user){
                const friendsList = user.friends.map((i) =>{
                    return {
                        id : i._id,
                        mail : i.mail,
                        username : i.username,
                    };
                })
            }
            // get io server instance
            const io = serverStore.getSocketServerInstance();
    
            receiverList.forEach(receiverSocketId => {
                io.to(receiverSocketId).emit('friends-list', {
                    friends : friendsList ? friendsList : [],
                })
            });
        }

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    updateFriendsPendingInvitations,
    updateFriends
}