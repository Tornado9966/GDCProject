import { crypting } from 'services/crypting';
import { updateUserInfo } from 'services/http-client/users';

export const updatePassword = (password, prevPassword) => {
    const cryptPassword = crypting(password);
    const cryptPrevPassword = crypting(prevPassword);
    const data = {
        password: cryptPassword, 
        prevPassword: cryptPrevPassword
    };
    return updateUserInfo(data);
};
