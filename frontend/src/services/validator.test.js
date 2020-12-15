import {rules} from './validator';

describe('validator', () => {
    const expected = {
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
        phoneNumber: 'phoneNumber'
    };

    it('matches if the actual object contains expected key: value pairs', () => {
        expect(rules).toEqual(expect.objectContaining(expected));
    });
});