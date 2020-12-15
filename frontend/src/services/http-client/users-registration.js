import { post } from './index';

export const usersRegistration = (url, data) => {
    return post(url, data);
};


