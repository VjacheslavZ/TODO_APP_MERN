import axios from 'axios';
import { GET_GROUPS, TOGGLE_DONE } from './types';

export const toggleDone = (taskId, isDone) => (dispatch) => {
	axios.post('/api/groups/toggleDone', {taskId, isDone})
		.then(res =>
			dispatch({
				type: GET_GROUPS,
				payload: res.data
			})
		)
		.catch(err => console.log(err));
};