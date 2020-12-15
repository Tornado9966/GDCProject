import CryptoJS from 'crypto-js';

export const crypting = (value) => {
    return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(value, 'secret'));
};