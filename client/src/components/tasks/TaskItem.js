import React from 'react';
import { connect } from 'react-redux'
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { toggleDone } from '../../actions/taskActions';

const TaskItem = ({dataTask, toggleDone}) => {
	const {isDone, taskDescpiption, taskName, id} = dataTask;

	return (
		<li className={classnames("list__task", {'isDone': isDone})} onClick={() => toggleDone(id, isDone)}>
			<div>
				<span>{taskName}/</span>
				<span>{taskDescpiption}</span>
			</div>
		</li>
	);
};

TaskItem.propTypes = {
	toggleDone: PropTypes.func.isRequired,
	/*data tasj obj*/
	dataTask: PropTypes.shape({
		id: PropTypes.number.isRequired,
		isDone: PropTypes.bool.isRequired,
		taskName: PropTypes.string.isRequired,
		taskDescpiption: PropTypes.string,
	})
};

export default connect(null, { toggleDone })(TaskItem);
