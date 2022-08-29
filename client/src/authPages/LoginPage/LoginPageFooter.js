import React from 'react';
import CustomPrimamyButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';
import { useHistory } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const getFormNotValidMessage = () =>{
    return 'Enter correct e-mail address and password should contains between 6 and 12 symbols'
}

const getFormValidMessage = () =>{
    return 'Press to sign in'
}

const LoginPageFooter = ({handleLogin, isFormValid}) => {
    const history = useHistory()

    const handlePushToRegisterPage = () =>{
        history.push('/signup')
    }

    return(
        <>
        <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
        >
        <div>
            <CustomPrimamyButton
                label='Sign in'
                additionalStyles={{marginTop : '30px'}}
                disabled={!isFormValid}
                onClick={handleLogin}
            />
        </div>
        </Tooltip>
        <RedirectInfo 
            text='Need an account? '
            redirectText='Create an account'
            additionalStyles={{marginTop : '5px'}}
            redirectHandler={handlePushToRegisterPage}
        />
        </>
    ) 
}

export default LoginPageFooter;