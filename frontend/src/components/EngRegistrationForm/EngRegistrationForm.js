import React from 'react';
import { some as _some } from 'lodash';
import { Button, Form, Grid, Header, Divider } from 'semantic-ui-react';

import { isInvalid, confirmPass } from 'components/utils/isInvalid';
import * as constText from 'constants/text-constants';
import NotificationMessage from 'components/utils/NotificationMessage';
import { sendRegistrForm } from './utils';

import './styles.scss';

export class EngRegistrationForm extends React.Component {

	state = {
		form: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmation: '',
			phoneNumber: ''
		},
		validation: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmation: '',
			phoneNumber: ''
		},
		successMessage: false,
		errMessage: false,
		isLoading: false
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

	unlockSubmitButton = () => {
		return _some(this.state.validation, item => item !== false);
	};

	sendRegistrationData = () => {
		sendRegistrForm(this.state.form)
			.then(() => this.setState({ successMessage: true, errMessage: false }))
			.catch(() => this.setState({ successMessage: false, errMessage: true }))
			.finally(() => this.setState({ isLoading: false }));
	};

	handleSubmit = () => {
		this.setState({ isLoading: true }, this.sendRegistrationData);
	};

	render() {
		const { validation: {
			firstName, lastName, email,
			password, confirmation, phoneNumber
		}
		} = this.state;
		return (
			<Grid className='register-container'>
				<Grid.Column>
					<Header className='register-header'>
						{constText.registrationForm}
						<Divider />
					</Header>

					{this.state.successMessage &&
						(
							<NotificationMessage
								success={Boolean(true)}
								headerText={constText.successTextRegistration}
								thanksText={constText.thanksText}
							/>
						)}

					{this.state.errMessage &&
						(
							<NotificationMessage error={Boolean(true)} />
						)}

					<Form loading={this.state.isLoading} onSubmit={this.handleSubmit}>
						<Form.Input
							label={`First Name : ${firstName || ''}`}
							name='firstName'
							fluid
							icon='user'
							iconPosition='left'
							error={Boolean(firstName)}
							onChange={this.handleChange}
						/>

						<Form.Input
							label={`Last Name : ${lastName || ''}`}
							name='lastName'
							fluid
							icon='user'
							iconPosition='left'
							error={Boolean(lastName)}
							onChange={this.handleChange}
						/>

						<Form.Input
							label={`Email : ${email || ''}`}
							type='email'
							name='email'
							fluid
							icon='mail'
							iconPosition='left'
							error={Boolean(email)}
							onChange={this.handleChange}
						/>

						<Form.Input
							label={`Password : ${password || ''}`}
							type='password'
							name='password'
							fluid
							icon='lock'
							iconPosition='left'
							error={Boolean(password)}
							onChange={this.handleChange}
						/>

						<Form.Input
							label={`Comfirm password : ${confirmation || ''}`}
							type='password'
							name='confirmation'
							fluid
							icon='lock'
							iconPosition='left'
							error={Boolean(confirmation)}
							onChange={this.confirmationPassword}
						/>

						<Form.Input
							label={`Phone Number : ${phoneNumber || ''}`}
							name='phoneNumber'
							placeholder='+3 8*** *** ** **'
							fluid
							icon='call'
							iconPosition='left'
							error={Boolean(phoneNumber)}
							onChange={this.handleChange}
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
		);
	}
}