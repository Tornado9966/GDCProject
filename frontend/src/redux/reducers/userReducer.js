import { userConstants } from 'redux/constants';

const INITIAL_STATE = {
    user: null,
    loading: null,
    showError: null,
    successMessage: null,
    auth: {
        email: null,
        firstName: null,
        userImage: null,
        userEmail: null,
        loggedIn: null
    }
};

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            state = {
                ...state,
                showError: false,
                successMessage: false,
                loading: true
            }; break;
        case userConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                user: action.user,
                loading: false,
                auth: {
                    firstName: action.user.firstName,
                    userImage: action.user.userImage,
                    email: action.user.email,
                    loggedIn: true,
                    social: false
                }
            }; break;
        case userConstants.SOCIAL_FB_SUCCESS:
            state = {
                ...state,
                user: action.user,
                loading: false,
                auth: {
                    firstName: action.user.name,
                    userImage: action.user.picture.data.url,
                    email: action.user.email,
                    loggedIn: true,
                    social: true
                }
            }; break;
        case userConstants.SOCIAL_G_SUCCESS:
            state = {
                ...state,
                user: action.user,
                loading: false,
                auth: {
                    firstName: action.user.profileObj.name,
                    userImage: action.user.profileObj.imageUrl,
                    email: action.user.profileObj.email,
                    loggedIn: true,
                    social: true
                }
            }; break;
        case userConstants.LOGIN_FAILURE:
            state = {
                ...state,
                user: null,
                showError: true,
                loading: false
            }; break;
        case userConstants.LOGOUT:
            state = {
                ...state,
                user: null,
                auth: {
                    loggedIn: false
                }
            }; break;
        case userConstants.EMAIL_REQUEST:
            state = {
                ...state,
                showError: false,
                successMessage: false,
                loading: true
            }; break;
        case userConstants.EMAIL_SUCCESS:
            state = {
                ...state,
                successMessage: true,
                loading: false
            }; break;
        case userConstants.EMAIL_FAILURE:
            state = {
                ...state,
                showError: true,
                loading: false
            }; break;
        case userConstants.UPDATE:
            state = {
                ...state,
                auth: {
                    ...state.auth,
                    ...action.value
                }
            }; break;
        default:
            return state;
    }
    return state;
};