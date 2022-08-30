export const validateLoginForm = ({mail, password }) =>{
    const isMailValid = validateMail(mail);
    const isPasswordValid = validatePassword(password);
    
    return isMailValid && isPasswordValid
}

export const validateRegisterForm = ({mail, password, username}) => {
    return (
        validateMail(mail) && validatePassword(password) && validateUsername(username)
    ) 
}

const validatePassword = (password) =>{
    return password.length > 5 && password.length < 12
}

const validateMail = (mail) => {
    const emailPattern = /\S+@\S+\.\S+/
    return emailPattern.test(mail)
}

const validateUsername = (username) => {
    return username.length > 2 && username.length < 13
}