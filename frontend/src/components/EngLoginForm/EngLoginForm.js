import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { some as _some } from 'lodash';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  List
} from 'semantic-ui-react';

import { isInvalid } from 'components/utils/isInvalid';
import NotificationMessage from 'components/utils/NotificationMessage';
import * as constText from 'constants/text-constants';
import Facebook from './Facebook';
import Google from './Google';

import './styles.scss';

export class EngLoginForm extends React.Component {
  static propTypes = {
    loggedIn: PropTypes.bool,
    loading: PropTypes.bool,
    showError: PropTypes.bool
  };

  static defaultProps = {
    loggedIn: false,
    loading: false,
    showError: false
  };

  state = {
    email: '',
    password: '',
    forgotPassword: false,
    notValid: {
      email: true,
      password: true
    }
  };

  disableSubmitBtn = () => {
    return this.state.forgotPassword
      ? this.state.notValid.email
      : _some(this.state.notValid, item => item !== false);
  };

  toggleForm = () => {
    this.setState(prevState => ({
      ...prevState,
      forgotPassword: !prevState.forgotPassword,
      emailSent: false,
      sendEmailError: false
    }));
  };

  handleChange = (event, { name, value }) => {
    const sendEmailError = Boolean(isInvalid(value, 'login'));

    this.setState(prevState => ({
      [name]: value,
      notValid: {
        ...prevState.notValid,
        [name]: sendEmailError
      }
    }));
  };

  handleSubmit = () => {
    const { email, password } = this.state;

    this.state.forgotPassword
      ? this.props.sendEmail(email)
      : this.props.login(email, password);
  };

  render() {
    const { forgotPassword } = this.state;
    const {
      loggedIn,
      loading,
      successMessage,
      showError
    } = this.props;

    return (
      loggedIn
        ? (<Redirect to='/' />)
        : (
          <Grid className="login-wrap">
            <Grid.Column className="login-container">
              <Header className="login-header">
                {forgotPassword ? constText.resetPassword : constText.headerText}
              </Header>

              {
                showError &&
                (
                  <NotificationMessage error={Boolean(true)} errorText={constText.loginErrorText} />
                )
              }

              {
                successMessage &&
                (
                  <Message positive>
                    <Message.Header>{constText.confirmEmail}</Message.Header>
                  </Message>
                )
              }

              <Form
                loading={loading}
                onSubmit={this.handleSubmit}
                className="login-form"
              >
                <Segment stacked>
                  {
                    forgotPassword &&
                    <List className='login-password'>
                      <List.Item>
                        {constText.enterEmailToResetPass}
                      </List.Item>
                    </List>
                  }
                  <Form.Input
                    fluid
                    name='email'
                    type='email'
                    icon='user'
                    iconPosition='left'
                    placeholder='E-mail address'
                    onChange={this.handleChange}
                  />
                  {
                    forgotPassword
                      ? <List>
                        <List.Item
                          as='a'
                          className='forgot-password'
                          onClick={this.toggleForm}
                        >
                          {constText.returnToLogin}
                        </List.Item>
                        </List>
                      : <div className='login-password'>
                        <Form.Input
                          fluid
                          name='password'
                          type='password'
                          icon='lock'
                          iconPosition='left'
                          placeholder='Password'
                          onChange={this.handleChange}
                        />
                        <List.Item
                          as='a'
                          className='forgot-password'
                          onClick={this.toggleForm}
                        >
                          {constText.forgotPassword}
                        </List.Item>
                        </div>
                  }
                  <Button
                    className="login-button"
                    disabled={this.disableSubmitBtn()}
                  >
                    {
                      forgotPassword
                        ? constText.sendEmailToResetPass
                        : constText.loginBtnText
                    }
                  </Button>
                </Segment>
              </Form>
              <Message>
                {constText.signUpText}
                <a href={constText.linkToRegistration}>
                  {constText.signUpLinkText}
                </a>
              </Message>
              <Header as='h5'>
                <div className="socials-wrap">
                  <div className="socials-facebook"><Facebook /></div>
                  <div className="socials-google"><Google /></div>
                </div>
              </Header>
            </Grid.Column>
          </Grid>
        )
    );
  }
}