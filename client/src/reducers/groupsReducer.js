import { FILTER_GROUPS, GET_GROUPS, GET_GROUP_DATA } from '../actions/types';

const initialState = {
	groups: [],
	textFilter: ''
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
				textFilter: action.payload
			};
		case GET_GROUP_DATA:
			return {
				...state,
				dataGroup: action.payload
			};
		default:
			return state
	}
}