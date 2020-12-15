import {authRoute} from './authService';

describe('authService', () => {

    it('it should contain correct route path', () => {
        expect(authRoute.reset).toBe('/reset');
    });
});