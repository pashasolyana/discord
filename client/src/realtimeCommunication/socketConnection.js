import { io } from "socket.io-client";
import { setPendingInvitations } from "../store/actions/friendsActions";
import store from "../store/store";


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
    });

    socket.on('friends-invitations', (data) =>{
        const {pendingInvitations} = data;
        console.log('friend event came')
        console.log(pendingInvitations)

        store.dispatch(setPendingInvitations(pendingInvitations))
    })
}