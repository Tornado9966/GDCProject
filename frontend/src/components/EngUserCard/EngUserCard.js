import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
    Form, Segment, Modal, Button
} from 'semantic-ui-react';

import { 
    changePassword, confirmEmail, inputNames
} from 'constants/text-constants';

import EngChangePasswordForm from 'components/EngChangePasswordForm';
import EngImageLoader from 'components/EngImageLoader';
import EngInput from './EngInput';

import defaultImage from './default.png';

import './styles.scss';

export class EngUserCard extends Component {

    static propTypes = {
        initialValue: PropTypes.object, 
        userImage: PropTypes.string, 
        firstName: PropTypes.string, 
        lastName: PropTypes.string, 
        phoneNumber: PropTypes.string, 
        email: PropTypes.string, 
        confirm: PropTypes.bool, 
        updateUser: PropTypes.func, 
        handleSave: PropTypes.func
    };

    static defaultProps = {
        initialValue: null, 
        userImage: '', 
        firstName: '', 
        lastName: '', 
        phoneNumber: '', 
        email: '', 
        confirm: true, 
        updateUser: () => {}, 
        handleSave: () => {}
    };

    state = {
        isModalOpen: false
    };

    closeModal = () => this.setState({isModalOpen: false});

    openModal = () => this.setState({isModalOpen: true});

    render() {
        const {
            userImage, 
            firstName, 
            lastName, 
            phoneNumber, 
            email, 
            confirm, 
            updateUser, 
            handleSave
        } = this.props;

        const { isModalOpen } = this.state;
 
        return (
            <div className='user-card'>
                <Segment className='user-profile'>
                    <Fragment>
                        <EngImageLoader 
                            name={inputNames.userImage}
                            image={userImage || defaultImage} 
                            handleSave={updateUser}
                        />
                        <Form className='profile-form'>
                            <EngInput 
                                name={inputNames.firstName}
                                value={firstName}
                                handleSave={handleSave}
                            />
                            <EngInput 
                                name={inputNames.lastName}
                                value={lastName}
                                handleSave={handleSave} 
                            />
                            <EngInput
                                name={inputNames.phoneNumber}
                                icon='call'
                                value={phoneNumber}
                                handleSave={handleSave}
                            /> 
                            <EngInput 
                                name={inputNames.email}
                                error={confirm ? '' : confirmEmail}
                                icon='at' 
                                value={email}
                                handleSave={handleSave} 
                            />   
                        </Form>
                    </Fragment>
                    <Button 
                        onClick={this.openModal}
                        className='passwd-button'
                    >
                        {changePassword}
                    </Button>
                    <Modal 
                        size='small'
                        open={isModalOpen}
                        onClose={this.closeModal}
                        className='change-password-modal'
                    >
                        <EngChangePasswordForm onSubmit={this.closeModal} />
                    </Modal>
                </Segment>
            </div>
        );
    }
}
