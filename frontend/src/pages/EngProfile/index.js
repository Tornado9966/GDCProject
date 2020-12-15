import {connect} from 'react-redux';
import { EngProfile } from './EngProfile';

const mapStateToProps = state => {
    const {auth: {loggedIn, social}} = state;
    return {loggedIn, social};
};

export default connect(mapStateToProps, null)(EngProfile);