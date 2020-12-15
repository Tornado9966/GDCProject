import { authService } from 'services/http-client/authService';
import { userConstants } from 'redux/constants';

export const userActions = {
  login,
  logout,
  sendEmail,
  socialFbLogin,
  socialGLogin
};

function login(email, password) {
  return dispatch => {
    dispatch(request({ email }));
    authService.login(email, password)
      .then(
        resp => {
          dispatch(success(resp.data));
        },
        error => {
          dispatch(failure(error.toString()));
        }
      );
  };
}
function socialFbLogin(res) {
  return dispatch => {
    if (res.accessToken) {
      dispatch(socialFbSuccess(res));
    } else {
      dispatch(failure('Ooops, something went wrong'));
    }
  };
}
function socialGLogin(res) {
  return dispatch => {
    if (res.accessToken) {
      dispatch(socialGSuccess(res));
    } else {
      dispatch(failure('Ooops, something went wrong'));
    }
  };
}
function logout() {
  return dispatch => {
    dispatch(logoff());
  };
}
function sendEmail(email) {
  return dispatch => {
    dispatch(emailRequest());
    authService.forgotPassword(email)
      .then(
        () => {
          dispatch(emailSuccess());
        },
        error => {
          dispatch(emailFailure(error.toString()));
        }
      );
  };
}

function request(user) { return { type: userConstants.LOGIN_REQUEST, user }; }
function success(user) { return { type: userConstants.LOGIN_SUCCESS, user }; }
function socialFbSuccess(user) { return { type: userConstants.SOCIAL_FB_SUCCESS, user }; }
function socialGSuccess(user) { return { type: userConstants.SOCIAL_G_SUCCESS, user }; }
function failure(error) { return { type: userConstants.LOGIN_FAILURE, error }; }

function logoff(user) { return { type: userConstants.LOGOUT, user }; }

function emailRequest() { return { type: userConstants.EMAIL_REQUEST }; }
function emailSuccess() { return { type: userConstants.EMAIL_SUCCESS }; }
function emailFailure(error) { return { type: userConstants.EMAIL_FAILURE, error }; }

export const update = value => {
  return {
    type: userConstants.UPDATE,
    value
  };
};
