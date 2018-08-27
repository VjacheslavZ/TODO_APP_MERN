import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import { registerUser } from '../../actions/authActions';
import FaIcon from '../common/FaIcon';
import TextFieldCroup from '../common/TextFieldGroup';

class Register extends Component {
	constructor() {
		super();

		this.state = {
			name: '',
			email: '',
			password: '',
			password_confirm: '',
			errors: {},
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	onSubmit(e) {
		e.preventDefault();

		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password_confirm: this.state.password_confirm,
		};

		this.props.registerUser(newUser, this.props.history)
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.errors) {
			this.setState({ errors: nextProps.errors })
		}
	}

	componentDidMount() {
		if(this.props.auth.isAuthenticated) {
			this.props.history.push('/groups');
		}
	}

	render() {
		const {errors} = this.state;

		return (
			<div className="auth">
				<form className="form__auth" onSubmit={this.onSubmit}>

					<div className="input__wrap">
						<FaIcon faClass='fa-user'/>
						<TextFieldCroup
							className='input__default'
							name='name'
							placeholder="Name"
							required="required"
							value={this.state.name}
							type='text'
							onChange={this.onChange}
							error={errors.name}
						/>
					</div>

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
							error={errors.email}
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
							type='password'
							onChange={this.onChange}
							error={errors.password}
						/>
					</div>

					<div className="input__wrap">
						<FaIcon faClass='fa-lock'/>
						<TextFieldCroup
							className='input__default'
							name='password_confirm'
							placeholder="Password confirm"
							required="required"
							value={this.state.password_confirm}
							type='password'
							onChange={this.onChange}
							error={errors.password_confirm}
						/>
					</div>

					<button className="button__form-action" type="submit">Join</button>
				</form>
			</div>
		);
	}
}

Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(mapStateToProps, {registerUser})(withRouter(Register));
