import React, { Component } from 'react';
import {
    Button, Form, Header, Label
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { some as _some } from 'lodash';

import EngPasswordInput from 'components/EngPasswordInput';

import { 
    changePassword, saveNewPassword, incorrectPassword 
} from 'constants/text-constants';
import { isInvalid, confirmPass } from 'components/utils/isInvalid';
import { updatePassword } from './utils/updatePassword';

import './styles.scss';

export class EngChangePasswordForm extends Component {

    static propTypes = {
        onSubmit: PropTypes.func
    };

    static defaultProps = {
        onSubmit: () => {}
    };

    state = {
        values : {
            password: '', 
            confirmation: '',
            previousPassword: ''
        }, 
        validation: {
            password: '', 
            confirmation: '',
            previousPassword: ''
        }
    };

    isButtonDisabled = () => {
        return _some(this.state.validation, value => value !== false);
    };  
    
    changeState = (name, value, error) => {
        return this.setState(prevState => ({
                values: {
                    ...prevState.values,
                    [name]: value
                },
                validation: {
                    ...prevState.validation,
                    [name]: error
                }
            })
        );
    };

    handleChange = ({target: {name, value}}) => {
        const error = isInvalid(value, name);
        return this.changeState(name, value, error);
    };

    handleConfirm = ({target: {name, value}}) => {
        const { password } = this.state.values;
        const error = confirmPass(password, value);
        return this.changeState(name, value, error);
    };

    handleSubmit = () => {
        const { password, previousPassword } = this.state.values;
        const inputName = 'previousPassword';
        return updatePassword(password, previousPassword)
            .then(() => this.props.onSubmit())
            .catch(() => this.changeState(inputName, previousPassword, incorrectPassword));
    };

    render() {
        const {
            password, 
            confirmation,
            previousPassword
        } = this.state.values;

        const {
            password: passwordErr, 
            confirmation: confirmationErr, 
            previousPassword: previousPasswordErr
        } = this.state.validation;

        return (
            <Form className="change-passwd-form">
                <Header 
                    textAlign="center"
                    className='change-password'
                >
                    {changePassword}
                </Header>
                    {
                        previousPasswordErr && 
                            <Label 
                                pointing='below' 
                                className='input-error'
                            >
                                {previousPasswordErr}
                            </Label>
                    }
                    <EngPasswordInput
                        className='password__input'
                        name='previousPassword'
                        placeholder='Enter your previous password'
                        value={previousPassword}
                        error={Boolean(previousPasswordErr)}
                        onChange={this.handleChange}
                    />
                    {
                        passwordErr && 
                            <Label 
                                pointing='below' 
                                className='input-error'
                            >
                                {passwordErr}
                            </Label>
                    }
                    <EngPasswordInput
                        className='password__input'
                        name='password'
                        placeholder='Enter new password'
                        value={password}
                        error={Boolean(passwordErr)}
                        onChange={this.handleChange}
                    />
                    {
                        confirmationErr && 
                            <Label 
                                pointing='below' 
                                className='input-error'
                            >
                                {confirmationErr}
                            </Label>
                    }
                    <EngPasswordInput
                        className='password__input'
                        name='confirmation'
                        placeholder='Enter new password'
                        value={confirmation}
                        error={Boolean(confirmationErr)}
                        message={incorrectPassword}
                        onChange={this.handleConfirm}
                    />

                    <Button
                        onClick={this.handleSubmit}
                        disabled={this.isButtonDisabled()} 
                        className='passwd-button'
                    >
                        {saveNewPassword}
                    </Button>
            </Form>
        );
    }
}