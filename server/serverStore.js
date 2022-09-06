const connectedUsers = new Map()

const addNewConnectedUser = ({socketId, userId }) =>{
    connectedUsers.set(socketId, {userId})
    console.log('new user')
    console.log(connectedUsers)
}

const removeConnectedUser = (socketId) =>{
    if(connectedUsers.has(socketId)){
        connectedUsers.delete(socketId)
        console.log('delete')
        console.log(connectedUsers)
    }
}

module.exports = {
    addNewConnectedUser,
    removeConnectedUser
}