import { FILTER_GROUPS, GET_GROUPS } from '../actions/types';

const initialState = {
	groups: [],
	textFilterGroups: ''
};

export default function ( state = initialState, action ) {
	switch ( action.type ) {

		case GET_GROUPS:
			return {
				...state,
				groups: action.payload
			};
		case FILTER_GROUPS:
			return {
				...state,
				textFilterGroups: action.payload
			};
		default:
			return state
	}
}