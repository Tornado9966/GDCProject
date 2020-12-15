import { connect } from 'react-redux';

import { userActions } from 'redux/actions';
import Facebook from './Facebook';

function mapState(state = {}) {
    const { loggedIn, email, firstName, userImage } = state.auth;
    return {
        loggedIn, email, firstName, userImage
    };
}

const mapDispatchToProps = {
    socialFbLogin: userActions.socialFbLogin
};

export default connect(mapState, mapDispatchToProps)(Facebook);