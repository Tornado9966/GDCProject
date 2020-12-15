export const isEmpty = (value, options) => {
    return !value ? options.message : false;
};
export const isWhiteSpace = (value, options) => {
    return (/\s/.test(value)) ? options.message : false;
};
export const isAtIncluded = (value, options) => {
    return !value.includes('@') ? options.message : false;
};
export const isDotIncluded = (value, options) => {
    return !value.includes('.') ? options.message : false;
};
export const minLength = (value, options) => {
    return !(value.length >= options.min) ? options.message + ' ' + options.min + ' chars' : false;
};
export const maxLength = (value, options) => {
    return !(value.length <= options.max) ? options.message + ' ' + options.max + ' chars' : false;
};
export const isSequence = (value, options) => {
    const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !(email.test(value)) ? options.message : false;
};
export const isUppercase = (value, options) => {
    return !(/[A-Z]/.test(value)) ? options.message : false;
};
export const isLowercase = (value, options) => {
    return !(/[a-z]/.test(value)) ? options.message : false;
};
export const isNumber = (value, options) => {
    return !(/[0-9]/.test(value)) ? options.message : false;
};
export const phoneNumber = (value, options) => {
    return !(/^[+]\d+$/.test(value)) ? options.message : false;
};
export const maxGuests = (value, options) => {
    return !(value >0 && value <= 8) ? options.message : false;
};
export const isTime = (value, options) => {
    return !(/^([0[0-9]|1[0-9]|2[0-3]|[1-9]):[0-5][0-9]$/).test(value) ? options.message : false;
};
