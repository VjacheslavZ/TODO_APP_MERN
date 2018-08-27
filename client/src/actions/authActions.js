import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwtDecode from 'jwt-decode';
import Validator from 'validator';

import { SET_CURRENT_USER, GET_ERRORS } from './types';

//Register User
export const registerUser = (userData, history) => dispatch => {
	const validName = Validator.isLength(userData.name, {min: 2});
	const validEmail = Validator.isEmail(userData.email);
	const validPassword = Validator.isLength(userData.password, {min: 6});
	const validPasswordConfirm = Validator.isLength(userData.password_confirm, {min: 6});

	if(!validName || !validEmail || !validPassword || !validPasswordConfirm) {
		dispatch({
			type: GET_ERRORS,
			payload: {
				name: validName ? '' : 'Name must be between 2 and 30 characters',
				email: validEmail ? '' : "Email is invalid",
				password: validPassword? '' : 'Password must be at least 6 characters',
				password_confirm: validPasswordConfirm? '' : 'Password must be at least 6 characters',
			}
		});
		return
	}

	axios.post('/api/users/register', userData)
		.then(() => history.push('/login'))
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		})
};
//Login get user token
export const loginUser = userData => dispatch => {
	const validEmail = Validator.isEmail(userData.email);

	if(!validEmail) {
		dispatch({
			type: GET_ERRORS,
			payload: {
				email: 'Email is not valid ',
			}
		});

		return
	}

	axios.post('api/users/login', userData)
		.then(res => {
			//save to localStorage
			const {token} = res.data;
			//Set token to localStorage
			localStorage.setItem('jwtToken', token);
			//Set token to auth header
			setAuthToken(token);
			//Decode token to get user data
			const decoded = jwtDecode(token);
			//Set current user
			dispatch(setCurrentUser(decoded))
		})
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			})
		})
};
//Set logged user
export const setCurrentUser = (decoded) => {
	return {
		type: SET_CURRENT_USER,
		payload: decoded
	}
};
//Log user out
export const logoutUser = () => dispatch => {
	//Remove token form localStorage
	localStorage.removeItem('jwtToken');
	//Remove aut header for future request
	setAuthToken(false);
	//Ser current user to {} which will ser isAuth to false
	dispatch(setCurrentUser({}))
};