import React from 'react'
import {styled } from '@mui/system'
import FriendsListItem from './FriendsListItem';
import {connect} from 'react-redux';

const MainContainer = styled('div')({
    flexGrow : 1,
    width : '100%'
})

const FriendsList = ({friends}) =>{
    return (
        <MainContainer>
            {friends.map(i => (
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