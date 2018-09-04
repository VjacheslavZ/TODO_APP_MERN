import { FILTER_GROUPS } from './types';

export const filterGroups = (filterText) => (dispatch) => {
	dispatch({
		type: FILTER_GROUPS,
		payload: filterText
	})
};