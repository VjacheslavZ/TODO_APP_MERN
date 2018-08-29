import { TOGGLE_NAVBAR } from './types';

export const toggleNavBar = (isVisible) => dispatch => {
	dispatch({
		type: TOGGLE_NAVBAR,
		payload: !isVisible
	})
};
