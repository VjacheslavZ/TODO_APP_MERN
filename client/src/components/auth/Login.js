import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loginUser } from '../../actions/authActions';


import FaIcon from '../common/FaIcon';
import TextFieldCroup from '../common/TextFieldGroup'


class Login extends Component {
	constructor() {
		super();

		this.state = {
			email: '',
			password: '',
			errors: {},
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value})
	}

	onSubmit(e) {
		e.preventDefault();

		const userData = {
			email: this.state.email,
			password: this.state.password,
		};

		this.props.loginUser(userData);
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

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(mapStateToProps, {loginUser})(Login);