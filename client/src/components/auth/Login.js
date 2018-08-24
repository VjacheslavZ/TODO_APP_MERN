import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FaIcon from '../common/FaIcon';
import TextFieldCroup from '../common/TextFieldGroup'

class Login extends Component {
	constructor() {
		super();

		this.state = {
			email: '',
			password: '',
			errors: {},
		}

	}

	onChange(e) {

	}

	onSubmit(e) {

	}

	render() {
		return (
			<div className="auth">
				<form onSubmit={this.onSubmit} className="form__auth">
					<div className="input__wrap">
						<FaIcon faClass='fa-user'/>
						<TextFieldCroup
							className='input__default'
							name='email'
							placeholder="Email"
							required="required"
							value={this.state.email}
							type='text'
							onChange={this.onChange}
						/>
					</div>

					<div className="input__wrap">
						<FaIcon faClass='fa-lock'/>
						<TextFieldCroup
							className='input__default'
							name='password'
							placeholder="Password"
							required="required"
							value={this.state.password}
							type='text'
							onChange={this.onChange}
						/>
					</div>

					<button className="button__form-action" type="submit">Sign In</button>
				</form>
			</div>
		);
	}
}

Login.propTypes = {};

export default Login;