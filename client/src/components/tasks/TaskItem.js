import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import classnames from 'classnames';

class TaskItem extends Component {
	render() {
		const {isDone, taskDescpiption, taskName} = this.props.dataTask;

		return (
			<li className={classnames("list__task", {'isDone': isDone})}>
				<Link to='#'>
					<span>{taskName}/</span>
					<span>{taskDescpiption}</span>
				</Link>
			</li>
		);
	}
}

TaskItem.propTypes = {};

export default TaskItem;
