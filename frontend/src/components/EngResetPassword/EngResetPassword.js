import React from 'react';
import { Redirect } from 'react-router-dom';
import { some as _some } from 'lodash';
import { Button, Form, Grid, Header, Divider } from 'semantic-ui-react';

import { authService, authRoute } from 'services/http-client/authService';
import { isInvalid, confirmPass } from 'components/utils/isInvalid';
import * as constText from 'constants/text-constants';
import NotificationMessage from 'components/utils/NotificationMessage';

export class EngResetPassword extends React.Component {

	state = {
		form: {
			password: '',
			confirmation: ''
		},
		validation: {
			password: '',
			confirmation: ''
		},
		successMessage: false,
		errMessage: false,
		isLoading: false,
		reseted: false
	};

	handleChange = ({ target: { name, value } }) => {
		const errorMessage = isInvalid(value, name);
		this.setState(prevState => ({
			form: {
				...prevState.form,
				[name]: value
			},
			validation: {
				...prevState.validation,
				[name]: errorMessage
			},
		}));
	};

	confirmationPassword = ({ target: { name, value } }) => {
		const { password } = this.state.form;
		const confirmResult = confirmPass(password, value);
		this.setState(prevState => ({
			form: {
				...prevState.form,
				[name]: value
			},
			validation: {
				...prevState.validation,
				[name]: confirmResult
			},
		}));
	}

	resetPassword = () => {
		const { password } = this.state.form;
		const { pathname } = this.props.location;
		const hash = pathname.substring(authRoute.reset.length + 1);

		return authService.resetPassword(hash, password)
			.then(res => {
				if (res.data === true && res.status === 200) {
					this.setState({ reseted: true });
				}
			});
	}

	unlockSubmitButton = () => {
		return _some(this.state.validation, item => item !== false);
	};

	handleSubmit = () => {
		this.setState({ isLoading: true }, this.resetPassword);
	};

	render() {
		const { reseted, validation: { password, confirmation } } = this.state;
		return (
			reseted
			? 	( <Redirect to='/login' /> )
			:  	(
					<Grid className='register-container'>
						<Grid.Column>
							<Header className='register-header'>
								{constText.resetPassword}
								<Divider />
							</Header>

							{this.state.successMessage &&
								(
									<NotificationMessage
										success={Boolean(true)}
										headerText={constText.successUpdatePassword}
										thanksText={constText.successUpdatePasswordText}
									/>
								)}

							{this.state.errMessage &&
								(
									<NotificationMessage error={Boolean(true)} />
								)}

							<Form loading={this.state.isLoading} onSubmit={this.handleSubmit}>

								<Form.Input
									label={`New Password : ${password || ''}`}
									type='password'
									name='password'
									fluid
									icon='lock'
									iconPosition='left'
									error={Boolean(password)}
									onChange={this.handleChange}
								/>

								<Form.Input
									label={`Comfirm new Password : ${confirmation || ''}`}
									type='password'
									name='confirmation'
									fluid
									icon='lock'
									iconPosition='left'
									error={Boolean(confirmation)}
									onChange={this.confirmationPassword}
								/>

								<Grid className='register-center'>
									<Grid.Column>
										<Button
											className='register-button'
											disabled={this.unlockSubmitButton()}
											type='submit'
										>
											{constText.submit}
										</Button>
									</Grid.Column>
								</Grid>
							</Form>
						</Grid.Column>
					</Grid>
				)
		);
	}
}