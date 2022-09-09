import axios from 'axios';
import {logout} from './shared/utils/auth'

axios.interceptors.request.use((config) => {
    const userDetails = localStorage.getItem('user');

    if(userDetails){
        const token = JSON.parse(userDetails).token;
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
}, (err) => {
    return Promise.reject(err);
})

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

export const sendFriendInvitation = async(data) => {
    try {
        return await axios.post('http://localhost:5002/api/friend-invitation/invite', data)
    } catch (exception) {
        console.log(exception)
        checkResponseCode(exception)
        return {
            error : true,
            exception,
        }
    }
}

export const acceptFriendInvitation = async(data) =>{
    try {
        return await axios.post('http://localhost:5002/api/friend-invitation/accept', data)
    } catch (exception) {
        console.log(exception)
        checkResponseCode(exception)
        return {
            error : true,
            exception,
        }
    }
}

export const rejectFriendInvitation = async(data) =>{
    try {
        return await axios.post('http://localhost:5002/api/friend-invitation/reject', data)
    } catch (exception) {
        console.log(exception)
        checkResponseCode(exception)
        return {
            error : true,
            exception,
        }
    }
}

const checkResponseCode = (exception) => {
    const responseCode = exception?.response?.status;

    if(responseCode){
        (responseCode === 401 || responseCode === 403) && logout()
    }
}