import { connect } from 'react-redux';

import { userActions } from 'redux/actions';
import Google from './Google';

function mapState(state = {}) {
    const { loggedIn, email, firstName, userImage } = state.auth;
    return {
        loggedIn, email, firstName, userImage
    };
}   

const mapDispatchToProps = {
    socialGLogin: userActions.socialGLogin
};

export default connect(mapState, mapDispatchToProps)(Google);