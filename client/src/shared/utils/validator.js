export const validateLoginForm = ({mail, password }) =>{
    const isMailValid = validateMail(mail);
    const isPasswordValid = validatePassword(password);
    
    return isMailValid && isPasswordValid
}

const validatePassword = (password) =>{
    return password.length > 5 && password.length < 12
}

const validateMail = (mail) => {
    const emailPattern = /\S+@\S+\.\S+/
    return emailPattern.test(mail)
}