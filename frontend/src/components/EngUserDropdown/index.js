import {connect} from 'react-redux';

import { userActions } from 'redux/actions';
import { EngUserDropdown } from './EngUserDropdown';

function mapState(state={}) {
  const { firstName, userImage } = state.auth;
  return {
    firstName,
    userImage
  };
}

const mapDispatchToProps = {
  logout: userActions.logout
};
  
export default connect(mapState, mapDispatchToProps)(EngUserDropdown);
