import { combineReducers } from 'redux';

import authReducer from './authReducer';
import errorReducer from './errorReducer';
import navBarReduser from './navBarReducer';

export default combineReducers({
	auth: authReducer,
	errors: errorReducer,
	isActiveNavBar: navBarReduser
});
