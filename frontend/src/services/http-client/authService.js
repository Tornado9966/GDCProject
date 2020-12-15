import { crypting } from 'services/crypting';
import { post } from './index';

export const authRoute = {
    reset: '/reset'
};

export const authService = {
    login,
    forgotPassword,
    resetPassword
};

function login(email, oldPassword) {
    const url = '/authenticate';
    const password = crypting(oldPassword);

    const data = {
        email,
        password
    };
    
    return post(url, data);
}

function forgotPassword(email) {
    const url = '/forgotPassword';
    const data = {
        email
    };
    
    return post(url, data);
}

function resetPassword(hash, password) {
    const url = '/reset';
    const newPassword = crypting(password);
    const data = {
        newPassword,
        hash
    };
    
    return post(url, data);
}