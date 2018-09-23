import axios from 'axios';
import Validator from 'validator';

import { ADD_NEW_TASK, GET_ERRORS } from './types';

export const addNewTask = (newTaskData, history) => dispatch => {
	const validTaskDesc = Validator.isLength(newTaskData.task_short_desc, {min: 5});
	const validDateFrom = Validator.isISO8601(newTaskData.from);
	const validDateTo = Validator.isISO8601(newTaskData.to);
	const validLocation = Validator.isLength(newTaskData.location, {min: 2});

	if(!validTaskDesc || !validDateFrom || !validDateTo || !validLocation) {
		dispatch({
			type: GET_ERRORS,
			payload: {
				task_short_desc: validTaskDesc ? '' : 'Description must be at least 5 characters',
				from: validDateFrom ? '' : "Date is invalid",
				to: validDateTo? '' : 'Date is invalid',
				location: validLocation? '' : 'Location must be at least 2 characters',
			}
		});
		return
	}
	//todo axios
};

