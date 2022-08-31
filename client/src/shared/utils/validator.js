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

export const validatePassword = (password) =>{
    return password.length > 5 && password.length < 12
}

export const validateMail = (mail) => {
    const emailPattern = /\S+@\S+\.\S+/
    return emailPattern.test(mail)
}

export const validateUsername = (username) => {
    return username.length > 2 && username.length < 13
}