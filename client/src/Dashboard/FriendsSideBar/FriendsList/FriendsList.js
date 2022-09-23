import React from 'react'
import {styled } from '@mui/system'
import FriendsListItem from './FriendsListItem';
import {connect} from 'react-redux';

const MainContainer = styled('div')({
    flexGrow : 1,
    width : '100%'
})

const checkOnlineUsers = (friends = [], onlineUsers = []) => {
    friends.forEach(i => {
        const isUserOnline = onlineUsers.find(user => user.userId === i.id)
        i.isOnline = isUserOnline ? true : false;
    })

    return friends;
}

const FriendsList = ({friends, onlineUsers}) =>{
    return (
        <MainContainer>
            {checkOnlineUsers(friends,onlineUsers).map(i => (
                <FriendsListItem 
                    username ={i.username}
                    id={i.id}
                    key={i.id}
                    isOnline={i.isOnline}
                />
            ))}
        </MainContainer>
    )

};

const mapStoreStateToProps = ({ friends }) => {
    return {
        ...friends,
    }
}

export default connect(mapStoreStateToProps)(FriendsList)