import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import EngUserProfile from 'components/EngUserProfile';

export function EngProfile({loggedIn}) {
    return(
        loggedIn ?
            <EngUserProfile />
        :
            <Redirect to='/' />
    );
}

EngProfile.propTypes = {
    loggedIn: PropTypes.bool,
    social: PropTypes.bool
};

EngProfile.defaultProps = {
    loggedIn: false,
    social: false
};

