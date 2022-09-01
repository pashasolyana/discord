import React from 'react'
import {styled } from '@mui/system'
import FriendsListItem from './FriendsListItem';

const DUMMY_FRIEND = [
    {
        id : 1,
        username : 'Mark',
        isOnline : true
    },
    {
        id : 2,
        username : 'Anna',
        isOnline : false
    },
    {
        id : 3,
        username : 'Jane',
        isOnline : false
    },
]

const MainContainer = styled('div')({
    flexGrow : 1,
    width : '100%'
})

const FriendsList = () =>{
    return (
        <MainContainer>
            {DUMMY_FRIEND.map(i => (
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

export default FriendsList