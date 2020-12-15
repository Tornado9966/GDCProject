import {connect} from 'react-redux';
import { update } from 'redux/actions/userActions';
import { EngUserProfile } from './EngUserProfile';

const mapDispatchToProps = dispatch => ({
    updateInfo(value) {
        dispatch(update(value));
    }
});
  
export default connect(null, mapDispatchToProps)(EngUserProfile);