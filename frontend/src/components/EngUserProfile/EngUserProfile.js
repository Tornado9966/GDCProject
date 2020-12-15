import React, { Component } from 'react';
import {keys as _keys} from 'lodash';
import PropTypes from 'prop-types';

import { getUserInfo, updateUserInfo } from 'services/http-client/users';
import { inputNames } from 'constants/text-constants';
import EngUserCard from 'components/EngUserCard';

export class EngUserProfile extends Component {

    initialValue = null;

    static propTypes = {
        updateInfo: PropTypes.func
    };

    static defaultProps = {
        updateInfo: () => {}
    };

    state = {
        lastName: this.initialValue, 
        phoneNumber: this.initialValue, 
        confirm: this.initialValue
    };

    componentDidMount() {
        return getUserInfo()
            .then(
                ({
                    data: {
                        lastName, 
                        phoneNumber, 
                        confirm
                    }
                }) => {
                    return this.setState({
                        lastName, 
                        phoneNumber, 
                        confirm
                    });
                }
            );
    }

    updateState = (name, incomingValue) => {
        return _keys(this.state).includes(name) ? 
            this.setState(incomingValue) : 
            this.props.updateInfo(incomingValue);
    };

    updateUser = (name, incomingValue) => {
        return updateUserInfo(incomingValue)
            .then(() => this.updateState(name, incomingValue));
    };

    confirm = name => {
        return name === inputNames.email ? 
            this.setState({confirm: false}) : {};
    };

    handleSave = (name, value) => {
        const incomingValue = {[name]: value};
        return this.updateUser(name, incomingValue)
            .then(() => this.confirm(name));
    };

    render() {
        return (
            <EngUserCard 
                {...this.state}
                initialValue={null}
                handleSave={this.handleSave}
                updateUser={this.updateUser}
            />
        );
    }
}