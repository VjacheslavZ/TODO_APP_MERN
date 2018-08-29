import { TOGGLE_NAVBAR } from '../actions/types';

const initialState = {
	isActiveNavBar: false
};

export default function ( state = initialState, action ) {
	switch ( action.type ) {
		case TOGGLE_NAVBAR:
			return {
				...state,
				isActiveNavBar: action.payload
			};
		default:
			return state
	}
}