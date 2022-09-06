import { friendActions } from "../actions/friendsActions"

const initState = {
    friends : [],
    pendingFriendsInvitations : [],
    onlineUsers : []
}

const reducer = (state = initState, action) =>{
    switch(action.type) {
        case friendActions.SET_PENDING_FRIENDS_INVITATIONS: 
            return {
                ...state,
                pendingFriendsInvitations : action.pendingFriendsInvitations,
            }
        case friendActions.SET_FRIENDS:
            return {
                ...state,
                friends : action.friends
            }
        case friendActions.SET_ONLINE_USERS:
            return {
                ...state,
                onlineUsers : action.onlineUsers
            }
        default:
            return state;
    }
}

export default reducer