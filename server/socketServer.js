const authSocket = require('./middleware/authSocket')
const newConnectionHandler = require('./socketHandlers/newConnectionHandler')
const disconectHandler = require('./socketHandlers/disconectHandler')
const serverStore = require('./serverStore')

const registerSocketServer = (server) => {
    const io = require('socket.io')(server, {
        cors : {
            origin : '*',
            methods : ['GET', 'POST'],
        },
    })

    serverStore.setSocketServerInstance(io)

    io.use((socket, next) => {
        authSocket(socket, next);
    })

    const emitOnlineUsers = () =>{ 
        const onlineUsers = serverStore.getOnlineUsers();
        io.emit('online-users', {onlineUsers});
    }

    io.on('connection', (socket) =>{
        console.log('user connected')
        console.log(socket.id)
        newConnectionHandler(socket, io)
        emitOnlineUsers();

        socket.on('disconnect', () =>{
            disconectHandler(socket)
        })
    })

    setInterval(() =>{ 
        emitOnlineUsers();
    }, [1000 * 10])
};

module.exports = {
    registerSocketServer,
};