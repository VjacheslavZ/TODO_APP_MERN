import React, { Component } from 'react';

class TaskItem extends Component {
	render() {
		return (
			<li className="list__task"><a href="task.html">Todo this task</a></li>
		);
	}
}

TaskItem.propTypes = {};

export default TaskItem;
