import { confirmPass } from './isInvalid';

test('is equal', () => {
    expect(confirmPass('asd', 'asd')).toBe(false);
});