import * as ruleFunc from './validatorRuls';

test('is empty', () => {
    expect(ruleFunc.isEmpty('hello')).toBe(false);
});

test('is white space', () => {
    expect(ruleFunc.isWhiteSpace('Hello')).toBe(false);
});

test('is contain @', () => {
    expect(ruleFunc.isAtIncluded('@')).toBe(false);
});

test('is contain a dot', () => {
    expect(ruleFunc.isDotIncluded('.')).toBe(false);
});

test('is uppercase', () => {
    expect(ruleFunc.isUppercase('A')).toBe(false);
});

test('is lowecase', () => {
    expect(ruleFunc.isLowercase('dfdf')).toBe(false);
});

test('is number', () => {
    expect(ruleFunc.isNumber('34354')).toBe(false);
});

test('is phone number', () => {
    expect(ruleFunc.isSequence('xxx@xxx.xx')).toBe(false);
});

test('is phone number', () => {
    expect(ruleFunc.phoneNumber('+380957312207')).toBe(false);
});