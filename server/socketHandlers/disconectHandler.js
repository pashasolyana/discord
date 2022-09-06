const serverStore = require('../serverStore')

const disconectHandler = (socket) =>{
    serverStore.removeConnectedUser(socket.id);
}

module.exports = disconectHandler;