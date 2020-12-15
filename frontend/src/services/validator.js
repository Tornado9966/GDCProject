import * as ruleFunc from './validatorRuls';

export const rules = {
    isEmpty: 'isEmpty',
    isWhiteSpace: 'isWhiteSpace',
    isAtIncluded: 'isAtIncluded',
    isDotIncluded: 'isDotIncluded',
    minLength: 'minLength',
    maxLength: 'maxLength',
    isSequence: 'isSequence',
    isUppercase: 'isUppercase',
    isLowercase: 'isLowercase',
    isNumber: 'isNumber',
    phoneNumber: 'phoneNumber',
    maxGuests: 'maxGuests',
    minHours: 'minHours',
    isTime: 'isTime'
};

export function validate(value, configRules) {
    for (let { rule, options } of configRules) {
        const message = ruleFunc[rule](value, options);
        if (message) return message;
    }
    return false;
}
