import {connect} from 'react-redux';

import { userActions } from 'redux/actions';
import { EngLoginForm } from './EngLoginForm';

function mapState({auth: {loggedIn}, loading, successMessage, showError}) {
  return {
    loggedIn,
    loading,
    successMessage,
    showError
  };
}

const mapDispatchToProps = {
  login: userActions.login,
  logout: userActions.logout,
  sendEmail: userActions.sendEmail
};
  
export default connect(mapState, mapDispatchToProps)(EngLoginForm);
