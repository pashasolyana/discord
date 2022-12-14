import { DialogTitle, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import React, { useState, useEffect } from 'react'
import { validateMail } from '../../shared/utils/validator'
import InputWithLabel from '../../shared/components/InputWithLabel'
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import { connect } from 'react-redux'
import { getActions } from '../../store/actions/friendsActions';

const AddFriendDialog = ({
    isDialogOpen,
    closeDialogHandler,
    sendFriendInvitation = () => { }
}) => {
    const [mail, setMail] = useState('')
    const [isFormValid, setIsFormValid] = useState('')

    const handleSendInvitation = () => {
        sendFriendInvitation({
            targetMailAddress: mail
        }, handeCloseDialog
        )
    }

    const handeCloseDialog = () => {
        closeDialogHandler();
        setMail('')
    }

    useEffect(() => {
        setIsFormValid(validateMail(mail))
    }, [mail, setIsFormValid])
    return (
        <Dialog open={isDialogOpen} onClose={handeCloseDialog}>
            <DialogTitle>
                <Typography>Invite a Friend</Typography>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Typography>
                        Enter e-mail address of friend which you would like to invite
                    </Typography>
                </DialogContentText>
                <InputWithLabel
                    label='Mail'
                    type='text'
                    value={mail}
                    setValue={setMail}
                    placeholder='Enter mail address'
                />
            </DialogContent>
            <DialogActions>
                <CustomPrimaryButton
                    onClick={handleSendInvitation}
                    disabled={!isFormValid}
                    label='Send'
                    additionalStyles={{
                        marginLeft: '15px',
                        marginRight: '15px',
                        marginBottom: '10px'
                    }}
                />
            </DialogActions>
        </Dialog>
    )

};

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    }
}

export default connect(null, mapActionsToProps)(AddFriendDialog)