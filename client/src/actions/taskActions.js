import { TOGGLE_DONE } from './types';

export const toggleDone = (taskId) => (dispatch) => {
	dispatch({
		type: TOGGLE_DONE,
		payload: taskId
	})
};