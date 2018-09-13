import { TOGGLE_DONE } from '../actions/types';

const initialState = {
	isDone: false
};

export default function ( state = initialState, action ) {
	switch ( action.type ) {
		case TOGGLE_DONE:
			return {
				...state,

			};
		default:
			return state
	}
}