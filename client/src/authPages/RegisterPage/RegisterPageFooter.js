import React from 'react';
import CustomPrimamyButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';
import { useHistory } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const getFormNotValidMessage = () =>{
    return 'Username should contains between 3 and 12 symbols and password should containts between 6 and 12 symbols'
}

const getFormValidMessage = () =>{
    return 'Press to sign up'
}

const RegisterPageFooter = ({handleRegister, isFormValid}) => {
    const history = useHistory()

    const handlePushToLoginPage = () =>{
        history.push('/signin')
    }

    return(
        <>
        <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
        >
        <div>
            <CustomPrimamyButton
                label='Sign up'
                additionalStyles={{marginTop : '30px'}}
                disabled={!isFormValid}
                onClick={handleRegister}
            />
        </div>
        </Tooltip>
        <RedirectInfo 
            text=''
            redirectText='Already have an account?'
            additionalStyles={{marginTop : '5px'}}
            redirectHandler={handlePushToLoginPage}
        />
        </>
    ) 
}

export default RegisterPageFooter;