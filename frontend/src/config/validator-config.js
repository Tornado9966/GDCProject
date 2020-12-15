import { clone } from 'lodash';
import { english as errors } from 'localization/errors';
import { rules } from 'services/validator';

export const getPresets = (preset) => {
    return clone(config[preset]);
};

export const config = {
    login: [
        { rule: rules.isEmpty, options: { message: errors.empty } },
        { rule: rules.maxLength, options: { message: errors.lengthMax, max: 30 } }
    ],
    firstName: [
        { rule: rules.isWhiteSpace, options: { message: errors.whiteSpace } },
        { rule: rules.isEmpty, options: { message: errors.empty } },
        { rule: rules.minLength, options: { message: errors.length, min: 3 } },
        { rule: rules.maxLength, options: { message: errors.lengthMax, max: 15 } },
    ],
    lastName: [
        { rule: rules.isWhiteSpace, options: { message: errors.whiteSpace } },
        { rule: rules.isEmpty, options: { message: errors.empty } },
        { rule: rules.minLength, options: { message: errors.length, min: 3 } },
        { rule: rules.maxLength, options: { message: errors.lengthMax, max: 15 } },
    ],
    email: [
        { rule: rules.isEmpty, options: { message: errors.empty } },
        { rule: rules.maxLength, options: { message: errors.lengthMax, max: 25 } },
        { rule: rules.isAtIncluded, options: { message: errors.noAt } },
        { rule: rules.isDotIncluded, options: { message: errors.noDot } },
        { rule: rules.isSequence, options: { message: errors.siquence } }
    ],
    password: [
        { rule: rules.isEmpty, options: { message: errors.empty } },
        { rule: rules.isUppercase, options: { message: errors.upperCase } },
        { rule: rules.isLowercase, options: { message: errors.lowerCase } },
        { rule: rules.isNumber, options: { message: errors.number } },
        { rule: rules.minLength, options: { message: errors.length, min: 8 } },
        { rule: rules.maxLength, options: { message: errors.lengthMax, max: 15 } },
    ],
    phoneNumber: [
        { rule: rules.isEmpty, options: { message: errors.empty } },
        { rule: rules.phoneNumber, options: { message: errors.onlyNumber } },
        { rule: rules.maxLength, options: { message: errors.lengthMax, max: 15 } },
        { rule: rules.minLength, options: { message: errors.length, min: 13 } },
    ],
    previousPassword: [
        { rule: rules.isEmpty, options: { message: errors.empty } }
    ],
    guests: [
        { rule: rules.isEmpty, options: { message: errors.empty } },
        { rule: rules.isNumber, options: { message: errors.number } },
        { rule: rules.maxGuests, options: { message: errors.guests } },
    ],
    id: [
        { rule: rules.isWhiteSpace, options: { message: errors.whiteSpace } },
    ],
    time: [
        { rule: rules.isTime, options: { message: errors.isTime } },
    ]
};
