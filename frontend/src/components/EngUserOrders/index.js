import { connect } from 'react-redux';
import EngUserOrders from './EngUserOrders';

function mapState(state = {}) {
    const { email, loggedIn } = state.auth;
    return {
        email,
        loggedIn
    };
}

export default connect(mapState)(EngUserOrders);
