import {connect} from 'react-redux';
import { EngUserCard } from './EngUserCard';

const mapStateToProps = ({auth: {email, firstName, userImage}}) => {
    return {
        firstName, 
        email,
        userImage 
    };
};

export default connect(mapStateToProps)(EngUserCard);

