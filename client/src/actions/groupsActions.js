import axios from 'axios';
import { GET_GROUPS } from './types';

export const getGroups = () => dispatch => {
	axios.get('/api/groups')
		.then(res => {
				dispatch({
					type: GET_GROUPS,
					payload: res.data
				})
			}
		)
		.catch(error => console.log(error))
};