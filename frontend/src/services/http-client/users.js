import { get, put } from './index';

export function getUserInfo() {
    return get('/users');
}

export function updateUserInfo(data) {
    return put('/users', {data});
}