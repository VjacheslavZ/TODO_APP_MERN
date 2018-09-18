import { combineReducers } from 'redux';

import authReducer from './authReducer';
import errorReducer from './errorReducer';
import navBarReduser from './navBarReducer';
import groupsReducer from './groupsReducer';

export default combineReducers({
	auth: authReducer,
	errors: errorReducer,
	navBar: navBarReduser,
	groups: groupsReducer,
});
