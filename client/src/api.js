import axios from 'axios';

export const apiLogin = async(data) =>{
    try {
        return await axios.post('http://localhost:5002/api/auth/signin', data)
    } catch (exception) {
        return {
            error : true,
            exception,
        }
    }
}

export const apiRegister = async(data) =>{
    try {
        return await axios.post('http://localhost:5002/api/auth/signup', data)
    } catch (exception) {
        return {
            error : true,
            exception,
        }
    }
}