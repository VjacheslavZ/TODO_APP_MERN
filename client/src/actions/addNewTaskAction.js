import axios from 'axios';
import Validator from 'validator';

import { ADD_NEW_TASK, GET_ERRORS } from './types';

export const addNewTask = (newTaskData, groupId, history) => dispatch => {
	const validTaskDesc = Validator.isLength(newTaskData.taskName, {min: 5});
	const validDateFrom = Validator.isISO8601(newTaskData.from);
	const validDateTo = Validator.isISO8601(newTaskData.to);
	const validDescription = Validator.isLength(newTaskData.taskDescpiption, {min: 5});

	if(!validTaskDesc || !validDateFrom || !validDateTo || !validDescription) {
		dispatch({
			type: GET_ERRORS,
			payload: {
				taskName: validTaskDesc ? '' : 'Description must be at least 5 characters',
				from: validDateFrom ? '' : "Date is invalid",
				to: validDateTo? '' : 'Date is invalid',
				taskDescpiption: validDescription? '' : 'Description must be at least 5 characters',
				isDone: false,
			}
		});
		return
	}
	//todo axios
	axios.post('/api/groups/add_new_task', {newTaskData, groupId})
		.then(() => {
			console.log(history)
		})
		.catch(err => console.log(err))
};

