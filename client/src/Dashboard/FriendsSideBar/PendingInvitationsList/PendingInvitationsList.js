import React from 'react'
import {styled } from '@mui/system'
import PendingInvitationsListItem from './PendingInvitationsListItem'

const DUMMY_INVITATIONS = [
    {
        _id : '1',
        senderId : {
            username : 'Mark',
            mail : 'dummy@mail.ru'
        }
    },
    {
        _id : '2',
        senderId : {
            username : 'Jark',
            mail : 'dumm@mail.ru'
        }
    }
]

const MainContainer = styled('div')({
    width : '100%',
    height : '22%',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    overflow : 'auto'
})

const PendingInvitationsList = () =>{
    return (
        <MainContainer>
            {DUMMY_INVITATIONS.map(i =>(
                <PendingInvitationsListItem
                    key={i._id}
                    id={i._id}
                    username={i.senderId.username}
                    mail={i.senderId.mail}
                />
            ))}
        </MainContainer>
    )

};

export default PendingInvitationsList