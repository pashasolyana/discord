import { io } from "socket.io-client";


export const connectWithSocketServer = (userDetails) => {

    const jwtToken = userDetails.token

    const socket = io("http://localhost:5002", {
        auth : {
            token : jwtToken
        }
    });

    socket.on('connect', () => {
        console.log('succes connect from client')
        console.log(socket.id)
    })

}