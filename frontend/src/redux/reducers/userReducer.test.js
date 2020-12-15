import { userConstants } from 'redux/constants';

import { userReducer } from './userReducer';

describe('user reduser', () => {

    it('USERS_LOGIN_REQUEST', () => {
        const state = {};
        const action = {
            type: userConstants.LOGIN_REQUEST, 
            email: 'test@gmail.com' 
        };
        const results = userReducer(state, action);
        expect(results)
            .toEqual({
                showError: false,
                successMessage: false,
                loading: true
            });
    }); 

    it('USERS_LOGIN_SUCCESS', () => {
        const state = {
            showError: false,
            successMessage: false,
            loading: true
        };
        const action = {
            type: userConstants.LOGIN_SUCCESS, 
            user: {
                firstName: 'Victoria',
                laseName: 'Aliz',
                userImage: 'https://image.jpg',
                confirm: true,
                email: 'test@gmail.com'
            } 
        };
        const results = userReducer(state, action);
        expect(results)
            .toEqual({
                user: {
                    firstName: 'Victoria',
                    laseName: 'Aliz',
                    userImage: 'https://image.jpg',
                    confirm: true,
                    email: 'test@gmail.com'
                }, 
                loading: false,
                showError: false,
                successMessage: false,
                auth: {
                    email:'test@gmail.com',
                    firstName: 'Victoria',
                    userImage: 'https://image.jpg',
                    loggedIn: true
                }
            });
    });

    it('USERS_LOGIN_FAILURE', () => {
        const state = {
            showError: false,
            successMessage: false,
            loading: true
        };
        const action = {
            type: userConstants.LOGIN_FAILURE
        };
        const results = userReducer(state, action);
        expect(results)
            .toEqual({
                user: null,
                showError: true,
                loading: false,
                successMessage: false
            });
    });

    it('SEND_EMAIL_REQUEST', () => {
        const state = {
            loading: false,
            showError: false,
            successMessage: false
        };
        const action = {
            type: userConstants.EMAIL_REQUEST
        };
        const results = userReducer(state, action);
        expect(results)
            .toEqual({
                showError: false,
                successMessage: false,
                loading: true
            });
    });

    it('SEND_EMAIL_SUCCESS', () => {
        const state = {
            loading: false,
            showError: false,
            successMessage: false,
        };
        const action = {
            type: userConstants.EMAIL_SUCCESS
        };
        const results = userReducer(state, action);
        expect(results)
            .toEqual({
                showError: false,
                successMessage: true,
                loading: false
            });
    });

    it('SEND_EMAIL_FAILURE', () => {
        const state = {
            loading: false,
            showError: false,
            successMessage: false
        };
        const action = {
            type: userConstants.EMAIL_FAILURE, 
            error: 'message'
        };
        const results = userReducer(state, action);
        expect(results)
            .toEqual({
                showError: true,
                loading: false,
                successMessage: false
            });
    });

    it('USERS_UPDATE_name', () => {
        const state = {
            auth: {
                email:'test@gmail.com',
                firstName: 'Victoria',
                userImage: 'https://image.jpg',
                loggedIn: true
            }
        };
        const action = {
            type: userConstants.UPDATE, 
            value: {firstName: 'Vika'}
        };
        const results = userReducer(state, action);
        expect(results)
            .toEqual({
                auth: {
                    email:'test@gmail.com',
                    firstName: 'Vika',
                    userImage: 'https://image.jpg',
                    loggedIn: true
                }
            });
    });

    it('USERS_LOGOUT', () => {
        const state = {
            user: {
                firstName: 'Victoria',
                userImage: 'https://image.jpg',
                email: 'test@gmail.com'
            }, 
            auth: {
                email:'test@gmail.com',
                firstName: 'Victoria',
                userImage: 'https://image.jpg',
                loggedIn: true
            }
        };
        const action = {
            type: userConstants.LOGOUT, 
            user: {
                firstName: 'Victoria',
                userImage: 'https://image.jpg',
                email: 'test@gmail.com'
            }
        };
        const results = userReducer(state, action);
        expect(results)
            .toEqual({
                user: null, 
                auth: {
                    loggedIn: false
                }
            });
    });

    it('SOCIAL_LOGIN_SUCCESS', () => {
        const state = {};
        const action = {
            type: userConstants.SOCIAL_SUCCESS,
            user: {
                name: 'Victoria',
                email: 'test@gmail.com', 
                picture: {
                    data: {
                        url: 'https://image.jpg'
                    }
                }
            }
        };
        const results = userReducer(state, action);
        expect(results) 
            .toEqual({
                user: {
                    name: 'Victoria',
                    email: 'test@gmail.com', 
                    picture: {
                        data: {
                            url: 'https://image.jpg'
                        }
                    }
                },
                loading: false, 
                auth: {
                    firstName: 'Victoria',
                    userImage: 'https://image.jpg',
                    email: 'test@gmail.com', 
                    loggedIn: true
                }
            });
    });
});